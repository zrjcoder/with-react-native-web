/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect } from 'react'
import { Box } from 'components'
import { MOBILE_URL, useUser } from 'libs'

export const MonitorInspectMap = ({ points, onPointPress }) => {
  const mapRef = useRef(null)
  const { user } = useUser()

  const mapUrl = `${MOBILE_URL}?accessToken=${user?.accessToken}`

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data) {
        const { code, data } = JSON.parse(event.data)
        switch (code) {
          case 'mapLoaded':
            updateMapPoints(points)
            break
          case 'facilityPointClick':
            onPointPress(data.id)
            break
          default:
            break
        }
      }
    }

    window.addEventListener('message', handleMessage)

    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [])

  const updateMapPoints = () => {
    if (points?.length > 0) {
      const mapPoints = points.map((item) => ({
        id: item?.inspectionFacilityId,
        type: item.status,
        ...item,
      }))

      mapRef.current?.contentWindow?.postMessage(
        JSON.stringify({ code: 'showFacilityPoints', data: mapPoints }),
        '*'
      )
    }
  }

  return (
    <Box flex={1}>
      <iframe
        ref={mapRef}
        src={mapUrl}
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="WebView"
        onLoad={updateMapPoints}
      />
    </Box>
  )
}
