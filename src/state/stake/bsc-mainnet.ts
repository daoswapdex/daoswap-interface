import { ChainId, Token } from '@daoswapdex/daoswap-dex-sdk'
// TODO:Daoswap ERC20
import { DAO, USDT, ETH, FIL, BTCB, ETC, UNI, LTC, XRP, DOT, LINK, ADA } from '../../constants/tokensInfo'

interface StakingRewardsInfo {
  period: number
  stakingGenesis: number
  rewardsDurationDays: number
  rewardsTokenSymbol: string
  tokens: [Token, Token]
  stakingRewardAddress: string
}

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

export const stakingRewardsInfo: StakingRewardsInfo[] = Period5.concat(Period4)
