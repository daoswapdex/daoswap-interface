import { Token, ChainId } from '@daoswapdex/daoswap-dex-sdk'
// TODO:Daoswap ERC20
import { DAO, USDT, ETH, FIL } from '../../constants/tokensInfo'

interface StakingRewardsInfo {
  period: number
  stakingGenesis: number
  rewardsDurationDays: number
  rewardsTokenSymbol: string
  tokens: [Token, Token]
  stakingRewardAddress: string
}

const Period13: StakingRewardsInfo[] = [
  {
    period: 13,
    stakingGenesis: 1697079600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], DAO[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x0041eA1de8DEE3f2A9Ef18dBC66836c7402Ac8d2'
  },
  {
    period: 13,
    stakingGenesis: 1697079600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], ETH[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x621b621c2271DfD88981527619005dcaAEe73a8d'
  },
  {
    period: 13,
    stakingGenesis: 1697079600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], FIL[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x02c6b75046BdDbCF51da1cdE088048DAe54CBD6d'
  },
  {
    period: 13,
    stakingGenesis: 1697079600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [ETH[ChainId.HECO_MAINNET], DAO[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x391C8f201C613DBA2AeB289838d1f9B8c313917d'
  },
  {
    period: 13,
    stakingGenesis: 1697079600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [FIL[ChainId.HECO_MAINNET], DAO[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x715C84C30A41Eff384a6B73A9714Fc7AD568398B'
  }
]

export const stakingRewardsInfo: StakingRewardsInfo[] = Period13
