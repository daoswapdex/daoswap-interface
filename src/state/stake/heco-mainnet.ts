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

const Period8: StakingRewardsInfo[] = [
  {
    period: 8,
    stakingGenesis: 1657249200,
    rewardsDurationDays: 56,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], DAO[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0xC6eEE276C2E211b2408171F192220234e25D0A02'
  },
  {
    period: 8,
    stakingGenesis: 1657249200,
    rewardsDurationDays: 56,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], ETH[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x53645BDe12743aec762389303EF426Fd63EDc054'
  },
  {
    period: 8,
    stakingGenesis: 1657249200,
    rewardsDurationDays: 56,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], FIL[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x391adbc9c7fAb5Da7e4ac8D8C06E2fbCD81C01Ee'
  },
  {
    period: 8,
    stakingGenesis: 1657249200,
    rewardsDurationDays: 56,
    rewardsTokenSymbol: 'DAO',
    tokens: [ETH[ChainId.HECO_MAINNET], DAO[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x70B417b946e4a8337468919747bf9afad25eA1dB'
  },
  {
    period: 8,
    stakingGenesis: 1657249200,
    rewardsDurationDays: 56,
    rewardsTokenSymbol: 'DAO',
    tokens: [FIL[ChainId.HECO_MAINNET], DAO[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x978Dc386ebeF0bA5e8FeC24Fb49603c92fc2e0fD'
  }
]

export const stakingRewardsInfo: StakingRewardsInfo[] = Period8
