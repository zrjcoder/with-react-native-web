import { useState, useEffect, useRef } from 'react'
// import Geolocation from '@react-native-community/geolocation'

export const useDistanceTracker = () => {
  const [status, setStatus] = useState('stopped')
  const [distance, setDistance] = useState(0)
  const [elapsedTime, setElapsedTime] = useState(0)
  const [space, setSpace] = useState([])
  const watchIdRef = useRef(null)
  const lastPositionRef = useRef(null)

  const toggleTracking = () => {
    if (status === 'tracking') {
      setStatus('paused')
      // Geolocation.clearWatch(watchIdRef.current)
    } else {
      if (status === 'paused') {
        startWatch()
      } else {
        setElapsedTime(0)
        setDistance(0)
        startWatch()
      }
      setStatus('tracking')
    }
  }

  const startWatch = () => {
    // watchIdRef.current = Geolocation.watchPosition(
    //   (position) => {
    //     space.push({
    //       latitude: position?.coords?.latitude,
    //       longitude: position?.coords?.longitude,
    //     })
    //     setSpace(space)
    //     if (lastPositionRef.current) {
    //       setDistance(
    //         (prev) =>
    //           prev +
    //           calcDistance(lastPositionRef.current.coords, position.coords)
    //       )
    //     }
    //     lastPositionRef.current = position
    //   },
    //   () => {},
    //   { enableHighAccuracy: true, distanceFilter: 10 }
    // )
  }

  const stopTracking = () => {
    setStatus('stopped')
    // Geolocation.clearWatch(watchIdRef.current)
    setElapsedTime(0)
    setDistance(0)
  }

  useEffect(() => {
    let interval
    if (status === 'tracking') {
      interval = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [status])

  const calcDistance = (coords1, coords2) => {
    const toRad = (value) => (value * Math.PI) / 180
    const R = 6371
    const dLat = toRad(coords2.latitude - coords1.latitude)
    const dLon = toRad(coords2.longitude - coords1.longitude)
    const lat1 = toRad(coords1.latitude)
    const lat2 = toRad(coords2.latitude)

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    const distance = R * c * 1000
    const roundedDistance = Number(distance.toFixed(0) ?? 0)
    return roundedDistance
  }

  return {
    toggleTracking,
    stopTracking,
    elapsedTime,
    distance,
    status,
    space,
  }
}
