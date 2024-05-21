import React from 'react'
import { Column, Text } from 'components'

export function SanitationCurrentTimer() {
  const [currentTime, setCurrentTime] = React.useState(new Date())

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const formatDate = (date) => {
    const year = date.getFullYear()
    const month = `0${date.getMonth() + 1}`.slice(-2)
    const day = `0${date.getDate()}`.slice(-2)
    return `${year}-${month}-${day}`
  }

  const formatTime = (date) => {
    const hours = `0${date.getHours()}`.slice(-2)
    const minutes = `0${date.getMinutes()}`.slice(-2)
    const seconds = `0${date.getSeconds()}`.slice(-2)
    return `${hours}:${minutes}:${seconds}`
  }

  return (
    <Column alignItems="center" padding={35}>
      <Text fontSize={16} fontWeight="bold">
        {formatDate(currentTime)}
      </Text>
      <Text fontSize={32} fontWeight="bold" marginTop={10}>
        {formatTime(currentTime)}
      </Text>
    </Column>
  )
}
