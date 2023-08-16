import { ChainId, Token } from '@daoswapdex/daoswap-dex-sdk'
// TODO:Daoswap ERC20
import {
  DAO,
  USDT,
  ETH,
  FIL,
  BTCB,
  UNI,
  ETC,
  LTC,
  MATIC,
  XRP,
  DOT,
  LINK,
  BNB,
  ADA,
  BCH,
  BUSD,
  USDC
} from '../../constants/tokensInfo'

interface StakingRewardsInfo {
  period: number
  stakingGenesis: number
  rewardsDurationDays: number
  rewardsTokenSymbol: string
  tokens: [Token, Token]
  stakingRewardAddress: string
}

const Period10: StakingRewardsInfo[] = [
  // period 10
  {
    period: 10,
    stakingGenesis: 1684983600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], DAO[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x4FE5a11D1800423444665255cfd6cEF57776237e'
  },
  {
    period: 10,
    stakingGenesis: 1684983600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], ETH[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x6aE47DE427d31844aeFf60BaB4be9C19be5C70c6'
  },
  {
    period: 10,
    stakingGenesis: 1684983600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], BTCB[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x4fAe1AEfe3f6D37fFeA9227B051CA3646E8FD842'
  },
  {
    period: 10,
    stakingGenesis: 1684983600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], FIL[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x075f0d2ee4e1992f14eF6e85c5EB8F5Bd49D9a95'
  },
  {
    period: 10,
    stakingGenesis: 1684983600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], UNI[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x3a86b6910df54790d53643d0EB5E966a964cAeee'
  },
  {
    period: 10,
    stakingGenesis: 1684983600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], USDC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x00f67A3c02fd7caf0370FC22bcfDB6880c89EB5C'
  },
  {
    period: 10,
    stakingGenesis: 1684983600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], ETC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xDF6d959dEBa69A2c8097305290761737aB51334f'
  },
  {
    period: 10,
    stakingGenesis: 1684983600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], LINK[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x426C2e822700ce6E0C362707AAc499b9935f65C5'
  },
  {
    period: 10,
    stakingGenesis: 1684983600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], BCH[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x75EC9b3Dddc16FF8579947CAc7c426B748dbaE26'
  },
  {
    period: 10,
    stakingGenesis: 1684983600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], ADA[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x8C5Cb8C1B2A4C3e4D76b4C7342E8Dca3b7CF21d6'
  },
  {
    period: 10,
    stakingGenesis: 1684983600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], XRP[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x86a326dc6BCC7f2358a45B173C9686D47C8175da'
  },
  {
    period: 10,
    stakingGenesis: 1684983600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], LTC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x1316E31DC273880655e07eD7B008596f981352d6'
  },
  {
    period: 10,
    stakingGenesis: 1684983600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], MATIC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x74b106FafF7fAe822B9eeA7BB3c92184652AAEB8'
  },
  {
    period: 10,
    stakingGenesis: 1684983600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], BTCB[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x5443E7133EDe06153F6dBBb89EC2D1503aD50699'
  },
  {
    period: 10,
    stakingGenesis: 1684983600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], ETH[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x55277aD99E1ba8dFAa302bCC4CEdD49454cAe642'
  },
  {
    period: 10,
    stakingGenesis: 1684983600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], XRP[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xFBb90872BD96f2866264eB753122EcdbFbC6547c'
  },
  {
    period: 10,
    stakingGenesis: 1684983600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], ADA[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x547b16D14E722EeE43153ad8F2793086b114bD35'
  },
  {
    period: 10,
    stakingGenesis: 1684983600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], LTC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x8AaA0795113cF6b1812e1E8A012bd84D922DfC31'
  },
  {
    period: 10,
    stakingGenesis: 1684983600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], UNI[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x2303d398FEAC8a29F66B56F6Aa5D9Fec9a08040e'
  },
  {
    period: 10,
    stakingGenesis: 1684983600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], ETC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x142AB5875aE82de5574a92f534269E1cBb7f39a8'
  },
  {
    period: 10,
    stakingGenesis: 1684983600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], BCH[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x63BCD86B222AD3012dc596E02EF11172C755e9F9'
  },
  {
    period: 10,
    stakingGenesis: 1684983600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], FIL[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x2F025978aB61bD08948281BFd42893b267CE9f7d'
  },
  {
    period: 10,
    stakingGenesis: 1684983600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [ETH[ChainId.BSC_MAINNET], BTCB[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x61AC5f9B4a7E8180c1fAc3CD6a18539B7Ea01Cc9'
  }
]

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

const Period8: StakingRewardsInfo[] = [
  // period 8
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], DAO[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x7EAd2295A10E5c41fc86C0474D9A4433Ae3D2351'
  },
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], ETH[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x8662dBdc57717FCdfe7863c8688C14203779e864'
  },
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], BTCB[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xAD0aEcE30997e1375409124DbA2FdFFC1963F67E'
  },
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], FIL[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x20B8e50F1FEBF3C607F71A32ebaB6068f06302DF'
  },
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], UNI[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x0aE55065Ee975Cf2bF4EEF3F159F10C093917C4C'
  },
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], USDC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xc43D6037fF5d22B34e2f38b3C9Da1cFE360Fb531'
  },
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], ETC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x847f5Ee345e90cB6DFA3d63c2D1e4d6d55c260c1'
  },
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], LINK[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xA1E95f8D63c2702Cc60a38494B5832097cE0b425'
  },
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], BCH[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x00F28e11C266F3cef0B8CAFfC05649D6A2609355'
  },
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], BUSD[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xfcb1955c1D1e6008B97D3d9221c81391a903a505'
  },
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], ADA[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x956207fbEaC960C062099f196d2795617e91eDFd'
  },
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], XRP[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x98F1BaaD0D471c53C5755B1B4b66748e809202B7'
  },
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], LTC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xaaa08F298eE32bf3db7532e25D7855FB0d79ca7c'
  },
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], BTCB[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x2bb963B8904dD8C76eeD66Dd337a60b3da1f82C4'
  },
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], ETH[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xE29Cb25Ad06C3F50Ef40DCb7cd7541C207E5aBBA'
  },
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], XRP[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xc55ee48bAc291bdd25731A8bCABC22d47Ea05201'
  },
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], ADA[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xF3F6dE62006361C7EC93bd4ab3A79Ab0b11163E3'
  },
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], LTC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x16CC8F2DF9611c9D8044972B38c9927c8Efe3aF9'
  },
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], UNI[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x3F67bfEbfA453422AB0c8B600fc1b8f99690b8a1'
  },
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], ETC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xcc3F3bE85f45C64A7b8F46685A3bE5387CF6AcB3'
  },
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], BCH[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xC8c763c8204aF5a8d8c7FaF7666Df7EDD897bc8E'
  },
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], FIL[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x62aec729053B2D5e31FeFEBE270e22a32C3073D9'
  },
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [ETH[ChainId.BSC_MAINNET], BTCB[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x4941dbf1669E9c3288B3Ec25f94515e483AE97dc'
  }
]

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

export const stakingRewardsInfo: StakingRewardsInfo[] = Period10.concat(
  Period9,
  Period8,
  Period7,
  Period6,
  Period5,
  Period4,
  Period3,
  Period2,
  Period1
)
