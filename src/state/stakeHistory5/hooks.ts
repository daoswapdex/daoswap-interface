import { ChainId, CurrencyAmount, JSBI, Token, TokenAmount, Pair } from '@daoswapdex/daoswap-dex-sdk'
import { useMemo } from 'react'
// TODO:Daoswap ERC20
import { DAO, USDT, ETH, HFIL, HT, UNI, MDX, HBCH, HLTC, MANA, HDOT, LINK } from '../../constants/tokensInfo'
import { STAKING_REWARDS_INTERFACE } from '../../constants/abis/staking-rewards'
import { useActiveWeb3React } from '../../hooks'
import { NEVER_RELOAD, useMultipleContractSingleData } from '../multicall/hooks'
import { tryParseAmount } from '../swap/hooks'
import { useTranslation } from 'react-i18next'

// TODO:Daoswap Start Time
export const STAKING_GENESIS = 1645066800

// TODO:Daoswap Rewards Duration : unit - day
export const REWARDS_DURATION_DAYS = 28

// TODO add staking rewards addresses here
export const STAKING_REWARDS_INFO: {
  [chainId in ChainId]?: {
    tokens: [Token, Token]
    stakingRewardAddress: string
  }[]
} = {
  [ChainId.HECO_MAINNET]: [
    {
      tokens: [USDT[ChainId.HECO_MAINNET], DAO[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0xcA691423C64fa6B24CD54e45353A236521D2C7f5'
    },
    {
      tokens: [USDT[ChainId.HECO_MAINNET], ETH[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0x925D975fD145a99829ea2b734492Ec6B8017e27C'
    },
    {
      tokens: [USDT[ChainId.HECO_MAINNET], HFIL[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0x6a7b10753D853b6e44aE793406584C55669Ed505'
    },
    {
      tokens: [USDT[ChainId.HECO_MAINNET], HT[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0xC7D59edFE2CBbb21fFE84c9739d997cd6b139D08'
    },
    {
      tokens: [USDT[ChainId.HECO_MAINNET], UNI[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0x47301CEC97925F91CbeD5457300f4462A45ACB33'
    },
    {
      tokens: [USDT[ChainId.HECO_MAINNET], MDX[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0x4FD95D89Efb537FA72b87671541a835AdcdE3568'
    },
    {
      tokens: [USDT[ChainId.HECO_MAINNET], HBCH[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0xef827c4067C823E829C1053aecb7C04B3b043Bd5'
    },
    {
      tokens: [USDT[ChainId.HECO_MAINNET], HLTC[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0xd8505972ac221736c134De156347D6E98017e015'
    },
    {
      tokens: [USDT[ChainId.HECO_MAINNET], MANA[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0x525576c19E81Bd6370aF036D03E07FbbE1e84FaE'
    },
    {
      tokens: [USDT[ChainId.HECO_MAINNET], HDOT[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0xA2a18f3abf965ae839eD192fad58d3Fd7e1Eefbb'
    },
    {
      tokens: [USDT[ChainId.HECO_MAINNET], LINK[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0xd5cc1a949F7f70689742FE790F9A13292b5CfC35'
    }
  ]
}

export interface StakingInfo {
  // the address of the reward contract
  stakingRewardAddress: string
  // the tokens involved in this pair
  tokens: [Token, Token]
  // the amount of token currently staked, or undefined if no account
  stakedAmount: TokenAmount
  // the amount of reward token earned by the active account, or undefined if no account
  earnedAmount: TokenAmount
  // the total amount of token staked in the contract
  totalStakedAmount: TokenAmount
  // the amount of token distributed per second to all LPs, constant
  totalRewardRate: TokenAmount
  // the current amount of token distributed to the active account per second.
  // equivalent to percent of total supply * reward rate
  rewardRate: TokenAmount
  // when the period ends
  periodFinish: Date | undefined
  // calculates a hypothetical amount of token distributed to the active account per second.
  getHypotheticalRewardRate: (
    stakedAmount: TokenAmount,
    totalStakedAmount: TokenAmount,
    totalRewardRate: TokenAmount
  ) => TokenAmount
}

// gets the staking info from the network for the active chain id
export function useStakingInfo(pairToFilterBy?: Pair | null): StakingInfo[] {
  const { chainId, account } = useActiveWeb3React()

  const info = useMemo(
    () =>
      chainId
        ? STAKING_REWARDS_INFO[chainId]?.filter(stakingRewardInfo =>
            pairToFilterBy === undefined
              ? true
              : pairToFilterBy === null
              ? false
              : pairToFilterBy.involvesToken(stakingRewardInfo.tokens[0]) &&
                pairToFilterBy.involvesToken(stakingRewardInfo.tokens[1])
          ) ?? []
        : [],
    [chainId, pairToFilterBy]
  )

  const uni = chainId ? DAO[chainId] : undefined

  const rewardsAddresses = useMemo(() => info.map(({ stakingRewardAddress }) => stakingRewardAddress), [info])

  const accountArg = useMemo(() => [account ?? undefined], [account])

  // get all the info from the staking rewards contracts
  const balances = useMultipleContractSingleData(rewardsAddresses, STAKING_REWARDS_INTERFACE, 'balanceOf', accountArg)
  const earnedAmounts = useMultipleContractSingleData(rewardsAddresses, STAKING_REWARDS_INTERFACE, 'earned', accountArg)
  const totalSupplies = useMultipleContractSingleData(rewardsAddresses, STAKING_REWARDS_INTERFACE, 'totalSupply')

  // tokens per second, constants
  const rewardRates = useMultipleContractSingleData(
    rewardsAddresses,
    STAKING_REWARDS_INTERFACE,
    'rewardRate',
    undefined,
    NEVER_RELOAD
  )
  const periodFinishes = useMultipleContractSingleData(
    rewardsAddresses,
    STAKING_REWARDS_INTERFACE,
    'periodFinish',
    undefined,
    NEVER_RELOAD
  )

  return useMemo(() => {
    if (!chainId || !uni) return []

    return rewardsAddresses.reduce<StakingInfo[]>((memo, rewardsAddress, index) => {
      // these two are dependent on account
      const balanceState = balances[index]
      const earnedAmountState = earnedAmounts[index]

      // these get fetched regardless of account
      const totalSupplyState = totalSupplies[index]
      const rewardRateState = rewardRates[index]
      const periodFinishState = periodFinishes[index]

      if (
        // these may be undefined if not logged in
        !balanceState?.loading &&
        !earnedAmountState?.loading &&
        // always need these
        totalSupplyState &&
        !totalSupplyState.loading &&
        rewardRateState &&
        !rewardRateState.loading &&
        periodFinishState &&
        !periodFinishState.loading
      ) {
        if (
          balanceState?.error ||
          earnedAmountState?.error ||
          totalSupplyState.error ||
          rewardRateState.error ||
          periodFinishState.error
        ) {
          console.error('Failed to load staking rewards info')
          return memo
        }

        // get the LP token
        const tokens = info[index].tokens
        const dummyPair = new Pair(new TokenAmount(tokens[0], '0'), new TokenAmount(tokens[1], '0'))

        // check for account, if no account set to 0

        const stakedAmount = new TokenAmount(dummyPair.liquidityToken, JSBI.BigInt(balanceState?.result?.[0] ?? 0))
        const totalStakedAmount = new TokenAmount(dummyPair.liquidityToken, JSBI.BigInt(totalSupplyState.result?.[0]))
        const totalRewardRate = new TokenAmount(uni, JSBI.BigInt(rewardRateState.result?.[0]))

        const getHypotheticalRewardRate = (
          stakedAmount: TokenAmount,
          totalStakedAmount: TokenAmount,
          totalRewardRate: TokenAmount
        ): TokenAmount => {
          return new TokenAmount(
            uni,
            JSBI.greaterThan(totalStakedAmount.raw, JSBI.BigInt(0))
              ? JSBI.divide(JSBI.multiply(totalRewardRate.raw, stakedAmount.raw), totalStakedAmount.raw)
              : JSBI.BigInt(0)
          )
        }

        const individualRewardRate = getHypotheticalRewardRate(stakedAmount, totalStakedAmount, totalRewardRate)

        const periodFinishMs = periodFinishState.result?.[0]?.mul(1000)?.toNumber()

        memo.push({
          stakingRewardAddress: rewardsAddress,
          tokens: info[index].tokens,
          periodFinish: periodFinishMs > 0 ? new Date(periodFinishMs) : undefined,
          earnedAmount: new TokenAmount(uni, JSBI.BigInt(earnedAmountState?.result?.[0] ?? 0)),
          rewardRate: individualRewardRate,
          totalRewardRate: totalRewardRate,
          stakedAmount: stakedAmount,
          totalStakedAmount: totalStakedAmount,
          getHypotheticalRewardRate
        })
      }
      return memo
    }, [])
  }, [balances, chainId, earnedAmounts, info, periodFinishes, rewardRates, rewardsAddresses, totalSupplies, uni])
}

export function useTotalUniEarned(): TokenAmount | undefined {
  const { chainId } = useActiveWeb3React()
  const uni = chainId ? DAO[chainId] : undefined
  const stakingInfos = useStakingInfo()

  return useMemo(() => {
    if (!uni) return undefined
    return (
      stakingInfos?.reduce(
        (accumulator, stakingInfo) => accumulator.add(stakingInfo.earnedAmount),
        new TokenAmount(uni, '0')
      ) ?? new TokenAmount(uni, '0')
    )
  }, [stakingInfos, uni])
}

// based on typed value
export function useDerivedStakeInfo(
  typedValue: string,
  stakingToken: Token,
  userLiquidityUnstaked: TokenAmount | undefined
): {
  parsedAmount?: CurrencyAmount
  error?: string
} {
  const { t } = useTranslation()
  const { account } = useActiveWeb3React()

  const parsedInput: CurrencyAmount | undefined = tryParseAmount(typedValue, stakingToken)

  const parsedAmount =
    parsedInput && userLiquidityUnstaked && JSBI.lessThanOrEqual(parsedInput.raw, userLiquidityUnstaked.raw)
      ? parsedInput
      : undefined

  let error: string | undefined
  if (!account) {
    error = t('Connect Wallet')
  }
  if (!parsedAmount) {
    error = error ?? t('Enter an amount')
  }

  return {
    parsedAmount,
    error
  }
}

// based on typed value
export function useDerivedUnstakeInfo(
  typedValue: string,
  stakingAmount: TokenAmount
): {
  parsedAmount?: CurrencyAmount
  error?: string
} {
  const { t } = useTranslation()
  const { account } = useActiveWeb3React()

  const parsedInput: CurrencyAmount | undefined = tryParseAmount(typedValue, stakingAmount.token)

  const parsedAmount = parsedInput && JSBI.lessThanOrEqual(parsedInput.raw, stakingAmount.raw) ? parsedInput : undefined

  let error: string | undefined
  if (!account) {
    error = t('Connect Wallet')
  }
  if (!parsedAmount) {
    error = error ?? t('Enter an amount')
  }

  return {
    parsedAmount,
    error
  }
}
