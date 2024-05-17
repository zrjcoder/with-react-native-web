import React, { useState, useEffect, useRef } from 'react'
import moment from 'moment'
import { StyleSheet, Text, View } from 'react-native'

const Timer = ({ endTime, onExpired = () => {}, status = 0 }) => {
  // status 0进行中 1已完成 2已过期
  const countDown = calcCountDown()
  let isExpired = false
  if (countDown === '已过期') {
    isExpired = true
  }

  const [time, setTime] = useState(countDown)

  useInterval(() => {
    const countDown = calcCountDown()
    setTime(countDown)
  }, 1000)

  if (!time) {
    return <View />
  }

  return (
    <View style={[styles.container, isExpired ? styles.expired : {}]}>
      <Text style={[styles.textColor, isExpired ? styles.expiredText : {}]}>
        {time}
      </Text>
    </View>
  )

  function calcCountDown() {
    const now = moment()
    const end = moment(endTime)

    const timeDiff = end.diff(now, 'seconds')

    if (timeDiff <= 0) {
      onExpired()
      return status == 1 ? '已完成' : '已过期'
    }

    const d = Math.floor(timeDiff / 86400)

    let h = Math.floor((timeDiff - 86400 * d) / 3600)
    h = h < 10 ? `0${h}` : h

    let m = Math.floor(((timeDiff - 86400 * d) % 3600) / 60)
    m = m < 10 ? `0${m}` : m

    let s = ((timeDiff - 86400 * d) % 3600) % 60
    s = s < 10 ? `0${s}` : s

    return `${d}天${h}时${m}分${s}秒`
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    backgroundColor: 'rgba(11,109,255,0.1)',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  expired: {
    backgroundColor: 'rgba(245, 34, 45, 0.8)',
  },
  textColor: {
    textAlign: 'center',
    color: '#0B6DFF',
  },
  expiredText: {
    color: 'white',
  },
})

function useInterval(callback, delay) {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    if (delay !== null) {
      const id = setInterval(() => {
        savedCallback.current()
      }, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

export { Timer }
