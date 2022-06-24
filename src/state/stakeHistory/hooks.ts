import { ChainId, CurrencyAmount, JSBI, Token, TokenAmount, Pair } from '@daoswapdex/daoswap-dex-sdk'
import { useMemo } from 'react'
// TODO:Daoswap ERC20
import {
  DAO,
  USDT,
  ETH,
  FIL,
  BTCB,
  HT,
  UNI,
  MDX,
  HBCH,
  LTC,
  MANA,
  DOT,
  LINK,
  BNB,
  XRP,
  ETC
} from '../../constants/tokensInfo'
import { STAKING_REWARDS_INTERFACE } from '../../constants/abis/staking-rewards'
import { useActiveWeb3React } from '../../hooks'
import { NEVER_RELOAD, useMultipleContractSingleData } from '../multicall/hooks'
import { tryParseAmount } from '../swap/hooks'
import { useTranslation } from 'react-i18next'

// TODO add staking rewards addresses here
export const STAKING_REWARDS_INFO: {
  [chainId in ChainId]?: {
    period: number
    stakingGenesis: number
    rewardsDurationDays: number
    rewardsTokenSymbol: string
    tokens: [Token, Token]
    stakingRewardAddress: string
  }[]
} = {
  [ChainId.BSC_MAINNET]: [
    {
      period: 2,
      stakingGenesis: 1651201200,
      rewardsDurationDays: 14,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.BSC_MAINNET], DAO[ChainId.BSC_MAINNET]],
      stakingRewardAddress: '0xed537020CC5E69c5B14560b4E0988B0152851828'
    },
    {
      period: 2,
      stakingGenesis: 1651201200,
      rewardsDurationDays: 14,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.BSC_MAINNET], ETH[ChainId.BSC_MAINNET]],
      stakingRewardAddress: '0x1A91530DCc9bb88d75F47699a148Fc9f3D495Ae9'
    },
    {
      period: 2,
      stakingGenesis: 1651201200,
      rewardsDurationDays: 14,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.BSC_MAINNET], FIL[ChainId.BSC_MAINNET]],
      stakingRewardAddress: '0x6Ae1AE59e5E2C45cFBd89D40154e19D858a0Fd66'
    },
    {
      period: 2,
      stakingGenesis: 1651201200,
      rewardsDurationDays: 14,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.BSC_MAINNET], BTCB[ChainId.BSC_MAINNET]],
      stakingRewardAddress: '0x8aFBeACbA978fEaD9dB7b5465806354144B63e71'
    },
    {
      period: 2,
      stakingGenesis: 1651201200,
      rewardsDurationDays: 14,
      rewardsTokenSymbol: 'DAO',
      tokens: [ETH[ChainId.BSC_MAINNET], DAO[ChainId.BSC_MAINNET]],
      stakingRewardAddress: '0xbF35a06AC18bC3412b3456E9b387402E0a0AF39B'
    },
    {
      period: 2,
      stakingGenesis: 1651201200,
      rewardsDurationDays: 14,
      rewardsTokenSymbol: 'DAO',
      tokens: [FIL[ChainId.BSC_MAINNET], DAO[ChainId.BSC_MAINNET]],
      stakingRewardAddress: '0x70b2857A24E9727Fac4c1EF0aa42405F4bB776d7'
    },
    {
      period: 1,
      stakingGenesis: 1649221200,
      rewardsDurationDays: 14,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.BSC_MAINNET], DAO[ChainId.BSC_MAINNET]],
      stakingRewardAddress: '0x0A09Da13B9845808DE4C32a57d6E082Bb3450f96'
    },
    {
      period: 1,
      stakingGenesis: 1649221200,
      rewardsDurationDays: 14,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.BSC_MAINNET], ETH[ChainId.BSC_MAINNET]],
      stakingRewardAddress: '0x5b9cBc2C963f623428a80506BE16d044D50a2C30'
    },
    {
      period: 1,
      stakingGenesis: 1649221200,
      rewardsDurationDays: 14,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.BSC_MAINNET], FIL[ChainId.BSC_MAINNET]],
      stakingRewardAddress: '0x4431e21632016De87125F6858CADbb432f3b071e'
    },
    {
      period: 1,
      stakingGenesis: 1649221200,
      rewardsDurationDays: 14,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.BSC_MAINNET], UNI[ChainId.BSC_MAINNET]],
      stakingRewardAddress: '0x5d457B55d14F773501813296B714FA4982293B6A'
    },
    {
      period: 1,
      stakingGenesis: 1649221200,
      rewardsDurationDays: 14,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.BSC_MAINNET], BTCB[ChainId.BSC_MAINNET]],
      stakingRewardAddress: '0xE79Da290Bd685AEEAFF8019EB6216304065428b4'
    },
    {
      period: 1,
      stakingGenesis: 1649221200,
      rewardsDurationDays: 14,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.BSC_MAINNET], BNB[ChainId.BSC_MAINNET]],
      stakingRewardAddress: '0x7eDBA3947997DF1ec041264B03C51DF479b2A535'
    },
    {
      period: 1,
      stakingGenesis: 1649221200,
      rewardsDurationDays: 14,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.BSC_MAINNET], LINK[ChainId.BSC_MAINNET]],
      stakingRewardAddress: '0xA9dD703B51449B6c6DF6a115d35B5932C971675f'
    },
    {
      period: 1,
      stakingGenesis: 1649221200,
      rewardsDurationDays: 14,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.BSC_MAINNET], DOT[ChainId.BSC_MAINNET]],
      stakingRewardAddress: '0xD627c333B45cCAE1aFBb71bC8c9eaF00b237ef8E'
    },
    {
      period: 1,
      stakingGenesis: 1649221200,
      rewardsDurationDays: 14,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.BSC_MAINNET], LTC[ChainId.BSC_MAINNET]],
      stakingRewardAddress: '0x159be5f7f07720C669ED26dEFD93Cbb5c767D992'
    },
    {
      period: 1,
      stakingGenesis: 1649221200,
      rewardsDurationDays: 14,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.BSC_MAINNET], XRP[ChainId.BSC_MAINNET]],
      stakingRewardAddress: '0x58Ba184Cdb2CFbf933253EFDBeB281bd100DCD6c'
    },
    {
      period: 1,
      stakingGenesis: 1649221200,
      rewardsDurationDays: 14,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.BSC_MAINNET], ETC[ChainId.BSC_MAINNET]],
      stakingRewardAddress: '0x7df8ca7f57815Bd6c488b8Dd452610D5a33B23ba'
    }
  ],
  [ChainId.HECO_MAINNET]: [
    {
      period: 6,
      stakingGenesis: 1645066800,
      rewardsDurationDays: 28,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], DAO[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0x8A041E9C28250A542642c65206Fa90E369Fe4409'
    },
    {
      period: 6,
      stakingGenesis: 1645066800,
      rewardsDurationDays: 28,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], ETH[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0xE7d03c5E30B0037B05e713B0977C683D9fff1052'
    },
    {
      period: 6,
      stakingGenesis: 1645066800,
      rewardsDurationDays: 28,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], FIL[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0xccA7501d3750ea0aeb55097D04392D480AF46295'
    },
    {
      period: 6,
      stakingGenesis: 1645066800,
      rewardsDurationDays: 28,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], HT[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0x846EC507DacFa021cCC1d49686b5d424083ADb5B'
    },
    {
      period: 6,
      stakingGenesis: 1645066800,
      rewardsDurationDays: 28,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], UNI[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0x095Ffdcfebc3450f64CA68485621FccC7aa732ed'
    },
    {
      period: 6,
      stakingGenesis: 1645066800,
      rewardsDurationDays: 28,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], MDX[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0x9aF7Cc8B63b1FD52C4e72913B56E9017f77Ad16F'
    },
    {
      period: 6,
      stakingGenesis: 1645066800,
      rewardsDurationDays: 28,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], HBCH[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0x03AF0F32bDA5d6cBDDfD81c80D6A4df72B930E17'
    },
    {
      period: 6,
      stakingGenesis: 1645066800,
      rewardsDurationDays: 28,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], LTC[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0x52b939FCE7A72107DE432490c7c09cA27a2AD319'
    },
    {
      period: 6,
      stakingGenesis: 1645066800,
      rewardsDurationDays: 28,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], MANA[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0xd3F6A5ba3D4Fae23b23927C507d556B7422b1a77'
    },
    {
      period: 6,
      stakingGenesis: 1645066800,
      rewardsDurationDays: 28,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], DOT[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0x14d442E8F0db21135187F12F57aA586d2649A09a'
    },
    {
      period: 6,
      stakingGenesis: 1645066800,
      rewardsDurationDays: 28,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], LINK[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0xE466da31406E485b4250717E1368472228c01282'
    },
    {
      period: 5,
      stakingGenesis: 1645066800,
      rewardsDurationDays: 28,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], DAO[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0xcA691423C64fa6B24CD54e45353A236521D2C7f5'
    },
    {
      period: 5,
      stakingGenesis: 1645066800,
      rewardsDurationDays: 28,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], ETH[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0x925D975fD145a99829ea2b734492Ec6B8017e27C'
    },
    {
      period: 5,
      stakingGenesis: 1645066800,
      rewardsDurationDays: 28,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], FIL[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0x6a7b10753D853b6e44aE793406584C55669Ed505'
    },
    {
      period: 5,
      stakingGenesis: 1645066800,
      rewardsDurationDays: 28,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], HT[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0xC7D59edFE2CBbb21fFE84c9739d997cd6b139D08'
    },
    {
      period: 5,
      stakingGenesis: 1645066800,
      rewardsDurationDays: 28,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], UNI[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0x47301CEC97925F91CbeD5457300f4462A45ACB33'
    },
    {
      period: 5,
      stakingGenesis: 1645066800,
      rewardsDurationDays: 28,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], MDX[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0x4FD95D89Efb537FA72b87671541a835AdcdE3568'
    },
    {
      period: 5,
      stakingGenesis: 1645066800,
      rewardsDurationDays: 28,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], HBCH[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0xef827c4067C823E829C1053aecb7C04B3b043Bd5'
    },
    {
      period: 5,
      stakingGenesis: 1645066800,
      rewardsDurationDays: 28,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], LTC[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0xd8505972ac221736c134De156347D6E98017e015'
    },
    {
      period: 5,
      stakingGenesis: 1645066800,
      rewardsDurationDays: 28,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], MANA[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0x525576c19E81Bd6370aF036D03E07FbbE1e84FaE'
    },
    {
      period: 5,
      stakingGenesis: 1645066800,
      rewardsDurationDays: 28,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], DOT[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0xA2a18f3abf965ae839eD192fad58d3Fd7e1Eefbb'
    },
    {
      period: 5,
      stakingGenesis: 1645066800,
      rewardsDurationDays: 28,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], LINK[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0xd5cc1a949F7f70689742FE790F9A13292b5CfC35'
    },
    {
      period: 4,
      stakingGenesis: 1642215600,
      rewardsDurationDays: 28,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], DAO[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0x79438C8e9660C98845E7Fc8A136D1ff92a75F3Ec'
    },
    {
      period: 4,
      stakingGenesis: 1642215600,
      rewardsDurationDays: 28,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], ETH[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0xfE15Eb30C4f7b9a954A606BD57E4E027f63594e4'
    },
    {
      period: 4,
      stakingGenesis: 1642215600,
      rewardsDurationDays: 28,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], FIL[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0x0e5844d40c5896E349b1d8Ba152BA2978D023932'
    },
    {
      period: 4,
      stakingGenesis: 1642215600,
      rewardsDurationDays: 28,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], HT[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0xB2dAB73324e0AE818cfDDA456DECAb367Cdec924'
    },
    {
      period: 4,
      stakingGenesis: 1642215600,
      rewardsDurationDays: 28,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], UNI[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0x93C9C4b40b5551a01dbB02D7D7D05f6Ff4585e43'
    },
    {
      period: 4,
      stakingGenesis: 1642215600,
      rewardsDurationDays: 28,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], MDX[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0x29390aAcd0F32E18E6a98b84C0ac14d41c85d085'
    },
    {
      period: 4,
      stakingGenesis: 1642215600,
      rewardsDurationDays: 28,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], HBCH[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0x78F55552e0892ff4c31d04f2C14f20D3c3F1776E'
    },
    {
      period: 4,
      stakingGenesis: 1642215600,
      rewardsDurationDays: 28,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], LTC[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0x5cD637f1d277165ca3ee3fbF97c00a1f25D37a1D'
    },
    {
      period: 4,
      stakingGenesis: 1642215600,
      rewardsDurationDays: 28,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], MANA[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0x840Da5d561e59B05d7414B0d6Cf207171d73a527'
    },
    {
      period: 4,
      stakingGenesis: 1642215600,
      rewardsDurationDays: 28,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], DOT[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0xd8c904aAf8C724b4d6F1c851c6C1F3c2530D746a'
    },
    {
      period: 4,
      stakingGenesis: 1642215600,
      rewardsDurationDays: 28,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], LINK[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0x312630f2ddDe30919e39c531187f8fD7a93d3B76'
    },
    {
      period: 3,
      stakingGenesis: 1640574000,
      rewardsDurationDays: 14,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], DAO[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0x64521114F1d6cc11443A3323D62B78C1a6f219De'
    },
    {
      period: 3,
      stakingGenesis: 1640574000,
      rewardsDurationDays: 14,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], ETH[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0xCd0735E70130527A8be4B350282EfF7F7C81493F'
    },
    {
      period: 3,
      stakingGenesis: 1640574000,
      rewardsDurationDays: 14,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], FIL[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0x4CAf830A2409819Fd305db6a6ee65256ddeEFb70'
    },
    {
      period: 3,
      stakingGenesis: 1640574000,
      rewardsDurationDays: 14,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], HT[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0x064b19554Ea3129502f75ED6604CAa41A3907D50'
    },
    {
      period: 3,
      stakingGenesis: 1640574000,
      rewardsDurationDays: 14,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], UNI[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0x527a40F20a851319E98C2E054f73F96ed2840d50'
    },
    {
      period: 3,
      stakingGenesis: 1640574000,
      rewardsDurationDays: 14,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], MDX[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0x8D788f53Dd56000A12Ab22D9fAb163Bf45Ff3E04'
    },
    {
      period: 3,
      stakingGenesis: 1640574000,
      rewardsDurationDays: 14,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], HBCH[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0xf0428f4dD1748f97E04C44fd153ebE73Eb710A67'
    },
    {
      period: 3,
      stakingGenesis: 1640574000,
      rewardsDurationDays: 14,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], LTC[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0xb08F88a4979F8E1F6269394081e9C334d7337E82'
    },
    {
      period: 3,
      stakingGenesis: 1640574000,
      rewardsDurationDays: 14,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], MANA[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0x23600d396BFb9EAedBAfBAe35223f96A2fa1D143'
    },
    {
      period: 3,
      stakingGenesis: 1640574000,
      rewardsDurationDays: 14,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], DOT[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0x89Ab83a6494b910083E16E4458bCACb6FBcF9F20'
    },
    {
      period: 3,
      stakingGenesis: 1640574000,
      rewardsDurationDays: 14,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], LINK[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0x08023E64C73A7a09073c6Fe395Cb64c7628722c0'
    },
    {
      period: 2,
      stakingGenesis: 1636426800,
      rewardsDurationDays: 14,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], DAO[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0xb04161cba8501b14fF302F1800AA96453e75941c'
    },
    {
      period: 2,
      stakingGenesis: 1636426800,
      rewardsDurationDays: 14,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], ETH[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0xE296D57c683fB9A91C40C717F8426F5816C1C0D3'
    },
    {
      period: 2,
      stakingGenesis: 1636426800,
      rewardsDurationDays: 14,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], FIL[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0x605786bA93535E0Be6fb669e882569c27E6e2eE3'
    },
    {
      period: 2,
      stakingGenesis: 1636426800,
      rewardsDurationDays: 14,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], HT[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0xa0C906E72E3f72A592AbCFC1A3B471E2c4f2E0E7'
    },
    {
      period: 2,
      stakingGenesis: 1636426800,
      rewardsDurationDays: 14,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], UNI[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0x631527D7E2A9212f7D0528203a9d9491F1a7f19C'
    },
    {
      period: 2,
      stakingGenesis: 1636426800,
      rewardsDurationDays: 14,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], MDX[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0x8171E1E9673550899163e51a6219687BDbaae6C0'
    },
    {
      period: 2,
      stakingGenesis: 1636426800,
      rewardsDurationDays: 14,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], HBCH[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0xb235E65357bEF0E51dF2028E6e5dc82C1Ef059a0'
    },
    {
      period: 2,
      stakingGenesis: 1636426800,
      rewardsDurationDays: 14,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], LTC[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0xbbeb7F75A7C514f95f4215C17795dE017F891a2c'
    },
    {
      period: 1,
      stakingGenesis: 1636426800,
      rewardsDurationDays: 14,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], DAO[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0xAe7184fcCCFc096f5F48Fffe384Cce8433FCE0E0'
    },
    {
      period: 1,
      stakingGenesis: 1636426800,
      rewardsDurationDays: 14,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], ETH[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0x5E03E4b9402f4b8Dd4C983b87bA06A86e6aB4551'
    },
    {
      period: 1,
      stakingGenesis: 1636426800,
      rewardsDurationDays: 14,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], FIL[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0xAA4d98498DDb57eDb5C631ad96af95206751603d'
    },
    {
      period: 1,
      stakingGenesis: 1636426800,
      rewardsDurationDays: 14,
      rewardsTokenSymbol: 'DAO',
      tokens: [USDT[ChainId.HECO_MAINNET], HT[ChainId.HECO_MAINNET]],
      stakingRewardAddress: '0xD723E27DCC250914a4FFcbEce231B575F784bB0c'
    }
  ]
}

export interface StakingInfo {
  period: number
  stakingGenesis: number
  rewardsDurationDays: number
  rewardsTokenSymbol: string
  // the address of the reward contract
  stakingRewardAddress: string
  // the tokens involved in this pair
  tokens: [Token, Token]
  // the amount of token currently staked, or undefined if no account
  stakedAmount: TokenAmount
  // the amount of reward token earned by the active account, or undefined if no account
  earnedAmount: TokenAmount
  // the total amount of token staked in the contract
  totalStakedAmount: TokenAmount
  // the amount of token distributed per second to all LPs, constant
  totalRewardRate: TokenAmount
  // the current amount of token distributed to the active account per second.
  // equivalent to percent of total supply * reward rate
  rewardRate: TokenAmount
  // when the period ends
  periodFinish: Date | undefined
  // calculates a hypothetical amount of token distributed to the active account per second.
  getHypotheticalRewardRate: (
    stakedAmount: TokenAmount,
    totalStakedAmount: TokenAmount,
    totalRewardRate: TokenAmount
  ) => TokenAmount
}

// gets the staking info from the network for the active chain id
export function useStakingInfo(pairToFilterBy?: Pair | null): StakingInfo[] {
  const { chainId, account } = useActiveWeb3React()

  // TODO: is display staking rewards info list for specical address
  // const whiteList = [
  //   '0x70FBf5E00a67aAaD3146cE4B017CbbaB4202a7CC',
  //   '0x415854D1459755Fa8ef1Bb1c723434C2DBcB8798',
  //   '0x7d3dE024dEB70741c6Dfa0FaD57775A47C227AE2',
  //   '0x3DdcFc89B4DD2b33d9a8Ca0F60180527E9810D4B',
  //   '0x87363b840fDfbd53dA62692214d8B9255d737652',
  //   '0xE603dF2377bf9cF35Fb4bB5d0cD8D48f5b041F49',
  //   '0x9b1d0c9c1aE96011776e6786b4Efe884665918D2'
  // ]
  // const inWhiteList = whiteList.filter(item => item === account)
  // if (inWhiteList.length <= 0) {
  //   STAKING_REWARDS_INFO[chainId ? chainId : 128] = []
  // }

  const info = useMemo(
    () =>
      chainId
        ? STAKING_REWARDS_INFO[chainId]?.filter(stakingRewardInfo =>
            pairToFilterBy === undefined
              ? true
              : pairToFilterBy === null
              ? false
              : pairToFilterBy.involvesToken(stakingRewardInfo.tokens[0]) &&
                pairToFilterBy.involvesToken(stakingRewardInfo.tokens[1])
          ) ?? []
        : [],
    [chainId, pairToFilterBy]
  )

  const uni = chainId ? DAO[chainId] : undefined

  const rewardsAddresses = useMemo(() => info.map(({ stakingRewardAddress }) => stakingRewardAddress), [info])

  const accountArg = useMemo(() => [account ?? undefined], [account])

  // get all the info from the staking rewards contracts
  const balances = useMultipleContractSingleData(rewardsAddresses, STAKING_REWARDS_INTERFACE, 'balanceOf', accountArg)
  const earnedAmounts = useMultipleContractSingleData(rewardsAddresses, STAKING_REWARDS_INTERFACE, 'earned', accountArg)
  const totalSupplies = useMultipleContractSingleData(rewardsAddresses, STAKING_REWARDS_INTERFACE, 'totalSupply')

  // tokens per second, constants
  const rewardRates = useMultipleContractSingleData(
    rewardsAddresses,
    STAKING_REWARDS_INTERFACE,
    'rewardRate',
    undefined,
    NEVER_RELOAD
  )
  const periodFinishes = useMultipleContractSingleData(
    rewardsAddresses,
    STAKING_REWARDS_INTERFACE,
    'periodFinish',
    undefined,
    NEVER_RELOAD
  )

  return useMemo(() => {
    if (!chainId || !uni) return []

    return rewardsAddresses.reduce<StakingInfo[]>((memo, rewardsAddress, index) => {
      // these two are dependent on account
      const balanceState = balances[index]
      const earnedAmountState = earnedAmounts[index]

      // these get fetched regardless of account
      const totalSupplyState = totalSupplies[index]
      const rewardRateState = rewardRates[index]
      const periodFinishState = periodFinishes[index]

      if (
        // these may be undefined if not logged in
        !balanceState?.loading &&
        !earnedAmountState?.loading &&
        // always need these
        totalSupplyState &&
        !totalSupplyState.loading &&
        rewardRateState &&
        !rewardRateState.loading &&
        periodFinishState &&
        !periodFinishState.loading
      ) {
        if (
          balanceState?.error ||
          earnedAmountState?.error ||
          totalSupplyState.error ||
          rewardRateState.error ||
          periodFinishState.error
        ) {
          console.error('Failed to load staking rewards info')
          return memo
        }

        // get the LP token
        const tokens = info[index].tokens
        const dummyPair = new Pair(new TokenAmount(tokens[0], '0'), new TokenAmount(tokens[1], '0'))

        // check for account, if no account set to 0

        const stakedAmount = new TokenAmount(dummyPair.liquidityToken, JSBI.BigInt(balanceState?.result?.[0] ?? 0))
        const totalStakedAmount = new TokenAmount(dummyPair.liquidityToken, JSBI.BigInt(totalSupplyState.result?.[0]))
        const totalRewardRate = new TokenAmount(uni, JSBI.BigInt(rewardRateState.result?.[0]))

        const getHypotheticalRewardRate = (
          stakedAmount: TokenAmount,
          totalStakedAmount: TokenAmount,
          totalRewardRate: TokenAmount
        ): TokenAmount => {
          return new TokenAmount(
            uni,
            JSBI.greaterThan(totalStakedAmount.raw, JSBI.BigInt(0))
              ? JSBI.divide(JSBI.multiply(totalRewardRate.raw, stakedAmount.raw), totalStakedAmount.raw)
              : JSBI.BigInt(0)
          )
        }

        const individualRewardRate = getHypotheticalRewardRate(stakedAmount, totalStakedAmount, totalRewardRate)

        const periodFinishMs = periodFinishState.result?.[0]?.mul(1000)?.toNumber()

        const isZeroOfTotalStakedAmount = JSBI.greaterThan(totalStakedAmount.raw, JSBI.BigInt(0))
        const isZeroOfStakedAmount = JSBI.greaterThan(stakedAmount.raw, JSBI.BigInt(0))

        if (isZeroOfTotalStakedAmount && isZeroOfStakedAmount) {
          memo.push({
            period: info[index].period,
            stakingGenesis: info[index].stakingGenesis,
            rewardsDurationDays: info[index].rewardsDurationDays,
            rewardsTokenSymbol: info[index].rewardsTokenSymbol,
            stakingRewardAddress: rewardsAddress,
            tokens: info[index].tokens,
            periodFinish: periodFinishMs > 0 ? new Date(periodFinishMs) : undefined,
            earnedAmount: new TokenAmount(uni, JSBI.BigInt(earnedAmountState?.result?.[0] ?? 0)),
            rewardRate: individualRewardRate,
            totalRewardRate: totalRewardRate,
            stakedAmount: stakedAmount,
            totalStakedAmount: totalStakedAmount,
            getHypotheticalRewardRate
          })
        }
      }
      return memo
    }, [])
  }, [balances, chainId, earnedAmounts, info, periodFinishes, rewardRates, rewardsAddresses, totalSupplies, uni])
}

export function useTotalUniEarned(): TokenAmount | undefined {
  const { chainId } = useActiveWeb3React()
  const uni = chainId ? DAO[chainId] : undefined
  const stakingInfos = useStakingInfo()

  return useMemo(() => {
    if (!uni) return undefined
    return (
      stakingInfos?.reduce(
        (accumulator, stakingInfo) => accumulator.add(stakingInfo.earnedAmount),
        new TokenAmount(uni, '0')
      ) ?? new TokenAmount(uni, '0')
    )
  }, [stakingInfos, uni])
}

// based on typed value
export function useDerivedStakeInfo(
  typedValue: string,
  stakingToken: Token,
  userLiquidityUnstaked: TokenAmount | undefined
): {
  parsedAmount?: CurrencyAmount
  error?: string
} {
  const { t } = useTranslation()
  const { account } = useActiveWeb3React()

  const parsedInput: CurrencyAmount | undefined = tryParseAmount(typedValue, stakingToken)

  const parsedAmount =
    parsedInput && userLiquidityUnstaked && JSBI.lessThanOrEqual(parsedInput.raw, userLiquidityUnstaked.raw)
      ? parsedInput
      : undefined

  let error: string | undefined
  if (!account) {
    error = t('Connect Wallet')
  }
  if (!parsedAmount) {
    error = error ?? t('Enter an amount')
  }

  return {
    parsedAmount,
    error
  }
}

// based on typed value
export function useDerivedUnstakeInfo(
  typedValue: string,
  stakingAmount: TokenAmount
): {
  parsedAmount?: CurrencyAmount
  error?: string
} {
  const { t } = useTranslation()
  const { account } = useActiveWeb3React()

  const parsedInput: CurrencyAmount | undefined = tryParseAmount(typedValue, stakingAmount.token)

  const parsedAmount = parsedInput && JSBI.lessThanOrEqual(parsedInput.raw, stakingAmount.raw) ? parsedInput : undefined

  let error: string | undefined
  if (!account) {
    error = t('Connect Wallet')
  }
  if (!parsedAmount) {
    error = error ?? t('Enter an amount')
  }

  return {
    parsedAmount,
    error
  }
}
