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

const Period12: StakingRewardsInfo[] = [
  // period 12
  {
    period: 12,
    stakingGenesis: 1699459200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], DAO[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xE45E0f6B45ef85B9592Ca7FdadF514F35aF49090'
  },
  {
    period: 12,
    stakingGenesis: 1699459200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], ETH[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x1123398Fb2399441F4769d6f26A60735493ACE10'
  },
  {
    period: 12,
    stakingGenesis: 1699459200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], BTCB[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xE61B60f91F02281027178d18389DF8F8819507aE'
  },
  {
    period: 12,
    stakingGenesis: 1699459200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], FIL[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xF7930a1C7be8a4247cB73003411c9290fabFd3f4'
  },
  {
    period: 12,
    stakingGenesis: 1699459200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], UNI[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x6e4Bfda4FE712E1E519D16D0a7676BB897a89bBA'
  },
  {
    period: 12,
    stakingGenesis: 1699459200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], ETC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x7Def8c51b20d4C1b33D0c5098f3cCa40B77b1cA3'
  },
  {
    period: 12,
    stakingGenesis: 1699459200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], LINK[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x19c69A45A5ffc4871786CfA8b2e18b5A4Ba91404'
  },
  {
    period: 12,
    stakingGenesis: 1699459200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], BCH[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xf0FdeaD78603DBe082E505b4E65683C345e9a251'
  },
  {
    period: 12,
    stakingGenesis: 1699459200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], ADA[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xAE343856D16b9D23Bb140693572AFfB63f5cfDc7'
  },
  {
    period: 12,
    stakingGenesis: 1699459200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], XRP[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x87D7106Dc49E2249807f0f32c04eb598fBf00E32'
  },
  {
    period: 12,
    stakingGenesis: 1699459200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], LTC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x91061e27C9d0A1d3BcbfF92b6B8138e97aC72460'
  },
  {
    period: 12,
    stakingGenesis: 1699459200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], MATIC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x84d0B0D702b0016F7BAc47d756Ab59881BCDC290'
  },
  {
    period: 12,
    stakingGenesis: 1699459200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], BTCB[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x61Ab9da1B1670975c0aB59D37Ba2aC0A21B08Ed6'
  },
  {
    period: 12,
    stakingGenesis: 1699459200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], ETH[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xDe6BC731C0160b1F15a54EEd1f753101e25173a5'
  },
  {
    period: 12,
    stakingGenesis: 1699459200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], XRP[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x24c1959039aC98C454D0d74b5Ee92313D610E509'
  },
  {
    period: 12,
    stakingGenesis: 1699459200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], ADA[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x4C88be8ff2347B1A9eF5f0EE74fFD87D945010D3'
  },
  {
    period: 12,
    stakingGenesis: 1699459200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], LTC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x81a6dcCA48721e0248E0e621508A2C079e68ce6D'
  },
  {
    period: 12,
    stakingGenesis: 1699459200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], UNI[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x76F0a46dCE281767e74E082CF1a97Ef543622DC6'
  },
  {
    period: 12,
    stakingGenesis: 1699459200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], ETC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x79Edf5985dAa221D8D33955f03DFA067185092D2'
  },
  {
    period: 12,
    stakingGenesis: 1699459200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], BCH[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x53A35272B0E265e247D45aa5A29dCD3c16d4EEc4'
  },
  {
    period: 12,
    stakingGenesis: 1699459200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], FIL[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x3b1d9181fdc20b1d33AB44aC95c813e73e65a18f'
  },
  {
    period: 12,
    stakingGenesis: 1699459200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [ETH[ChainId.BSC_MAINNET], BTCB[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xd658c4cd5D82C967aD8FbF8653f4dABAF7bC943F'
  },
  {
    period: 12,
    stakingGenesis: 1699459200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [FIL[ChainId.BSC_MAINNET], ETH[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x77934306C9952fE12A80C33140F6b974Ecfa5A36'
  },
  {
    period: 12,
    stakingGenesis: 1699459200,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [ETC[ChainId.BSC_MAINNET], ETH[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x842c31e11355F80F11d8B282c9B49D4D37F4eA0d'
  }
]

export const stakingRewardsInfo: StakingRewardsInfo[] = Period12
