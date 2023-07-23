import React, { useMemo } from 'react'
import { AutoColumn } from '../../components/Column'
import styled from 'styled-components'
import { TYPE } from '../../theme'
import { RowBetween } from '../../components/Row'
import { CardSection, DataCard, CardNoise, CardBGImage } from './styled'
import { useTranslation } from 'react-i18next'
import PoolCard from '../../components/staking/PoolCardForLP'
import { NodeTabs } from '../../components/NavigationTabs/node'
import { useActiveWeb3React } from '../../hooks'
import { ChainId, JSBI } from '@daoswapdex/daoswap-dex-sdk'
import { USDT_DAO_PAIR_ADDRESS } from '../../constants/nodeInfo'
import { useSingleContractMultipleData, useSingleCallResult } from '../../state/multicall/hooks'
import { useTokenContract, useStakingLPContract } from '../../hooks/useContract'
import { DAO, DST } from 'constants/tokensInfo'

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
  // get LP token balance
  let userBalanceOfStakingLP = JSBI.BigInt(0)
  const USDT_DAO_TOKEN_CONTRACT = useTokenContract(USDT_DAO_PAIR_ADDRESS[currentChainId], true)
  const tokenVestingBalances = useSingleContractMultipleData(
    USDT_DAO_TOKEN_CONTRACT,
    'balanceOf',
    tokenVestingAddressListArray.map(address => [address])
  )
  if (tokenVestingBalances.length > 0) {
    tokenVestingBalances.map(balance => {
      userBalanceOfStakingLP = JSBI.add(userBalanceOfStakingLP, JSBI.BigInt(balance?.result?.[0] ?? 0))
      return balance
    })
  }
  // get DAO token balance
  let userBalanceOfDAO = JSBI.BigInt(0)
  const DAO_TOKEN_CONTRACT = useTokenContract(DAO[currentChainId].address, true)
  const tokenVestingBalancesOfDAO = useSingleContractMultipleData(
    DAO_TOKEN_CONTRACT,
    'balanceOf',
    tokenVestingAddressListArray.map(address => [address])
  )
  if (tokenVestingBalancesOfDAO.length > 0) {
    tokenVestingBalancesOfDAO.map(balance => {
      userBalanceOfDAO = JSBI.add(userBalanceOfDAO, JSBI.BigInt(balance?.result?.[0] ?? 0))
      return balance
    })
  }
  // get DST token balance
  let userBalanceOfDST = JSBI.BigInt(0)
  const DST_TOKEN_CONTRACT = useTokenContract(DST[currentChainId].address, true)
  const tokenVestingBalancesOfDST = useSingleContractMultipleData(
    DST_TOKEN_CONTRACT,
    'balanceOf',
    tokenVestingAddressListArray.map(address => [address])
  )
  if (tokenVestingBalancesOfDST.length > 0) {
    tokenVestingBalancesOfDST.map(balance => {
      userBalanceOfDST = JSBI.add(userBalanceOfDST, JSBI.BigInt(balance?.result?.[0] ?? 0))
      return balance
    })
  }

  return JSBI.add(JSBI.add(userBalanceOfStakingLP, userBalanceOfDAO), userBalanceOfDST)
}

export default function StakingLP() {
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

  const currentChainId = chainId ? chainId : ChainId.BSC_MAINNET

  // staking lp contract address list
  const stakingList: {
    [chainId in ChainId]?: StakingInfo[]
  } = {
    [ChainId.BSC_MAINNET]: [
      {
        period: 11,
        domain: 'staking.bsc.daoswap.cc',
        name: 'StakingLPPeriod11',
        address: '0x7a1162F1175eCB34048695E0628448c3F7FE2850',
        capAmount: 100000,
        apr: 62,
        aprDAO: 0,
        aprDST: 62,
        openStatus: true,
        display: 'normal'
        // display: inWhiteList.length > 0 ? 'normal' : 'none'
      },
      {
        period: 10,
        domain: 'staking.bsc.daoswap.cc',
        name: 'StakingLPPeriod10',
        address: '0xf246606f83DFd8B221dad80A3304a02e07c500e3',
        capAmount: 100000,
        apr: 62,
        aprDAO: 0,
        aprDST: 62,
        openStatus: true,
        display: 'normal'
        // display: inWhiteList.length > 0 ? 'normal' : 'none'
      },
      {
        period: 9,
        domain: 'staking.bsc.daoswap.cc',
        name: 'StakingLPPeriod9',
        address: '0xe2931E97516BCd0a447bbF4594Da66f048B213B1',
        capAmount: 100000,
        apr: 62,
        aprDAO: 0,
        aprDST: 62,
        openStatus: false,
        display: 'normal'
        // display: inWhiteList.length > 0 ? 'normal' : 'none'
      },
      {
        period: 8,
        domain: 'staking.bsc.daoswap.cc',
        name: 'StakingLPPeriod8',
        address: '0xBE1162f12c32737Cf42a30eE34500db81cf96517',
        capAmount: 100000,
        apr: 62,
        aprDAO: 0,
        aprDST: 62,
        openStatus: false,
        display: 'normal'
      },
      {
        period: 7,
        domain: 'staking.bsc.daoswap.cc',
        name: 'StakingLPPeriod7',
        address: '0xe6D688b65EDA351D57a663f4578c1d8e3D9b7C48',
        capAmount: 100000,
        apr: 62,
        aprDAO: 0,
        aprDST: 62,
        openStatus: false,
        display: 'normal'
      },
      {
        period: 6,
        domain: 'staking.bsc.daoswap.cc',
        name: 'StakingLPPeriod6',
        address: '0xBD22E68ea007a21D313E34e0955B44F356273344',
        capAmount: 100000,
        apr: 62,
        aprDAO: 0,
        aprDST: 62,
        openStatus: false,
        display: 'normal'
      },
      {
        period: 5,
        domain: 'staking.bsc.daoswap.cc',
        name: 'StakingLPPeriod5',
        address: '0x271aFA5D75D2C090C8763FA29eeabaed94A7Bd16',
        capAmount: 100000,
        apr: 62,
        aprDAO: 0,
        aprDST: 62,
        openStatus: false,
        display: 'normal'
      },
      {
        period: 4,
        domain: 'staking.bsc.daoswap.cc',
        name: 'StakingLPPeriod4',
        address: '0x739f5C2a5Ee387fFde600A72ed293431Bf7C6517',
        capAmount: 100000,
        apr: 72,
        aprDAO: 0,
        aprDST: 72,
        openStatus: false,
        display: 'normal'
      },
      {
        period: 3,
        domain: 'staking.bsc.daoswap.cc',
        name: 'StakingLPPeriod3',
        address: '0xf36Dd3A5100a2ce0014A78Cb40B5EfE30639eB5d',
        capAmount: 100000,
        apr: 82,
        aprDAO: 0,
        aprDST: 82,
        openStatus: false,
        display: 'normal'
      },
      {
        period: 2,
        domain: 'staking.bsc.daoswap.cc',
        name: 'StakingLPPeriod2',
        address: '0x7137E710961a5754362932Cc9543C337cA1c9B0e',
        capAmount: 100000,
        apr: 92,
        aprDAO: 0,
        aprDST: 92,
        openStatus: false,
        display: 'normal'
      },
      {
        period: 1,
        domain: 'staking.bsc.daoswap.cc',
        name: 'StakingLPPeriod1',
        address: '0x489cc30482499DA25057B78a9a64043a042BA421',
        capAmount: 100000,
        apr: 102,
        aprDAO: 0,
        aprDST: 102,
        openStatus: false,
        display: 'normal'
      }
    ],
    [ChainId.BSC_TESTNET]: [],
    [ChainId.HECO_MAINNET]: [
      {
        period: 'node',
        domain: 'staking.heco.daoswap.cc',
        name: 'StakingLPPeriod8HECO',
        address: '0x33d7D4E7FaF59a793a9f05693c27ffBEe81Ee033',
        capAmount: 2100000,
        apr: 62,
        aprDAO: 0,
        aprDST: 62,
        openStatus: false,
        display: 'normal'
      },
      {
        period: 7,
        domain: 'staking.heco.daoswap.cc',
        name: 'StakingLPPeriod7',
        address: '0xb13118b41CF1b91A89d812B38a074adC32492486',
        capAmount: 100000,
        apr: 60,
        aprDAO: 0,
        aprDST: 60,
        openStatus: true,
        display: 'normal'
      },
      {
        period: 6,
        domain: 'staking.heco.daoswap.cc',
        name: 'StakingLPPeriod6',
        address: '0xE326AF702d311613C4614791b135E3703D15b948',
        capAmount: 300000,
        apr: 112,
        aprDAO: 0,
        aprDST: 112,
        openStatus: false,
        display: 'normal'
      },
      {
        period: 5,
        domain: 'staking.heco.daoswap.cc',
        name: 'StakingLPPeriod5',
        address: '0xD21f4AE786aEFf05fC1717773DbA68aca2054D75',
        capAmount: 300000,
        apr: 114,
        aprDAO: 34.2,
        aprDST: 79.8,
        openStatus: false,
        display: 'normal'
      },
      {
        period: 4,
        domain: 'staking.heco.daoswap.cc',
        name: 'StakingLPPeriod4',
        address: '0x655E6BD4742e04029a024dBA516b3ddb671AF017',
        capAmount: 300000,
        apr: 116,
        aprDAO: 34.8,
        aprDST: 81.2,
        openStatus: false,
        display: 'normal'
      },
      {
        period: 3,
        domain: 'staking.heco.daoswap.cc',
        name: 'StakingLPPeriod3',
        address: '0x63f84cc9474f47f50784A98F498d0E236e982dc1',
        capAmount: 400000,
        apr: 116,
        aprDAO: 58,
        aprDST: 58,
        openStatus: false,
        display: 'normal'
      },
      {
        period: 2,
        domain: 'staking.heco.daoswap.cc',
        name: 'StakingLPPeriod2',
        address: '0xab5f0c81b2216c803AF6173d898a121314235dc5',
        capAmount: 400000,
        apr: 118,
        aprDAO: 59,
        aprDST: 59,
        openStatus: false,
        display: 'normal'
      },
      {
        period: 1,
        domain: 'staking.heco.daoswap.cc',
        name: 'StakingLPPeriod1',
        address: '0xC6f7f50a18D1071FE08b4E3EEE4db7c8A49faEA0',
        capAmount: 500000,
        apr: 120,
        aprDAO: 60,
        aprDST: 60,
        openStatus: false,
        display: 'normal'
      }
    ],
    [ChainId.HECO_TESTNET]: [
      {
        period: 1,
        domain: 'test.staking.heco.daoswap.cc',
        name: 'StakingLPPeriod1',
        address: '',
        capAmount: 100000,
        apr: 102,
        aprDAO: 0,
        aprDST: 102,
        openStatus: true,
        display: 'normal'
      }
    ]
  }

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
                <TYPE.white fontWeight={600}>{t('Hash Node Staking')}</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={9}>
                  {t('Stake DAO/USDT LP, share 1/3 fee.')}
                  <br />
                  <TYPE.white fontSize={9}>0xa9bB710996d6ed61B83a5EAB583bAe683199c2de</TYPE.white>
                </TYPE.white>
              </RowBetween>
            </AutoColumn>
          </CardSection>
          <CardBGImage />
          <CardNoise />
        </DataCard>
      </TopSection>

      <NodeTabs active={'staking-lp'} />

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
