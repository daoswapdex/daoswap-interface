import { ChainId, Token } from '@daoswapdex/daoswap-dex-sdk'
// TODO:Daoswap ERC20
import { USDT, DAO, BTCB, UNI, ETH, USDC, FIL } from '../../constants/tokensInfo'

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

export const stakingRewardsInfo: StakingRewardsInfo[] = Period7
