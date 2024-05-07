import React from 'react'
import { Box, Column, Icons, Indictor, Row, Text } from 'components'
import { ActivityIndicator, TouchableOpacity } from 'react-native-web'

const config = {
  true: {
    colors: 'linear-gradient(135deg, #8CBAFF 0%, #0066FF 100%)',
    content: '您已在任务点位范围',
  },
  false: {
    colors: 'linear-gradient(135deg, #D1D1D1 0%, #B2B2B2 100%)',
    content: '您不在任务点位范围',
  },
}

export function FormClockIn({
  title,
  loading = false,
  onPress = () => {},
  isClockIn,
  isLimited = false,
  isShowDesc = true,
  latitude = 30.7536,
  longitude = 111.215,
  maxDistance = 500,
}) {
  const [isWith, setIsWith] = React.useState(!isLimited)

  React.useEffect(() => {
    // TODO 获取当前位置
  }, [isWith, latitude, longitude])

  return (
    <Column alignItems="center">
      <TouchableOpacity onPress={() => handleClick()}>
        <Box
          size={113}
          borderRadius={80}
          background={config[isClockIn || isWith].colors}
          justifyContent={'center'}>
          {loading ? (
            <ActivityIndicator size="small" color="#FFFFFF" />
          ) : (
            <Text
              fontSize={18}
              color="#FFFFFF"
              style={{ alignItems: 'center' }}>
              无法打卡
            </Text>
          )}

          <Box
            filter="blur(20px)"
            size={113}
            backgroundColor="rgba(0, 102, 255, 0.3)"
            position="absolute"
            zIndex={-1}
            top={12}
            borderRadius={80}
          />
        </Box>
      </TouchableOpacity>

      {isShowDesc && (
        <Row alignItems="center" marginTop={16}>
          {Icons['checked']}
          <Box width={4} />
          <Text fontSize={14} color="#666666">
            您已在任务点范围内
          </Text>
        </Row>
      )}
    </Column>
  )

  function handleClick() {
    if (isWith) {
      onPress()
    } else {
      alert('不在任务点')
    }
  }
}

function isWithinMeters(
  latitude1,
  longitude1,
  targetLatitude,
  targetLongitude,
  maxDistance = 100
) {
  function toRadians(degrees) {
    return (degrees * Math.PI) / 180
  }

  const R = 6371e3
  const lat1 = toRadians(latitude1)
  const lat2 = toRadians(targetLatitude)
  const deltaLat = toRadians(targetLatitude - latitude1)
  const deltaLon = toRadians(targetLongitude - longitude1)

  const a =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(lat1) *
      Math.cos(lat2) *
      Math.sin(deltaLon / 2) *
      Math.sin(deltaLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  const distance = R * c
  return distance <= maxDistance
}
