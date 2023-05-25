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

export const stakingRewardsInfo: StakingRewardsInfo[] = Period10
