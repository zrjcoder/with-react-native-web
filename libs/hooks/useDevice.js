import { useEffect, useState } from 'react'
import { Dimensions } from 'react-native-web'

export function useDevice() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const windowWidth = Dimensions.get('window').width
    setWidth(windowWidth > 500 ? 500 : windowWidth)
  }, [])

  return {
    width,
  }
}
