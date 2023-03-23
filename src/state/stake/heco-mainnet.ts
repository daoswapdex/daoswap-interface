import { Token } from '@daoswapdex/daoswap-dex-sdk'
// import { Token, ChainId } from '@daoswapdex/daoswap-dex-sdk'
// TODO:Daoswap ERC20
// import { DAO, USDT, ETH, FIL } from '../../constants/tokensInfo'

interface StakingRewardsInfo {
  period: number
  stakingGenesis: number
  rewardsDurationDays: number
  rewardsTokenSymbol: string
  tokens: [Token, Token]
  stakingRewardAddress: string
}

// const Period10: StakingRewardsInfo[] = [
//   {
//     period: 10,
//     stakingGenesis: 1672196400,
//     rewardsDurationDays: 84,
//     rewardsTokenSymbol: 'DAO',
//     tokens: [USDT[ChainId.HECO_MAINNET], DAO[ChainId.HECO_MAINNET]],
//     stakingRewardAddress: '0x9d212367c70CC2Ee83001Ad5F9Acb11E6c89516A'
//   },
//   {
//     period: 10,
//     stakingGenesis: 1672196400,
//     rewardsDurationDays: 84,
//     rewardsTokenSymbol: 'DAO',
//     tokens: [USDT[ChainId.HECO_MAINNET], ETH[ChainId.HECO_MAINNET]],
//     stakingRewardAddress: '0x63F430De2174eD8e9eB5bc0Be65cC2101ec13C3E'
//   },
//   {
//     period: 10,
//     stakingGenesis: 1672196400,
//     rewardsDurationDays: 84,
//     rewardsTokenSymbol: 'DAO',
//     tokens: [USDT[ChainId.HECO_MAINNET], FIL[ChainId.HECO_MAINNET]],
//     stakingRewardAddress: '0xa601BD5218c5F963dDfd850Cd3e8A3e324EAb399'
//   },
//   {
//     period: 10,
//     stakingGenesis: 1672196400,
//     rewardsDurationDays: 84,
//     rewardsTokenSymbol: 'DAO',
//     tokens: [ETH[ChainId.HECO_MAINNET], DAO[ChainId.HECO_MAINNET]],
//     stakingRewardAddress: '0x5B06a69bf4B88a8E258B1e78A89D625bb27d6046'
//   },
//   {
//     period: 10,
//     stakingGenesis: 1672196400,
//     rewardsDurationDays: 84,
//     rewardsTokenSymbol: 'DAO',
//     tokens: [FIL[ChainId.HECO_MAINNET], DAO[ChainId.HECO_MAINNET]],
//     stakingRewardAddress: '0x7b5B66Bb1d4Ad557C3d08fCF283dB6bb1C7b4962'
//   }
// ]

export const stakingRewardsInfo: StakingRewardsInfo[] = []
