import { Token } from '@daoswapdex/daoswap-dex-sdk'
// TODO:Daoswap ERC20
// import { DAO, USDT, ETH, FIL, BTCB, ETC, LTC, XRP, DOT, LINK, ADA } from '../../constants/tokensInfo'

interface StakingRewardsInfo {
  period: number
  stakingGenesis: number
  rewardsDurationDays: number
  rewardsTokenSymbol: string
  tokens: [Token, Token]
  stakingRewardAddress: string
}

export const stakingRewardsInfo: StakingRewardsInfo[] = []
