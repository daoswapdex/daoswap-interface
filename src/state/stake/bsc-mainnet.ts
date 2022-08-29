import { ChainId, Token } from '@daoswapdex/daoswap-dex-sdk'
// TODO:Daoswap ERC20
import { USDT, DAO, ETH, FIL, BTCB, UNI, DOT, ADA, BCH, BUSD, ETC, LINK, LTC, XRP } from '../../constants/tokensInfo'

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

const Period5: StakingRewardsInfo[] = [
  // period 5
  {
    period: 5,
    stakingGenesis: 1658026800,
    rewardsDurationDays: 56,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], DAO[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xa13dB19b5EFfAF9Fd3E4ea4b34D5Ee31ce627Bfb'
  },
  {
    period: 5,
    stakingGenesis: 1658026800,
    rewardsDurationDays: 56,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], ETH[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xBb5E342f977B2EDDaaa8a7d3a06fD2b26412Df98'
  },
  {
    period: 5,
    stakingGenesis: 1658026800,
    rewardsDurationDays: 56,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], BTCB[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x195Cc45aA44c77e522A02c2AD9D17bC8D2Ca0477'
  },
  {
    period: 5,
    stakingGenesis: 1658026800,
    rewardsDurationDays: 56,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], FIL[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xA10BfAaDa421c002849e9985df8250c105aFBb00'
  },
  {
    period: 5,
    stakingGenesis: 1658026800,
    rewardsDurationDays: 56,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], UNI[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xc508E53C32CBEdd7ae1634F18cb72A0D245c8797'
  },
  {
    period: 5,
    stakingGenesis: 1658026800,
    rewardsDurationDays: 56,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], DOT[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x5Fb9D05027E29B36F46E805d31E34cE84CE055cd'
  },
  {
    period: 5,
    stakingGenesis: 1658026800,
    rewardsDurationDays: 56,
    rewardsTokenSymbol: 'DAO',
    tokens: [ETH[ChainId.BSC_MAINNET], DAO[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x72F46Fa7Fb4BB0c89f9AF3aD8bb5bAbD7Db14146'
  },
  {
    period: 5,
    stakingGenesis: 1658026800,
    rewardsDurationDays: 56,
    rewardsTokenSymbol: 'DAO',
    tokens: [ETH[ChainId.BSC_MAINNET], BTCB[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x3E0DB512277096f80F4b3941324F12bd40D30629'
  },
  {
    period: 5,
    stakingGenesis: 1658026800,
    rewardsDurationDays: 56,
    rewardsTokenSymbol: 'DAO',
    tokens: [FIL[ChainId.BSC_MAINNET], DAO[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x4E087976bFECC5067AB978C85F9B8d1ea3885be5'
  }
]

export const stakingRewardsInfo: StakingRewardsInfo[] = Period6.concat(Period5)
