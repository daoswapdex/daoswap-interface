import { Currency, ETHER_CHAIN, ChainId, Token, CURRENCY_SYMBOL } from '@daoswapdex-bsc-testnet/daoswap-sdk'

export function currencyId(chainId: ChainId | undefined, currency: Currency): string {
  const currentChainId = chainId ? chainId : ChainId.BSC_MAINNET
  if (currency === ETHER_CHAIN[currentChainId]) return CURRENCY_SYMBOL[currentChainId]
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
