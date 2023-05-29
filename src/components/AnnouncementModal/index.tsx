import React from 'react'
import styled from 'styled-components'
import Modal from '../Modal'
import { Text } from 'rebass'
import { CloseIcon } from '../../theme/components'
import { RowBetween } from '../Row'
import { AutoColumn } from '../Column'
import { useAnnouncementInfoToggle, useAnnouncementInfoVisible } from '../../state/announcement/hooks'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

const Wrapper = styled.div`
  width: 100%;
  max-width: 420px;
  overflow-y: auto;
`
const Section = styled(AutoColumn)`
  padding: 24px;
`

// const StyledLink = styled.a`
//   text-decoration: none;
//   cursor: pointer;
//   color: ${({ theme }) => theme.primary1};
//   font-weight: 500;

//   :hover {
//     text-decoration: underline;
//   }

//   :focus {
//     outline: none;
//     text-decoration: underline;
//   }

//   :active {
//     text-decoration: none;
//   }
// `

function ConfirmationContent({ onDismiss }: { onDismiss: () => void }) {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <Section>
        <RowBetween>
          <Text fontWeight={500} fontSize={16}>
            {t('Announcement')}
          </Text>
          <CloseIcon onClick={onDismiss} />
        </RowBetween>
        <AutoColumn gap="auto" justify={'start'}>
          <Text
            fontWeight={500}
            fontSize={14}
            margin={10}
            color={'red'}
            display={i18next.language === 'en' ? 'none' : 'normal'}
          >
            {t('Kind tips')}
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('tips-1')}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('tips-2')}
            </Text>
          </Text>
        </AutoColumn>
        <AutoColumn gap="auto" justify={'start'}>
          <Text fontWeight={500} fontSize={14} margin={10}>
            {t('Heco node notice')}
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t(
                '1. The planets/stars staked in the first 6 periods can still be staked for an additional year with the original wallet address and LP amount. This will maintain the original node identity. Those who do not stake will not be able to continue holding the node identity. This benefit is not available for those who staked after the first 6 periods.'
              )}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t(
                '2. On January 1, 2023, at 11#58;00 AM, the original nodes will expire and the re-staking function will be available for 5 months. The final deadline is May 31, 2023.'
              )}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t(
                '3. The profit rate is synchronized with BSC, and the staking amount is the total of the first 6 periods. Excessive staking is not allowed.'
              )}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t(
                '4. After expiration, LP tokens must be retrieved from the previous staking page and re-staked in the new period. LP tokens that have been released multiple times can be staked multiple times.'
              )}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t(
                '5. After staking is opened, node identities will be synchronized with BSC once a week. Therefore, it will take about a week to see the node identity after staking.'
              )}
            </Text>
          </Text>
          {/* <Text fontWeight={500} fontSize={14} margin={10}>
            {t('2, Task 6.')}
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t(
                'Starting with the 5th period of arithmetic and competitive mining, perform task 6#58; reward the number of new nodes within the team according to the team of node identity wallet address (except for existing Genesis and seed nodes.)'
              )}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t(
                'Task 6 rewards only pledged 1-year planets and stars, and those still unpledged are automatically counted as rewards in the next period after pledging. If you need to unlock mission 6, please pledge as soon as possible during the node pledge period, missing the pledge period will not count towards the mission 6 reward.'
              )}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('Collection address 1.')}{' '}
              <StyledLink href={'https://www.daoswap.cc/task-6'}>https://www.daoswap.cc/task-6</StyledLink>
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('Collection address 2.')}{' '}
              <StyledLink href={'https://bsc.www.daoswap.cc/task-6'}>https://bsc.www.daoswap.cc/task-6</StyledLink>
            </Text>
          </Text>
          <Text fontWeight={500} fontSize={14} margin={10} display={i18next.language === 'en' ? 'none' : 'normal'}>
            {t('3, Genesis Node Task 8.')}
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('task8-intro')}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('task8-1')}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('task8-2')}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('task8-3')}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('task8-4')}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('task8-5')}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('task8-6')}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('task8-7')}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('task8-8')}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('task8-9')}
            </Text>
          </Text> */}
        </AutoColumn>
      </Section>
    </Wrapper>
  )
}

export default function AnnouncementModal() {
  const toggleAnnouncementInfo = useAnnouncementInfoToggle()
  const showAnnouncementInfo = useAnnouncementInfoVisible()

  return (
    <Modal isOpen={!showAnnouncementInfo} onDismiss={toggleAnnouncementInfo} maxHeight={90}>
      <ConfirmationContent onDismiss={toggleAnnouncementInfo} />
    </Modal>
  )
}
