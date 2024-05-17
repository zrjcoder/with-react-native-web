import React from 'react'
import moment from 'moment'

import { Container } from 'components'
import {
  getPunchClockInfo,
  getPunchRange,
  getScheduleTask,
  Header,
  SAVE_CLOCK_INFO,
  useMutation,
  usePunchClock,
} from 'libs'
import {
  SanitationClockPanel,
  SanitationPersonInfo,
  SanitationCurrentTimer,
  FormClockIn,
} from 'components/Modules'

const SanitationPunch = ({ detail, scheduleTask, range, serverTime }) => {
  const { punchClockInfo, withInTimeRange } = usePunchClock()

  const [savePunchClockInfo, { loading }] = useMutation(SAVE_CLOCK_INFO)

  React.useEffect(() => {
    if (scheduleTask.length > 0) {
      withInTimeRange(
        () => {},
        () => {},
        formatWorkTime()
      )
    }
  }, [scheduleTask])

  return (
    <Container>
      <Header
        background={'transparent'}
        borderBottomWidth={0}
        title={'环卫公厕打卡'}
      />

      <SanitationPersonInfo />

      <SanitationClockPanel
        startClockTime={detail?.punchUpTime}
        endClockTime={detail?.punchDownTime}
        scheduleTime={scheduleTask.length > 0 ? scheduleTask[0] : null}
      />

      <SanitationCurrentTimer serverTime={serverTime} />

      <FormClockIn
        loading={loading}
        isLimited={false}
        maxDistance={999999}
        title={
          !punchClockInfo?.description
            ? ' 无法打卡'
            : punchClockInfo?.description
        }
        onPress={handlePunchClock}
      />
    </Container>
  )

  async function handlePunchClock() {
    // if (scheduleTask.length === 0) {
    //   Toast.showError('暂无打卡任务！')
    //   return
    // }

    await withInTimeRange(
      async () => {
        await savePunchClockInfo({})
        onSuccess()
      },
      async () => {
        await savePunchClockInfo({
          punchId: detail?.punchId,
        })
        onSuccess()
      },
      formatWorkTime()
    )
  }

  function formatWorkTime() {
    try {
      const startTime = moment(
        scheduleTask[0]?.workUpTime?.split(' ')[1],
        'HH:mm:ss'
      )
      const endTime = moment(
        scheduleTask[0]?.workDownTime?.split(' ')[1],
        'HH:mm:ss'
      )

      return { startTime, endTime }
    } catch (error) {
      return { startTime: null, endTime: null }
    }
  }

  function onSuccess() {
    // TODO
  }
}

export default SanitationPunch

export const getServerSideProps = async () => {
  const detail = (await getPunchClockInfo())?.result
  const records =
    (
      await getScheduleTask({
        userName: '市政监督员01',
        scheduleTime: moment().format('YYYY-MM-DD'),
      })
    )?.result?.records ?? []
  const range = (await getPunchRange())?.result

  return {
    props: {
      detail,
      scheduleTask: records,
      range,
      serverTime: new Date().toISOString(),
    },
  }
}
