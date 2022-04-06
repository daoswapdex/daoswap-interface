import { ChainId, CurrencyAmount, JSBI, Token, TokenAmount, Pair } from '@daoswapdex/daoswap-dex-sdk'
import { useMemo } from 'react'
// TODO:Daoswap ERC20
import {
  DAO,
  DAT,
  DST,
  USDT,
  ETH,
  FIL,
  HT,
  UNI,
  MDX,
  HBCH,
  LTC,
  MANA,
  DOT,
  LINK,
  BTCB,
  BNB,
  XRP,
  ETC,
  DTC1,
  DTC2
} from '../../constants/tokensInfo'
import { STAKING_REWARDS_INTERFACE } from '../../constants/abis/staking-rewards'
import { useActiveWeb3React } from '../../hooks'
import { NEVER_RELOAD, useMultipleContractSingleData } from '../multicall/hooks'
import { tryParseAmount } from '../swap/hooks'
import { useTranslation } from 'react-i18next'

// TODO:Daoswap Start Time
// export const STAKING_GENESIS = 1649221200
export const STAKING_GENESIS = {
  [ChainId.BSC_MAINNET]: 1649221200,
  [ChainId.BSC_TESTNET]: 1649221200,
  [ChainId.HECO_MAINNET]: 1648004400,
  [ChainId.HECO_TESTNET]: 1648004400
}

// TODO:Daoswap Rewards Duration : unit - day
// export const REWARDS_DURATION_DAYS = 14
export const REWARDS_DURATION_DAYS = {
  [ChainId.BSC_MAINNET]: 14,
  [ChainId.BSC_TESTNET]: 14,
  [ChainId.HECO_MAINNET]: 28,
  [ChainId.HECO_TESTNET]: 28
}

// TODO add staking rewards addresses here
export const STAKING_REWARDS_INFO: {
  [chainId in ChainId]?: {
    tokens: [Token, Token]
    stakingRewardAddress: string
  }[]
} = {
  [ChainId.BSC_MAINNET]: [
    {
      tokens: [USDT[ChainId.BSC_MAINNET], DAO[ChainId.BSC_MAINNET]],
      stakingRewardAddress: '0x0A09Da13B9845808DE4C32a57d6E082Bb3450f96'
    },
    {
      tokens: [USDT[ChainId.BSC_MAINNET], ETH[ChainId.BSC_MAINNET]],
      stakingRewardAddress: '0x5b9cBc2C963f623428a80506BE16d044D50a2C30'
    },
    {
      tokens: [USDT[ChainId.BSC_MAINNET], FIL[ChainId.BSC_MAINNET]],
      stakingRewardAddress: '0x4431e21632016De87125F6858CADbb432f3b071e'
    },
    {
      tokens: [USDT[ChainId.BSC_MAINNET], UNI[ChainId.BSC_MAINNET]],
      stakingRewardAddress: '0x5d457B55d14F773501813296B714FA4982293B6A'
    },
    {
      tokens: [USDT[ChainId.BSC_MAINNET], BTCB[ChainId.BSC_MAINNET]],
      stakingRewardAddress: '0xE79Da290Bd685AEEAFF8019EB6216304065428b4'
    },
    {
      tokens: [USDT[ChainId.BSC_MAINNET], BNB[ChainId.BSC_MAINNET]],
      stakingRewardAddress: '0x7eDBA3947997DF1ec041264B03C51DF479b2A535'
    },
    {
      tokens: [USDT[ChainId.BSC_MAINNET], LINK[ChainId.BSC_MAINNET]],
      stakingRewardAddress: '0xA9dD703B51449B6c6DF6a115d35B5932C971675f'
    },
    {
      tokens: [USDT[ChainId.BSC_MAINNET], DOT[ChainId.BSC_MAINNET]],
      stakingRewardAddress: '0xD627c333B45cCAE1aFBb71bC8c9eaF00b237ef8E'
    },
    {
      tokens: [USDT[ChainId.BSC_MAINNET], LTC[ChainId.BSC_MAINNET]],
      stakingRewardAddress: '0x159be5f7f07720C669ED26dEFD93Cbb5c767D992'
    },
    {
      tokens: [USDT[ChainId.BSC_MAINNET], XRP[ChainId.BSC_MAINNET]],
      stakingRewardAddress: '0x58Ba184Cdb2CFbf933253EFDBeB281bd100DCD6c'
    },
    {
      tokens: [USDT[ChainId.BSC_MAINNET], ETC[ChainId.BSC_MAINNET]],
      stakingRewardAddress: '0x7df8ca7f57815Bd6c488b8Dd452610D5a33B23ba'
    }
  ],
  [ChainId.HECO_MAINNET]: [
    {
      tokens: [USDT[ChainId.HECO_MAINNET], DAO[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0x8A041E9C28250A542642c65206Fa90E369Fe4409'
    },
    {
      tokens: [USDT[ChainId.HECO_MAINNET], ETH[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0xE7d03c5E30B0037B05e713B0977C683D9fff1052'
    },
    {
      tokens: [USDT[ChainId.HECO_MAINNET], FIL[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0xccA7501d3750ea0aeb55097D04392D480AF46295'
    },
    {
      tokens: [USDT[ChainId.HECO_MAINNET], HT[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0x846EC507DacFa021cCC1d49686b5d424083ADb5B'
    },
    {
      tokens: [USDT[ChainId.HECO_MAINNET], UNI[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0x095Ffdcfebc3450f64CA68485621FccC7aa732ed'
    },
    {
      tokens: [USDT[ChainId.HECO_MAINNET], MDX[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0x9aF7Cc8B63b1FD52C4e72913B56E9017f77Ad16F'
    },
    {
      tokens: [USDT[ChainId.HECO_MAINNET], HBCH[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0x03AF0F32bDA5d6cBDDfD81c80D6A4df72B930E17'
    },
    {
      tokens: [USDT[ChainId.HECO_MAINNET], LTC[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0x52b939FCE7A72107DE432490c7c09cA27a2AD319'
    },
    {
      tokens: [USDT[ChainId.HECO_MAINNET], MANA[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0xd3F6A5ba3D4Fae23b23927C507d556B7422b1a77'
    },
    {
      tokens: [USDT[ChainId.HECO_MAINNET], DOT[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0x14d442E8F0db21135187F12F57aA586d2649A09a'
    },
    {
      tokens: [USDT[ChainId.HECO_MAINNET], LINK[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0xE466da31406E485b4250717E1368472228c01282'
    }
  ],
  [ChainId.BSC_TESTNET]: [
    {
      tokens: [DAT[ChainId.BSC_TESTNET], DST[ChainId.BSC_TESTNET]],
      stakingRewardAddress: '0x064919FdFA8522B6d0F539ab5132541fcc234854'
    }
  ],
  [ChainId.HECO_TESTNET]: [
    {
      tokens: [DTC1[ChainId.HECO_TESTNET], DTC2[ChainId.HECO_TESTNET]],
      stakingRewardAddress: '0x749652688D86904233e10ab2c1190257E5e45819'
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

  // TODO: is display staking rewards info list for specical address
  // const whiteList = ['0x1a178E91FEB5444953e246FA94a2d4404E0b3713', '0xa9bB710996d6ed61B83a5EAB583bAe683199c2de']
  // const inWhiteList = whiteList.filter(item => item === account)
  // if (inWhiteList.length <= 0) {
  //   STAKING_REWARDS_INFO[56] = []
  // }

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
