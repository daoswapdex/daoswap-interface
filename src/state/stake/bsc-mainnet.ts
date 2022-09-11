import { ChainId, Token } from '@daoswapdex/daoswap-dex-sdk'
// TODO:Daoswap ERC20
import { USDT, DAO, BTCB, UNI, ADA, BCH, BUSD, ETC, LINK, LTC, XRP } from '../../constants/tokensInfo'

interface StakingRewardsInfo {
  period: number
  stakingGenesis: number
  rewardsDurationDays: number
  rewardsTokenSymbol: string
  tokens: [Token, Token]
  stakingRewardAddress: string
}

const Period6: StakingRewardsInfo[] = [
  // period 6
  {
    period: 6,
    stakingGenesis: 1661742000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], ADA[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xAfA62fd68aae5091182a0E03f3d0e80AD8298F2e'
  },
  {
    period: 6,
    stakingGenesis: 1661742000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], BCH[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x9Cc6238dcc76243cB78f3a15076dE05693A1469f'
  },
  {
    period: 6,
    stakingGenesis: 1661742000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], BUSD[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x294548F8fd92ceD3B2C11232278A73Df48Fc72b2'
  },
  {
    period: 6,
    stakingGenesis: 1661742000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], ETC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x798946a8850712D59771c3FDd8544845d92A6dE9'
  },
  {
    period: 6,
    stakingGenesis: 1661742000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], LINK[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xca411ca76C272b3e6ea492301D15037d1DD5eAdd'
  },
  {
    period: 6,
    stakingGenesis: 1661742000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], LTC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x9962b736084F4Ca96a9FDF0d591FEe4751AD93EF'
  },
  {
    period: 6,
    stakingGenesis: 1661742000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], XRP[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xa88741aa0A93cE7f1c0DC19169e295632A39F4DE'
  },
  {
    period: 6,
    stakingGenesis: 1661742000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], ADA[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x047dFd2c8f24353E08218Fb509Ea3c63305cFB67'
  },
  {
    period: 6,
    stakingGenesis: 1661742000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], BCH[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x75183b6B0dD2732FccD0A9e8152d6dC79C7f8c6F'
  },
  {
    period: 6,
    stakingGenesis: 1661742000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], BTCB[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x5e56F8ee6fD5Be5Bb3985dE41432b539839B5298'
  },
  {
    period: 6,
    stakingGenesis: 1661742000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], ETC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xA0FBce61eF8e34E5bFc92264d961f7E64Be26033'
  },
  {
    period: 6,
    stakingGenesis: 1661742000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], UNI[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x2932998a86944fdaa91583d3Bd98b021db110498'
  },
  {
    period: 6,
    stakingGenesis: 1661742000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], XRP[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xd82Fe70988702075d264CD031A739b71fCa3C74F'
  }
]

export const stakingRewardsInfo: StakingRewardsInfo[] = Period6
// export const stakingRewardsInfo: StakingRewardsInfo[] = Period6.concat(Period5)
