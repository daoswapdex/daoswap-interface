import { ChainId, JSBI, Percent, Token, WETH } from '@daoswapdex-bsc-testnet/daoswap-sdk'
import { AbstractConnector } from '@web3-react/abstract-connector'

import { injected, walletconnect } from '../connectors'

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

// export const DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18, 'DAI', 'Dai Stablecoin')
export const USDC = new Token(ChainId.BSC_TESTNET, '0x9362Bbef4B8313A8Aa9f0c9808B80577Aa26B73B', 6, 'USDC', 'USD//C')
export const USDT = new Token(
  ChainId.BSC_TESTNET,
  '0xa71EdC38d189767582C38A3145b5873052c3e47a',
  18,
  'USDT',
  'Tether USD'
)
export const DAO_BSC_TESTNET = new Token(
  ChainId.BSC_TESTNET,
  '0xdb5D970F03bfD19c1E51D57BcEd114BC35A0808f',
  18,
  'DAO',
  'Daoswap'
)
export const DAI_BSC_TESTNET = new Token(
  ChainId.BSC_TESTNET,
  '0x60d64Ef311a4F0E288120543A14e7f90E76304c6',
  18,
  'DAI',
  'Dai Stablecoin'
)
export const DTC1_BSC_TESTNET = new Token(
  ChainId.BSC_TESTNET,
  '0x5A78963afB7555658Cb53A9D1e0A26252CBd26b6',
  18,
  'DTC1',
  'Daoswap Test Coin 1'
)
export const DTC2_BSC_TESTNET = new Token(
  ChainId.BSC_TESTNET,
  '0xE88E4ad38E1532BD05fBbdC1a4b464cE741c6FF0',
  18,
  'DTC2',
  'Daoswap Test Coin 2'
)
export const USDC_BSC_TESTNET = new Token(
  ChainId.BSC_TESTNET,
  '0x94f22515aDE71ea7e0D439B730421a64b14bd2C8',
  18,
  'USDC',
  'USD//C'
)

// Block time here is slightly higher (~1s) than average in order to avoid ongoing proposals past the displayed time
export const AVERAGE_BLOCK_TIME_IN_SECS = 14
export const PROPOSAL_LENGTH_IN_BLOCKS = 40_320
export const PROPOSAL_LENGTH_IN_SECS = AVERAGE_BLOCK_TIME_IN_SECS * PROPOSAL_LENGTH_IN_BLOCKS

// export const TIMELOCK_ADDRESS = '0x1a9C8182C09F50C8318d769245beA52c32BE35BC'

const UNI_ADDRESS = '0xdb5D970F03bfD19c1E51D57BcEd114BC35A0808f'
export const DAO_ADDRESS = UNI_ADDRESS
export const UNI: { [chainId in ChainId]: Token } = {
  [ChainId.BSC_MAINNET]: new Token(ChainId.BSC_MAINNET, UNI_ADDRESS, 18, 'DAO', 'Daoswap'),
  [ChainId.BSC_TESTNET]: new Token(ChainId.BSC_TESTNET, UNI_ADDRESS, 18, 'DAO', 'Daoswap'),
  [ChainId.HECO_MAINNET]: new Token(ChainId.HECO_MAINNET, UNI_ADDRESS, 18, 'DAO', 'Daoswap'),
  [ChainId.HECO_TESTNET]: new Token(ChainId.HECO_TESTNET, UNI_ADDRESS, 18, 'DAO', 'Daoswap')
}

// export const COMMON_CONTRACT_NAMES: { [address: string]: string } = {
//   [UNI_ADDRESS]: 'UNI',
//   [TIMELOCK_ADDRESS]: 'Timelock'
// }

const WETH_ONLY: ChainTokenList = {
  [ChainId.BSC_MAINNET]: [WETH[ChainId.BSC_MAINNET]],
  [ChainId.BSC_TESTNET]: [WETH[ChainId.BSC_TESTNET]],
  [ChainId.HECO_MAINNET]: [WETH[ChainId.HECO_MAINNET]],
  [ChainId.HECO_TESTNET]: [WETH[ChainId.HECO_TESTNET]]
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WETH_ONLY
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.BSC_TESTNET]: {
    // [AMPL.address]: [DAI, WETH[ChainId.MAINNET]]
  }
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.BSC_TESTNET]: [...WETH_ONLY[ChainId.BSC_TESTNET], USDC, USDT]
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.BSC_TESTNET]: [...WETH_ONLY[ChainId.BSC_TESTNET], USDC, USDT]
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.BSC_TESTNET]: [[USDC, USDT]]
}

export interface WalletInfo {
  connector?: AbstractConnector
  name: string
  iconName: string
  description: string
  href: string | null
  color: string
  primary?: true
  mobile?: true
  mobileOnly?: true
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  INJECTED: {
    connector: injected,
    name: 'Injected',
    iconName: 'arrow-right.svg',
    description: 'Injected web3 provider.',
    href: null,
    color: '#010101',
    primary: true
  },
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    iconName: 'metamask.png',
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D'
  },
  WALLET_CONNECT: {
    connector: walletconnect,
    name: 'WalletConnect',
    iconName: 'walletConnectIcon.svg',
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
    href: null,
    color: '#4196FC',
    mobile: true
  }
}

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 50
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

export const BIG_INT_ZERO = JSBI.BigInt(0)

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
// export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 3%

// used to ensure the user doesn't send so much ETH so they end up with <.01
export const MIN_ETH: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 ETH
export const BETTER_TRADE_LINK_THRESHOLD = new Percent(JSBI.BigInt(75), JSBI.BigInt(10000))

// Node Type
export const USDT_DAO_PAIR_ADDRESS = '0x1805041b45A8B6fe3CB1D67F8D1338993f745065'
export const USDT_DAO_STAKING_REWARDS_ADDRESS = '0xF43e9274e625F5Ae811dc91d143F717207470894'
export const NODE_TYPE_STELLAR_MIN_USD_VALUE = JSBI.multiply(
  JSBI.BigInt(3000),
  JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(18))
) // 50000
export const NODE_TYPE_PLANETARY_MIN_USD_VALUE = JSBI.multiply(
  JSBI.BigInt(500),
  JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(18))
) // 5000
