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

const Period11: StakingRewardsInfo[] = [
  {
    period: 11,
    stakingGenesis: 1680577200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], DAO[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x4FD4C62B1036c1b6cD447b41f3621559aF774700'
  },
  {
    period: 11,
    stakingGenesis: 1680577200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], ETH[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x6f3e5ca32a373AfE5bb61a28Dd4336F8889F4091'
  },
  {
    period: 11,
    stakingGenesis: 1680577200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], FIL[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0xEE9CfBC1D88d31c67352E431e30aF1769d65D0Bf'
  },
  {
    period: 11,
    stakingGenesis: 1680577200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [ETH[ChainId.HECO_MAINNET], DAO[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x0742c84a4dAF58f3F19bf08c41618e0A01d9F040'
  },
  {
    period: 11,
    stakingGenesis: 1680577200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [FIL[ChainId.HECO_MAINNET], DAO[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x302Ca231318beC95993eA194051580966029D779'
  }
]

export const stakingRewardsInfo: StakingRewardsInfo[] = Period11
