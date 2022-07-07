import { ChainId, Token } from '@daoswapdex/daoswap-dex-sdk'
// TODO:Daoswap ERC20
import { DAO, USDT, ETH, FIL, BTCB, UNI, ETC, LTC, XRP, DOT, LINK, BNB, ADA } from '../../constants/tokensInfo'

interface StakingRewardsInfo {
  period: number
  stakingGenesis: number
  rewardsDurationDays: number
  rewardsTokenSymbol: string
  tokens: [Token, Token]
  stakingRewardAddress: string
}

const Period3: StakingRewardsInfo[] = [
  // period 3
  {
    period: 3,
    stakingGenesis: 1652929200,
    rewardsDurationDays: 28,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], ADA[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x07Dd3a5650Adf1b0B64Dba299CAd9F7B2c1ACCFc'
  },
  {
    period: 3,
    stakingGenesis: 1653102000,
    rewardsDurationDays: 28,
    rewardsTokenSymbol: 'DAO',
    tokens: [BTCB[ChainId.BSC_MAINNET], DAO[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xE18753F0741B3d658Ee32744D7a77ed43E43AE18'
  }
]

const Period2: StakingRewardsInfo[] = [
  // period 2
  {
    period: 2,
    stakingGenesis: 1651201200,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], DAO[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xed537020CC5E69c5B14560b4E0988B0152851828'
  },
  {
    period: 2,
    stakingGenesis: 1651201200,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], ETH[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x1A91530DCc9bb88d75F47699a148Fc9f3D495Ae9'
  },
  {
    period: 2,
    stakingGenesis: 1651201200,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], FIL[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x6Ae1AE59e5E2C45cFBd89D40154e19D858a0Fd66'
  },
  {
    period: 2,
    stakingGenesis: 1651201200,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], BTCB[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x8aFBeACbA978fEaD9dB7b5465806354144B63e71'
  },
  {
    period: 2,
    stakingGenesis: 1651201200,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [ETH[ChainId.BSC_MAINNET], DAO[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xbF35a06AC18bC3412b3456E9b387402E0a0AF39B'
  },
  {
    period: 2,
    stakingGenesis: 1651201200,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [FIL[ChainId.BSC_MAINNET], DAO[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x70b2857A24E9727Fac4c1EF0aa42405F4bB776d7'
  }
]

const Period1: StakingRewardsInfo[] = [
  {
    period: 1,
    stakingGenesis: 1649221200,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], DAO[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x0A09Da13B9845808DE4C32a57d6E082Bb3450f96'
  },
  {
    period: 1,
    stakingGenesis: 1649221200,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], ETH[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x5b9cBc2C963f623428a80506BE16d044D50a2C30'
  },
  {
    period: 1,
    stakingGenesis: 1649221200,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], FIL[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x4431e21632016De87125F6858CADbb432f3b071e'
  },
  {
    period: 1,
    stakingGenesis: 1649221200,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], UNI[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x5d457B55d14F773501813296B714FA4982293B6A'
  },
  {
    period: 1,
    stakingGenesis: 1649221200,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], BTCB[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xE79Da290Bd685AEEAFF8019EB6216304065428b4'
  },
  {
    period: 1,
    stakingGenesis: 1649221200,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], BNB[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x7eDBA3947997DF1ec041264B03C51DF479b2A535'
  },
  {
    period: 1,
    stakingGenesis: 1649221200,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], LINK[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xA9dD703B51449B6c6DF6a115d35B5932C971675f'
  },
  {
    period: 1,
    stakingGenesis: 1649221200,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], DOT[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xD627c333B45cCAE1aFBb71bC8c9eaF00b237ef8E'
  },
  {
    period: 1,
    stakingGenesis: 1649221200,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], LTC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x159be5f7f07720C669ED26dEFD93Cbb5c767D992'
  },
  {
    period: 1,
    stakingGenesis: 1649221200,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], XRP[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x58Ba184Cdb2CFbf933253EFDBeB281bd100DCD6c'
  },
  {
    period: 1,
    stakingGenesis: 1649221200,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], ETC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x7df8ca7f57815Bd6c488b8Dd452610D5a33B23ba'
  }
]

export const stakingRewardsInfo: StakingRewardsInfo[] = Period3.concat(Period2, Period1)
