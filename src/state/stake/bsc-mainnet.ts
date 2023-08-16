import { ChainId, Token } from '@daoswapdex/daoswap-dex-sdk'
// import { Token } from '@daoswapdex/daoswap-dex-sdk'
// TODO:Daoswap ERC20
import { USDT, DAO, BTCB, UNI, ETH, FIL, ETC, LINK, MATIC, XRP, LTC, ADA, BCH } from '../../constants/tokensInfo'

interface StakingRewardsInfo {
  period: number
  stakingGenesis: number
  rewardsDurationDays: number
  rewardsTokenSymbol: string
  tokens: [Token, Token]
  stakingRewardAddress: string
}

const Period11: StakingRewardsInfo[] = [
  // period 11
  {
    period: 11,
    stakingGenesis: 1692241200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], DAO[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x4e00c1C5f16090B46be3966e6fDb11B9128e81Fe'
  },
  {
    period: 11,
    stakingGenesis: 1692241200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], ETH[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x53b996Ae3887Ed442390bf6f35e73B8ACF542c1e'
  },
  {
    period: 11,
    stakingGenesis: 1692241200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], BTCB[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x28DeCe6b97278c08B71D9B87fDd04AaFCECE642b'
  },
  {
    period: 11,
    stakingGenesis: 1692241200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], FIL[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x0Db9125cb29725bC3218a90Ec95062848f54a886'
  },
  {
    period: 11,
    stakingGenesis: 1692241200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], UNI[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xF69C80952A5A5dCAdD67FdbC88D0498cbdb20a36'
  },
  {
    period: 11,
    stakingGenesis: 1692241200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], ETC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x1E81698D9A47DBF3Aee0dBB1542b7c28bBa70970'
  },
  {
    period: 11,
    stakingGenesis: 1692241200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], LINK[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xC3787A779820370BD00AE9EaB190fD01743F4Acf'
  },
  {
    period: 11,
    stakingGenesis: 1692241200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], BCH[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x5873B8687AE5aE6afac5Dc5D1a5DE6a5d27C7A9A'
  },
  {
    period: 11,
    stakingGenesis: 1692241200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], ADA[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x16817140e59DB73aD7B045CDA3A83e58F148EE1F'
  },
  {
    period: 11,
    stakingGenesis: 1692241200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], XRP[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x0265BEf5E8c9Fd6c1E2C3d51Cce59bc20272B2b9'
  },
  {
    period: 11,
    stakingGenesis: 1692241200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], LTC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x4074111EaA9576C038f2AF1bbC07f73b9f769a49'
  },
  {
    period: 11,
    stakingGenesis: 1692241200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], MATIC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x8b2F7824A315A13ECd278396c2Dd8153D80b8e18'
  },
  {
    period: 11,
    stakingGenesis: 1692241200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], BTCB[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x93842b107af193Fa9b631DbcaF7f37ed6351b252'
  },
  {
    period: 11,
    stakingGenesis: 1692241200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], ETH[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xEb1B294D162F26bD96A28889c18eaC707d3aEe4a'
  },
  {
    period: 11,
    stakingGenesis: 1692241200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], XRP[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xC1EF4caE2C46e91fbBFeEdaD37A9B8589878baDa'
  },
  {
    period: 11,
    stakingGenesis: 1692241200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], ADA[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xF953622196C0dd9D18f494b5076d58561fB6415A'
  },
  {
    period: 11,
    stakingGenesis: 1692241200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], LTC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x76188Fc49Fb40aB05A88b8E62BF897c11aDE1E86'
  },
  {
    period: 11,
    stakingGenesis: 1692241200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], UNI[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x2Bb008a7E70aAf31343db8bB13609E7A361fF360'
  },
  {
    period: 11,
    stakingGenesis: 1692241200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], ETC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x1F868E5b27Bd1DF9e3fC289b22df319069F72AD7'
  },
  {
    period: 11,
    stakingGenesis: 1692241200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], BCH[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x42F58C3aeEc65C3666C4b2bb4397B7f61767159c'
  },
  {
    period: 11,
    stakingGenesis: 1692241200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], FIL[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x269d1FAB48fBA9d58810966D3b4B6D5659261084'
  },
  {
    period: 11,
    stakingGenesis: 1692241200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [ETH[ChainId.BSC_MAINNET], BTCB[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xC7BF519B242A4F64BdE4aC53480997b66fbFDd02'
  }
]

export const stakingRewardsInfo: StakingRewardsInfo[] = Period11
