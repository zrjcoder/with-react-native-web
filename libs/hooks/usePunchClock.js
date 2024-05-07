import moment from 'moment'
import { useEffect, useState } from 'react'

export function usePunchClock(
  { startTime, endTime } = {
    startTime: null,
    endTime: null,
  }
) {
  const [punchClockInfo, setPunchClockInfo] = useState({
    description: '',
  })

  useEffect(() => {
    if (startTime && endTime) {
      withInTimeRange()
    }
  }, [])

  async function withInTimeRange(
    handleStartWork = () => {},
    handleEndWork = () => {},
    scheduleTime = {}
  ) {
    const nowTime = moment()
    const formatNowTime = moment().format('YYYY-MM-DD HH:mm:ss')

    if (nowTime.isBefore(scheduleTime?.startTime ?? startTime)) {
      setPunchClockInfo({ description: '上班打卡' })
      await handleStartWork(formatNowTime)
    } else if (nowTime.isAfter(scheduleTime?.endTime ?? endTime)) {
      setPunchClockInfo({ description: '下班打卡' })
      await handleEndWork(formatNowTime)
    } else {
      setPunchClockInfo({ description: '无法打卡' })
      alert('不在打卡时间范围内')
    }
  }

  return {
    punchClockInfo,
    withInTimeRange,
  }
}
