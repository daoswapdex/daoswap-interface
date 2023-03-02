import { ChainId, Token } from '@daoswapdex/daoswap-dex-sdk'
// import { Token } from '@daoswapdex/daoswap-dex-sdk'
// TODO:Daoswap ERC20
import { USDT, DAO, BTCB, UNI, ETH, USDC, FIL, ETC, LINK, MATIC, XRP, LTC, ADA, BCH } from '../../constants/tokensInfo'

interface StakingRewardsInfo {
  period: number
  stakingGenesis: number
  rewardsDurationDays: number
  rewardsTokenSymbol: string
  tokens: [Token, Token]
  stakingRewardAddress: string
}

const Period9: StakingRewardsInfo[] = [
  // period 9
  {
    period: 9,
    stakingGenesis: 1677726000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], DAO[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x9Ac1fCd8952a24537C001fbE5C44B738D2739c1a'
  },
  {
    period: 9,
    stakingGenesis: 1677726000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], ETH[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x6Ad744ca823E3591BD013F72444caf30BC505caC'
  },
  {
    period: 9,
    stakingGenesis: 1677726000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], BTCB[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x3140a4453E098512237Bfef23E13025bCf9563fD'
  },
  {
    period: 9,
    stakingGenesis: 1677726000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], FIL[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xf196fdc33F1D3e2F369E1c358a6E3CB00d28E047'
  },
  {
    period: 9,
    stakingGenesis: 1677726000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], UNI[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x1717F63e6BCF820261a9b039e2B8e0365d953680'
  },
  {
    period: 9,
    stakingGenesis: 1677726000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], USDC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xB7f9A58A7337f0aBC089E87C7cf774df33297CB8'
  },
  {
    period: 9,
    stakingGenesis: 1677726000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], ETC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x2A9928EC5B8776E135578741BEcEF9FA5e18E522'
  },
  {
    period: 9,
    stakingGenesis: 1677726000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], LINK[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x3d16BCf4cf5Fbac4042417c7B0B28Ee155eced67'
  },
  {
    period: 9,
    stakingGenesis: 1677726000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], BCH[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xF38Dbbb21D6AbC7D3480Ff222867FdCbf5b79eff'
  },
  {
    period: 9,
    stakingGenesis: 1677726000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], ADA[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x560e45477779A7C2Ad791f866FBDB0B019E9349f'
  },
  {
    period: 9,
    stakingGenesis: 1677726000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], XRP[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x5bEf5d4c975Ec03f315daA4CBd113217c930AcA5'
  },
  {
    period: 9,
    stakingGenesis: 1677726000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], LTC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x42BeEa70d0F487cC1D64Bf258BF9ceA503Ce712a'
  },
  {
    period: 9,
    stakingGenesis: 1677726000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], MATIC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xDB919487CE88585c6FD6CE0786dB7f7064477CB9'
  },
  {
    period: 9,
    stakingGenesis: 1677726000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], BTCB[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x86396B95331C8aC3B1b5681D4B2ad740EB652314'
  },
  {
    period: 9,
    stakingGenesis: 1677726000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], ETH[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x6318344a680ae1241ac86430295F3189F0DbcDA5'
  },
  {
    period: 9,
    stakingGenesis: 1677726000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], XRP[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xC871aCdfD0ED3340966d6211BCdAb1eac5b74B42'
  },
  {
    period: 9,
    stakingGenesis: 1677726000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], ADA[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x4E3dF987706ccC30411275B067847946f7F29923'
  },
  {
    period: 9,
    stakingGenesis: 1677726000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], LTC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xE9d519f5F67BF59D982a46B01F766F78605E93eb'
  },
  {
    period: 9,
    stakingGenesis: 1677726000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], UNI[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x1129FE9a3DF8846DD4392E00350358A9cca9BD48'
  },
  {
    period: 9,
    stakingGenesis: 1677726000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], ETC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xd6d2134Ea18c96751024AdcAc085280FD87065B8'
  },
  {
    period: 9,
    stakingGenesis: 1677726000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], BCH[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xd64E884447223183Ce3FD72883AB26f9bE125b9B'
  },
  {
    period: 9,
    stakingGenesis: 1677726000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], FIL[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xEf3b5068Bf0ED371FFCA4439aC70bb63fEBbB3c9'
  },
  {
    period: 9,
    stakingGenesis: 1677726000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [ETH[ChainId.BSC_MAINNET], BTCB[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xC71FD2D78f6c5B0674baECA45A2D34a250cDbad9'
  }
]

export const stakingRewardsInfo: StakingRewardsInfo[] = Period9
