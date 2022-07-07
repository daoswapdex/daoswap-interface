import { ChainId, Token } from '@daoswapdex/daoswap-dex-sdk'
// TODO:Daoswap ERC20
import { DAO, USDT, ETH, FIL, BTCB, ETC, LTC, XRP, DOT, LINK, ADA } from '../../constants/tokensInfo'

interface StakingRewardsInfo {
  period: number
  stakingGenesis: number
  rewardsDurationDays: number
  rewardsTokenSymbol: string
  tokens: [Token, Token]
  stakingRewardAddress: string
}

const Period4: StakingRewardsInfo[] = [
  // period 4
  {
    period: 4,
    stakingGenesis: 1656212400,
    rewardsDurationDays: 58,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], ETC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xbDe3C93c53a9Ac0d23fa2EAF67cAce3ed8A2b701'
  },
  {
    period: 4,
    stakingGenesis: 1656212400,
    rewardsDurationDays: 58,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], LTC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x583732c283d9375F284a4410e8e19EEfc58D900D'
  },
  {
    period: 4,
    stakingGenesis: 1656212400,
    rewardsDurationDays: 58,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], XRP[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xB0e6d0dab0dCe89d6869dFF9De9648947d72960C'
  },
  {
    period: 4,
    stakingGenesis: 1656212400,
    rewardsDurationDays: 58,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], DOT[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x8ec8DDdB47B334d0fDaeDa6cfC54FEA4142c086D'
  },
  {
    period: 4,
    stakingGenesis: 1656212400,
    rewardsDurationDays: 58,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], LINK[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xe4A5629A73ec4387826962d407c146AfB3A644D9'
  },
  {
    period: 4,
    stakingGenesis: 1656212400,
    rewardsDurationDays: 58,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], ADA[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xEbE9417b6e2d8FcA3b7c51611a86330B93e44a19'
  },
  {
    period: 4,
    stakingGenesis: 1656212400,
    rewardsDurationDays: 58,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], ADA[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x8933a6530C68BeD3677e7BdF39B0BF03519bcD4e'
  },
  {
    period: 4,
    stakingGenesis: 1656212400,
    rewardsDurationDays: 58,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], BTCB[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x9C82AbfcB8cd5F79Aa5aAa8B9a22f0366119dbaA'
  }
]

const Period3: StakingRewardsInfo[] = [
  // period 3
  {
    period: 3,
    stakingGenesis: 1652929200,
    rewardsDurationDays: 56,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], DAO[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x98a4768E36DD0c7286fA9462fcb827B399D77F9D'
  },
  {
    period: 3,
    stakingGenesis: 1652929200,
    rewardsDurationDays: 56,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], ETH[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xdC07CE87c82Be7C81665c440CfE784857F0f7746'
  },
  {
    period: 3,
    stakingGenesis: 1652929200,
    rewardsDurationDays: 56,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], FIL[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x768e3481aB8674aE32499154ac31E3b5B81BbF09'
  },
  {
    period: 3,
    stakingGenesis: 1652929200,
    rewardsDurationDays: 56,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], BTCB[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x2E337A8F567307f19718eCaD025Ace2083A96C00'
  },
  {
    period: 3,
    stakingGenesis: 1652929200,
    rewardsDurationDays: 56,
    rewardsTokenSymbol: 'DAO',
    tokens: [ETH[ChainId.BSC_MAINNET], DAO[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xD5044c3B12D08C2F4ac61AC117aa0fD7c76a391d'
  },
  {
    period: 3,
    stakingGenesis: 1652929200,
    rewardsDurationDays: 56,
    rewardsTokenSymbol: 'DAO',
    tokens: [FIL[ChainId.BSC_MAINNET], DAO[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xC7dB39d58c3369c7A367116aA3312f36505Fd251'
  }
]

export const stakingRewardsInfo: StakingRewardsInfo[] = Period4.concat(Period3)
