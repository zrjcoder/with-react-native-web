import React from 'react'
import moment from 'moment'

import { Container } from 'components'
import {
  GET_PUNCH_RANGE,
  GET_SCHEDULE_TASK,
  GET_TOILET_LIST,
  Header,
  SAVE_CLOCK_INFO,
  useMutation,
  usePunchClock,
  useQuery,
  useUser,
} from 'libs'
import {
  SanitationClockPanel,
  SanitationPersonInfo,
  SanitationCurrentTimer,
  FormClockIn,
} from 'components/Modules'

const SanitationPunch = () => {
  const { punchClockInfo, withInTimeRange } = usePunchClock()
  const { user } = useUser()

  const { data: detail } = useQuery(GET_TOILET_LIST)
  const { data: range } = useQuery(GET_PUNCH_RANGE)

  const { data: scheduleData } = useQuery(GET_SCHEDULE_TASK, {
    userName: user?.userName,
    scheduleTime: moment().format('YYYY-MM-DD'),
  })
  const scheduleTask = scheduleData?.records ?? []

  const [savePunchClockInfo, { loading }] = useMutation(SAVE_CLOCK_INFO)

  React.useEffect(() => {
    if (scheduleTask.records?.length > 0) {
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

      <SanitationCurrentTimer />

      <FormClockIn
        loading={loading}
        isLimited={false}
        maxDistance={range}
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
