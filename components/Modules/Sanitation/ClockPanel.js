import React from 'react'
import { Box, Card, Icons, Row, Text } from 'components'
import moment from 'moment'

export function SanitationClockPanel({
  startClockTime,
  endClockTime,
  scheduleTime,
}) {
  const [timeInfo, setTimeInfo] = React.useState({
    startWorkTime: '',
    endWorkTime: '',
  })

  React.useEffect(() => {
    initWorkTime()
  }, [scheduleTime])

  return (
    <Box marginHorizontal={12}>
      <Card>
        <Row>
          <Card flex={1} padding={12} backgroundColor={'#F6F6F6'}>
            <Text>上班{timeInfo?.startWorkTime}</Text>
            <PunchClockDesc time={startClockTime} />
          </Card>

          <Box width={10} />

          <Card flex={1} padding={12} backgroundColor={'#F6F6F6'}>
            <Text> 下班{timeInfo?.endWorkTime}</Text>
            <PunchClockDesc time={endClockTime} />
          </Card>
        </Row>
      </Card>
    </Box>
  )

  function initWorkTime() {
    try {
      if (scheduleTime) {
        const startWorkTime = moment(
          scheduleTime?.workUpTime?.split(' ')[1],
          'HH:mm:ss'
        )
        const endWorkTime = moment(
          scheduleTime?.workDownTime?.split(' ')[1],
          'HH:mm:ss'
        )

        setTimeInfo({ startWorkTime, endWorkTime })
      }
    } catch (error) {
      setTimeInfo({ startWorkTime: '', endWorkTime: '' })
    }
  }
}

function PunchClockDesc({ time }) {
  const isPunchClock = !!time

  return (
    <Row alignItems={'center'}>
      {Icons[isPunchClock ? 'point1' : 'point3']}
      <Box width={6} />
      {isPunchClock ? (
        <Text color="#666666" fontWeight={'400'}>
          {moment(time).format('HH:mm')}
          {'  '} 已打卡
        </Text>
      ) : (
        <Text color="#666666" fontWeight={'400'}>
          未打卡
        </Text>
      )}
    </Row>
  )
}
