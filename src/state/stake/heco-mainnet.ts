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

const Period12: StakingRewardsInfo[] = [
  {
    period: 12,
    stakingGenesis: 1689130800,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], DAO[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x072CF8bcb7Bad105cDc1bB764ECB9d85Ad99b694'
  },
  {
    period: 12,
    stakingGenesis: 1689130800,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], ETH[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x487729E6bad354C6127C7c989A9BB89aB9523E1c'
  },
  {
    period: 12,
    stakingGenesis: 1689130800,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], FIL[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x3D5518Ce6C8c4A0415dAf47ce9063F2d56824208'
  },
  {
    period: 12,
    stakingGenesis: 1689130800,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [ETH[ChainId.HECO_MAINNET], DAO[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x6DB04c8Dbc58D0DD158A46Fa05b4f6D490C56D3C'
  },
  {
    period: 12,
    stakingGenesis: 1689130800,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [FIL[ChainId.HECO_MAINNET], DAO[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x35d5e7dB01138fbc650C1aa3545b12a27Ba7F245'
  }
]

export const stakingRewardsInfo: StakingRewardsInfo[] = Period12
