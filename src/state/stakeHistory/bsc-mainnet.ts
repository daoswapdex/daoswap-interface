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
  },
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

export const stakingRewardsInfo: StakingRewardsInfo[] = Period5.concat(Period4, Period3, Period2, Period1)
