/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'

export const isAndroid = () => {
  try {
    return !!window?.cci
  } catch {
    return false
  }
}

export function useLocation() {
  const [location, setLocation] = useState({})

  useEffect(() => {
    getLocation()
  }, [])

  return {
    location,
    getLocation,
  }

  function getLocation() {
    if (isAndroid()) {
      window?.cci?.getLocation({ type: 'wgs84' }, (location) => {
        setLocation(location)
      })
    } else {
      navigator.geolocation.getCurrentPosition((location) => {
        setLocation(location?.coords ?? {})
      })
    }
  }
}
