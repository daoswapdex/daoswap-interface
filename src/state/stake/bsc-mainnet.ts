import { ChainId, Token } from '@daoswapdex/daoswap-dex-sdk'
// TODO:Daoswap ERC20
import { USDT, DAO, BTCB, UNI, ADA, BCH, BUSD, ETC, LINK, LTC, XRP, ETH, USDC, FIL } from '../../constants/tokensInfo'

interface StakingRewardsInfo {
  period: number
  stakingGenesis: number
  rewardsDurationDays: number
  rewardsTokenSymbol: string
  tokens: [Token, Token]
  stakingRewardAddress: string
}

const Period7: StakingRewardsInfo[] = [
  // period 7
  {
    period: 7,
    stakingGenesis: 1663038000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], DAO[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x7b3E9f3FDa2c62b6fB6B09A62bFb6e1A9679075b'
  },
  {
    period: 7,
    stakingGenesis: 1663038000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], ETH[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x1e47DF7AE6B3e7febDb4d251CCACB01b7125C224'
  },
  {
    period: 7,
    stakingGenesis: 1663038000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], BTCB[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x61Ea397054d5014BD491E70D48D208Db3f116fd9'
  },
  {
    period: 7,
    stakingGenesis: 1663038000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], FIL[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x1A3F9D66c1Ab3f0a0d5684926290F508CBAC3628'
  },
  {
    period: 7,
    stakingGenesis: 1663038000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], UNI[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x7BBE6e6703C4EF79e1C42943fb01b11BCE1A10fF'
  },
  {
    period: 7,
    stakingGenesis: 1663038000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], USDC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x0499BF0C0eb075172433314dc5557B19D32B71dB'
  },
  {
    period: 7,
    stakingGenesis: 1663038000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [ETH[ChainId.BSC_MAINNET], DAO[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xff3DA2ED7B60641A66567f8ce257960d87Ca733B'
  },
  {
    period: 7,
    stakingGenesis: 1663038000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [ETH[ChainId.BSC_MAINNET], BTCB[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x469fc6eF3a012c1b3C55c28339818Ae16518eE1f'
  },
  {
    period: 7,
    stakingGenesis: 1663038000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [FIL[ChainId.BSC_MAINNET], DAO[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xA0cfE51B16D0EF0128f4775cC57c2B2cb1c65739'
  }
]

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

export const stakingRewardsInfo: StakingRewardsInfo[] = Period7.concat(Period6)
