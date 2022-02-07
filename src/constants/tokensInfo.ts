import { ChainId, Token, DAO_ADDRESS, USDC_ADDRESS, USDT_ADDRESS } from '@daoswapdex/daoswap-dex-sdk'

type TokenMap = {
  readonly [chainId in ChainId]: Token
}

export const USDT: TokenMap = {
  [ChainId.BSC_MAINNET]: new Token(ChainId.BSC_MAINNET, USDT_ADDRESS[ChainId.BSC_MAINNET], 18, 'USDT', 'Tether USD'),
  [ChainId.BSC_TESTNET]: new Token(ChainId.BSC_TESTNET, USDT_ADDRESS[ChainId.BSC_TESTNET], 18, 'USDT', 'Tether USD'),
  [ChainId.HECO_MAINNET]: new Token(ChainId.HECO_MAINNET, USDT_ADDRESS[ChainId.HECO_MAINNET], 18, 'USDT', 'Tether USD'),
  [ChainId.HECO_TESTNET]: new Token(ChainId.HECO_TESTNET, USDT_ADDRESS[ChainId.HECO_TESTNET], 18, 'USDT', 'Tether USD')
}

export const USDC: TokenMap = {
  [ChainId.BSC_MAINNET]: new Token(ChainId.BSC_MAINNET, USDC_ADDRESS[ChainId.BSC_MAINNET], 6, 'USDC', 'USD Coin'),
  [ChainId.BSC_TESTNET]: new Token(ChainId.BSC_TESTNET, USDC_ADDRESS[ChainId.BSC_TESTNET], 6, 'USDC', 'USD Coin'),
  [ChainId.HECO_MAINNET]: new Token(ChainId.HECO_MAINNET, USDC_ADDRESS[ChainId.HECO_MAINNET], 6, 'USDC', 'USD Coin'),
  [ChainId.HECO_TESTNET]: new Token(ChainId.HECO_TESTNET, USDC_ADDRESS[ChainId.HECO_TESTNET], 6, 'USDC', 'USD Coin')
}

export const DAO: TokenMap = {
  [ChainId.BSC_MAINNET]: new Token(ChainId.BSC_MAINNET, DAO_ADDRESS[ChainId.BSC_MAINNET], 18, 'DAO', 'Daoswap'),
  [ChainId.BSC_TESTNET]: new Token(ChainId.BSC_TESTNET, DAO_ADDRESS[ChainId.BSC_TESTNET], 18, 'DAO', 'Daoswap'),
  [ChainId.HECO_MAINNET]: new Token(ChainId.HECO_MAINNET, DAO_ADDRESS[ChainId.HECO_MAINNET], 18, 'DAO', 'Daoswap'),
  [ChainId.HECO_TESTNET]: new Token(ChainId.HECO_TESTNET, DAO_ADDRESS[ChainId.HECO_TESTNET], 18, 'DAO', 'Daoswap')
}

export const DAI: TokenMap = {
  [ChainId.BSC_MAINNET]: new Token(
    ChainId.BSC_MAINNET,
    '0x60d64Ef311a4F0E288120543A14e7f90E76304c6',
    18,
    'DAI',
    'Dai Stablecoin'
  ),
  [ChainId.BSC_TESTNET]: new Token(
    ChainId.BSC_TESTNET,
    '0x60d64Ef311a4F0E288120543A14e7f90E76304c6',
    18,
    'DAI',
    'Dai Stablecoin'
  ),
  [ChainId.HECO_MAINNET]: new Token(
    ChainId.HECO_MAINNET,
    '0x60d64Ef311a4F0E288120543A14e7f90E76304c6',
    18,
    'DAI',
    'Dai Stablecoin'
  ),
  [ChainId.HECO_TESTNET]: new Token(
    ChainId.HECO_TESTNET,
    '0x60d64Ef311a4F0E288120543A14e7f90E76304c6',
    18,
    'DAI',
    'Dai Stablecoin'
  )
}

export const ETH: TokenMap = {
  [ChainId.BSC_MAINNET]: new Token(
    ChainId.BSC_MAINNET,
    '0x64FF637fB478863B7468bc97D30a5bF3A428a1fD',
    18,
    'ETH',
    'Heco-Peg ETH Token'
  ),
  [ChainId.BSC_TESTNET]: new Token(
    ChainId.BSC_TESTNET,
    '0x64FF637fB478863B7468bc97D30a5bF3A428a1fD',
    18,
    'ETH',
    'Heco-Peg ETH Token'
  ),
  [ChainId.HECO_MAINNET]: new Token(
    ChainId.HECO_MAINNET,
    '0x64FF637fB478863B7468bc97D30a5bF3A428a1fD',
    18,
    'ETH',
    'Heco-Peg ETH Token'
  ),
  [ChainId.HECO_TESTNET]: new Token(
    ChainId.HECO_TESTNET,
    '0x64FF637fB478863B7468bc97D30a5bF3A428a1fD',
    18,
    'ETH',
    'Heco-Peg ETH Token'
  )
}

export const HFIL: TokenMap = {
  [ChainId.BSC_MAINNET]: new Token(
    ChainId.BSC_MAINNET,
    '0xae3a768f9aB104c69A7CD6041fE16fFa235d1810',
    18,
    'HFIL',
    'Heco-Peg HFIL Token'
  ),
  [ChainId.BSC_TESTNET]: new Token(
    ChainId.BSC_TESTNET,
    '0xae3a768f9aB104c69A7CD6041fE16fFa235d1810',
    18,
    'HFIL',
    'Heco-Peg HFIL Token'
  ),
  [ChainId.HECO_MAINNET]: new Token(
    ChainId.HECO_MAINNET,
    '0xae3a768f9aB104c69A7CD6041fE16fFa235d1810',
    18,
    'HFIL',
    'Heco-Peg HFIL Token'
  ),
  [ChainId.HECO_TESTNET]: new Token(
    ChainId.HECO_TESTNET,
    '0xae3a768f9aB104c69A7CD6041fE16fFa235d1810',
    18,
    'HFIL',
    'Heco-Peg HFIL Token'
  )
}

export const HT: TokenMap = {
  [ChainId.BSC_MAINNET]: new Token(
    ChainId.BSC_MAINNET,
    '0x5545153CCFcA01fbd7Dd11C0b23ba694D9509A6F',
    18,
    'HT',
    'Wrapped HT'
  ),
  [ChainId.BSC_TESTNET]: new Token(
    ChainId.BSC_TESTNET,
    '0x5545153CCFcA01fbd7Dd11C0b23ba694D9509A6F',
    18,
    'HT',
    'Wrapped HT'
  ),
  [ChainId.HECO_MAINNET]: new Token(
    ChainId.HECO_MAINNET,
    '0x5545153CCFcA01fbd7Dd11C0b23ba694D9509A6F',
    18,
    'HT',
    'Wrapped HT'
  ),
  [ChainId.HECO_TESTNET]: new Token(
    ChainId.HECO_TESTNET,
    '0x5545153CCFcA01fbd7Dd11C0b23ba694D9509A6F',
    18,
    'HT',
    'Wrapped HT'
  )
}

export const UNI: TokenMap = {
  [ChainId.BSC_MAINNET]: new Token(
    ChainId.BSC_MAINNET,
    '0x22C54cE8321A4015740eE1109D9cBc25815C46E6',
    18,
    'UNI',
    'Heco-Peg UNI Token'
  ),
  [ChainId.BSC_TESTNET]: new Token(
    ChainId.BSC_TESTNET,
    '0x22C54cE8321A4015740eE1109D9cBc25815C46E6',
    18,
    'UNI',
    'Heco-Peg UNI Token'
  ),
  [ChainId.HECO_MAINNET]: new Token(
    ChainId.HECO_MAINNET,
    '0x22C54cE8321A4015740eE1109D9cBc25815C46E6',
    18,
    'UNI',
    'Heco-Peg UNI Token'
  ),
  [ChainId.HECO_TESTNET]: new Token(
    ChainId.HECO_TESTNET,
    '0x22C54cE8321A4015740eE1109D9cBc25815C46E6',
    18,
    'UNI',
    'Heco-Peg UNI Token'
  )
}

export const MDX: TokenMap = {
  [ChainId.BSC_MAINNET]: new Token(
    ChainId.BSC_MAINNET,
    '0x25D2e80cB6B86881Fd7e07dd263Fb79f4AbE033c',
    18,
    'MDX',
    'Heco-Peg MDX Token'
  ),
  [ChainId.BSC_TESTNET]: new Token(
    ChainId.BSC_TESTNET,
    '0x25D2e80cB6B86881Fd7e07dd263Fb79f4AbE033c',
    18,
    'MDX',
    'Heco-Peg MDX Token'
  ),
  [ChainId.HECO_MAINNET]: new Token(
    ChainId.HECO_MAINNET,
    '0x25D2e80cB6B86881Fd7e07dd263Fb79f4AbE033c',
    18,
    'MDX',
    'Heco-Peg MDX Token'
  ),
  [ChainId.HECO_TESTNET]: new Token(
    ChainId.HECO_TESTNET,
    '0x25D2e80cB6B86881Fd7e07dd263Fb79f4AbE033c',
    18,
    'MDX',
    'Heco-Peg MDX Token'
  )
}

export const HBCH: TokenMap = {
  [ChainId.BSC_MAINNET]: new Token(
    ChainId.BSC_MAINNET,
    '0xeF3CEBD77E0C52cb6f60875d9306397B5Caca375',
    18,
    'HBCH',
    'Heco-Peg HBCH Token'
  ),
  [ChainId.BSC_TESTNET]: new Token(
    ChainId.BSC_TESTNET,
    '0xeF3CEBD77E0C52cb6f60875d9306397B5Caca375',
    18,
    'HBCH',
    'Heco-Peg HBCH Token'
  ),
  [ChainId.HECO_MAINNET]: new Token(
    ChainId.HECO_MAINNET,
    '0xeF3CEBD77E0C52cb6f60875d9306397B5Caca375',
    18,
    'HBCH',
    'Heco-Peg HBCH Token'
  ),
  [ChainId.HECO_TESTNET]: new Token(
    ChainId.HECO_TESTNET,
    '0xeF3CEBD77E0C52cb6f60875d9306397B5Caca375',
    18,
    'HBCH',
    'Heco-Peg HBCH Token'
  )
}

export const HLTC: TokenMap = {
  [ChainId.BSC_MAINNET]: new Token(
    ChainId.BSC_MAINNET,
    '0xecb56cf772B5c9A6907FB7d32387Da2fCbfB63b4',
    18,
    'HLTC',
    'Heco-Peg HLTC Token'
  ),
  [ChainId.BSC_TESTNET]: new Token(
    ChainId.BSC_TESTNET,
    '0xecb56cf772B5c9A6907FB7d32387Da2fCbfB63b4',
    18,
    'HLTC',
    'Heco-Peg HLTC Token'
  ),
  [ChainId.HECO_MAINNET]: new Token(
    ChainId.HECO_MAINNET,
    '0xecb56cf772B5c9A6907FB7d32387Da2fCbfB63b4',
    18,
    'HLTC',
    'Heco-Peg HLTC Token'
  ),
  [ChainId.HECO_TESTNET]: new Token(
    ChainId.HECO_TESTNET,
    '0xecb56cf772B5c9A6907FB7d32387Da2fCbfB63b4',
    18,
    'HLTC',
    'Heco-Peg HLTC Token'
  )
}

export const MANA: TokenMap = {
  [ChainId.BSC_MAINNET]: new Token(
    ChainId.BSC_MAINNET,
    '0x09006b66d89e5213Fc173403AACBA30620A91F4e',
    18,
    'MANA',
    'Heco-Peg MANA Token'
  ),
  [ChainId.BSC_TESTNET]: new Token(
    ChainId.BSC_TESTNET,
    '0x09006b66d89e5213Fc173403AACBA30620A91F4e',
    18,
    'MANA',
    'Heco-Peg MANA Token'
  ),
  [ChainId.HECO_MAINNET]: new Token(
    ChainId.HECO_MAINNET,
    '0x09006b66d89e5213Fc173403AACBA30620A91F4e',
    18,
    'MANA',
    'Heco-Peg MANA Token'
  ),
  [ChainId.HECO_TESTNET]: new Token(
    ChainId.HECO_TESTNET,
    '0x09006b66d89e5213Fc173403AACBA30620A91F4e',
    18,
    'MANA',
    'Heco-Peg MANA Token'
  )
}

export const HDOT: TokenMap = {
  [ChainId.BSC_MAINNET]: new Token(
    ChainId.BSC_MAINNET,
    '0xA2c49cEe16a5E5bDEFDe931107dc1fae9f7773E3',
    18,
    'HDOT',
    'Heco-Peg HDOT Token'
  ),
  [ChainId.BSC_TESTNET]: new Token(
    ChainId.BSC_TESTNET,
    '0xA2c49cEe16a5E5bDEFDe931107dc1fae9f7773E3',
    18,
    'HDOT',
    'Heco-Peg HDOT Token'
  ),
  [ChainId.HECO_MAINNET]: new Token(
    ChainId.HECO_MAINNET,
    '0xA2c49cEe16a5E5bDEFDe931107dc1fae9f7773E3',
    18,
    'HDOT',
    'Heco-Peg HDOT Token'
  ),
  [ChainId.HECO_TESTNET]: new Token(
    ChainId.HECO_TESTNET,
    '0xA2c49cEe16a5E5bDEFDe931107dc1fae9f7773E3',
    18,
    'HDOT',
    'Heco-Peg HDOT Token'
  )
}

export const LINK: TokenMap = {
  [ChainId.BSC_MAINNET]: new Token(
    ChainId.BSC_MAINNET,
    '0x9e004545c59D359F6B7BFB06a26390b087717b42',
    18,
    'LINK',
    'Heco-Peg LINK Token'
  ),
  [ChainId.BSC_TESTNET]: new Token(
    ChainId.BSC_TESTNET,
    '0x9e004545c59D359F6B7BFB06a26390b087717b42',
    18,
    'LINK',
    'Heco-Peg LINK Token'
  ),
  [ChainId.HECO_MAINNET]: new Token(
    ChainId.HECO_MAINNET,
    '0x9e004545c59D359F6B7BFB06a26390b087717b42',
    18,
    'LINK',
    'Heco-Peg LINK Token'
  ),
  [ChainId.HECO_TESTNET]: new Token(
    ChainId.HECO_TESTNET,
    '0x9e004545c59D359F6B7BFB06a26390b087717b42',
    18,
    'LINK',
    'Heco-Peg LINK Token'
  )
}
