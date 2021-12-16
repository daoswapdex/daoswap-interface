import { CurrencyAmount, ETHER, ETHER_CHAIN, JSBI, ChainId } from '@daoswapdex-bsc-testnet/daoswap-sdk'
import { MIN_ETH } from '../constants'

/**
 * Given some token amount, return the max that can be spent of it
 * @param currencyAmount to return max of
 */
export function maxAmountSpend(
  chainId: ChainId | undefined,
  currencyAmount?: CurrencyAmount
): CurrencyAmount | undefined {
  if (!currencyAmount) return undefined
  if (currencyAmount.currency === (chainId ? ETHER_CHAIN[chainId] : ETHER)) {
    if (JSBI.greaterThan(currencyAmount.raw, MIN_ETH)) {
      return CurrencyAmount.etherByChainId(chainId, JSBI.subtract(currencyAmount.raw, MIN_ETH))
    } else {
      return CurrencyAmount.etherByChainId(chainId, JSBI.BigInt(0))
    }
  }
  return currencyAmount
}
