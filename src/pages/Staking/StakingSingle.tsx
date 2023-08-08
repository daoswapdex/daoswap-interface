import React, { useMemo } from 'react'
import { AutoColumn } from '../../components/Column'
import styled from 'styled-components'
import { TYPE } from '../../theme'
import { RowBetween } from '../../components/Row'
import { CardSection, DataCard, CardNoise, CardBGImage } from './styled'
import { useTranslation } from 'react-i18next'
import PoolCard from '../../components/staking/PoolCardForSingle'
import { NodeTabs } from '../../components/NavigationTabs/node'
import { useActiveWeb3React } from '../../hooks'
import { ChainId, JSBI } from '@daoswapdex/daoswap-dex-sdk'
import { DAO } from '../../constants/tokensInfo'
import { useSingleContractMultipleData, useSingleCallResult } from '../../state/multicall/hooks'
import { useTokenContract, useStakingLPContract } from '../../hooks/useContract'

const PageWrapper = styled(AutoColumn)`
  max-width: 640px;
  width: 100%;
`

const TopSection = styled(AutoColumn)`
  max-width: 720px;
  width: 100%;
`

const PoolSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 10px;
  row-gap: 15px;
  width: 100%;
  justify-self: center;
`

interface StakingInfo {
  period: number | string
  domain: string
  name: string
  address: string
  capAmount: number
  apr: number
  aprDAO: number
  aprDST: number
  openStatus: boolean
  display: string
}

function GetBalanceByVestingToken(contractAddress: string, currentChainId: ChainId): JSBI {
  const { account } = useActiveWeb3React()
  // Node Info Get
  const accountArg = useMemo(() => [account ?? undefined], [account])

  const STAKING_LP_CONTRACT = useStakingLPContract(contractAddress, true)
  const tokenVestingAddressList = useSingleCallResult(
    STAKING_LP_CONTRACT,
    'getTokenVestingAddressByAccount',
    accountArg
  )?.result?.[0]

  const tokenVestingAddressListArray: string[] = []
  if (tokenVestingAddressList && tokenVestingAddressList.length > 0) {
    tokenVestingAddressList.map((tokenVesting: string) => {
      if (tokenVesting) {
        tokenVestingAddressListArray.push(tokenVesting)
      }
      return tokenVesting
    })
  }
  let userBalanceOfStakingLP = JSBI.BigInt(0)
  const DAO_TOKEN_CONTRACT = useTokenContract(DAO[currentChainId].address, true)
  const tokenVestingBalances = useSingleContractMultipleData(
    DAO_TOKEN_CONTRACT,
    'balanceOf',
    tokenVestingAddressListArray.map(address => [address])
  )
  if (tokenVestingBalances.length > 0) {
    tokenVestingBalances.map(balance => {
      userBalanceOfStakingLP = JSBI.add(userBalanceOfStakingLP, JSBI.BigInt(balance?.result?.[0] ?? 0))
      return balance
    })
  }
  return userBalanceOfStakingLP
}

export default function StakingSingle() {
  const { t } = useTranslation()
  const { chainId } = useActiveWeb3React()

  // TODO: is display staking rewards info list for specical address
  // const whiteList = [
  //   '0x3DdcFc89B4DD2b33d9a8Ca0F60180527E9810D4B',
  //   '0xBdB9BD48CDCF075D66f81f083b9Ab618a0530c31',
  //   '0x70FBf5E00a67aAaD3146cE4B017CbbaB4202a7CC',
  //   '0xa9bB710996d6ed61B83a5EAB583bAe683199c2de',
  //   '0x9b1d0c9c1aE96011776e6786b4Efe884665918D2'
  // ]
  // const inWhiteList = whiteList.filter(item => item.toLowerCase() === account?.toLowerCase())

  const stakingList: {
    [chainId in ChainId]?: StakingInfo[]
  } = {
    [ChainId.BSC_MAINNET]: [
      {
        period: 6,
        domain: 'staking.bsc.daoswap.cc',
        name: 'StakingDAOPeriod6',
        address: '0x4f9e10488b76aE9A5b84b9Acb88664aD3649d60E',
        capAmount: 100000,
        apr: 38,
        aprDAO: 19,
        aprDST: 19,
        openStatus: true,
        display: 'normal'
        // display: inWhiteList.length > 0 ? 'normal' : 'none'
      },
      {
        period: 5,
        domain: 'staking.bsc.daoswap.cc',
        name: 'StakingDAOPeriod5',
        address: '0x4FE37c43Bc334aceE88622179F917CC5B8b70A6a',
        capAmount: 100000,
        apr: 38,
        aprDAO: 19,
        aprDST: 19,
        openStatus: true,
        display: 'normal'
        // display: inWhiteList.length > 0 ? 'normal' : 'none'
      },
      {
        period: 4,
        domain: 'staking.bsc.daoswap.cc',
        name: 'StakingDAOPeriod4',
        address: '0xa4B2d2a1aFcbf5aeF36Eed24D1455b3fF0FF0baE',
        capAmount: 100000,
        apr: 38,
        aprDAO: 19,
        aprDST: 19,
        openStatus: false,
        display: 'normal'
      },
      {
        period: 3,
        domain: 'staking.bsc.daoswap.cc',
        name: 'StakingDAOPeriod3',
        address: '0x5E554D8A076D10305bcB70F542b5B0D9551cB504',
        capAmount: 100000,
        apr: 38,
        aprDAO: 19,
        aprDST: 19,
        openStatus: false,
        display: 'normal'
      },
      {
        period: 2,
        domain: 'staking.bsc.daoswap.cc',
        name: 'StakingDAOPeriod2',
        address: '0xd3F385210325830E4eb7C7f309FE63680461c539',
        capAmount: 100000,
        apr: 38,
        aprDAO: 19,
        aprDST: 19,
        openStatus: false,
        display: 'normal'
      },
      {
        period: 1,
        domain: 'staking.bsc.daoswap.cc',
        name: 'StakingDAOPeriod1',
        address: '0x79d0330D83e3283cA50a0fC93377BDFBA031a916',
        capAmount: 100000,
        apr: 38,
        aprDAO: 19,
        aprDST: 19,
        openStatus: false,
        display: 'normal'
      }
    ],
    [ChainId.BSC_TESTNET]: [
      {
        period: 1,
        domain: 'test.staking.bsc.daoswap.cc',
        name: 'StakingDAOPeriod1',
        address: '0xf246606f83DFd8B221dad80A3304a02e07c500e3',
        capAmount: 500,
        apr: 48,
        aprDAO: 24,
        aprDST: 24,
        openStatus: true,
        display: 'normal'
        // display: inWhiteList.length > 0 ? 'normal' : 'none'
      }
    ],
    [ChainId.HECO_MAINNET]: [
      {
        period: 3,
        domain: 'staking.heco.daoswap.cc',
        name: 'StakingDAOPeriod3',
        address: '0xa322bA6c0B8ce79F8EfC3CEc3EB827FD0ED7D84c',
        capAmount: 100000,
        apr: 58,
        aprDAO: 17.4,
        aprDST: 40.6,
        openStatus: false,
        display: 'normal'
        // display: inWhiteList.length > 0 ? 'normal' : 'none'
      },
      {
        period: 2,
        domain: 'staking.heco.daoswap.cc',
        name: 'StakingDAOPeriod2',
        address: '0xE84d6F2b07ECA5BA4274e4370CF03F74cE98f49e',
        capAmount: 100000,
        apr: 58,
        aprDAO: 29,
        aprDST: 29,
        openStatus: false,
        display: 'normal'
      },
      {
        period: 1,
        domain: 'staking.heco.daoswap.cc',
        name: 'StakingDAOPeriod1',
        address: '0x0FFCa2C64F62bC384C583EEa2f6D11D8DDe5c6Ed',
        capAmount: 100000,
        apr: 60,
        aprDAO: 30,
        aprDST: 30,
        openStatus: false,
        display: 'normal'
      }
    ],
    [ChainId.HECO_TESTNET]: []
  }

  const currentChainId = chainId ? chainId : ChainId.BSC_MAINNET

  const stakingInfoList: StakingInfo[] = []
  stakingList[currentChainId]?.map((item: StakingInfo) => {
    const balance = GetBalanceByVestingToken(item.address, currentChainId)
    if (JSBI.greaterThan(balance, JSBI.BigInt(0)) || item.openStatus) {
      stakingInfoList.push(item)
    }
  })

  return (
    <PageWrapper gap="lg" justify="center">
      <TopSection gap="md">
        <DataCard>
          <CardBGImage />
          <CardNoise />
          <CardSection>
            <AutoColumn gap="md">
              <RowBetween>
                <TYPE.white fontWeight={600}>{t('DAO Staking')}</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={9}>{t('Stake DAO to get extra income.')}</TYPE.white>
              </RowBetween>
            </AutoColumn>
          </CardSection>
          <CardBGImage />
          <CardNoise />
        </DataCard>
      </TopSection>

      <NodeTabs active={'staking-single'} />

      <AutoColumn gap="lg" style={{ width: '100%', maxWidth: '720px' }}>
        <PoolSection>
          {stakingInfoList?.length === 0
            ? t('No active staking')
            : stakingInfoList?.map(stakingInfo => {
                return <PoolCard key={stakingInfo.period} stakingInfo={stakingInfo} />
              })}
        </PoolSection>
      </AutoColumn>
    </PageWrapper>
  )
}
