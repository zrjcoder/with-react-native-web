/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect } from 'react'
import { Box } from 'components'
import { MOBILE_URL, TOKEN } from 'libs'

export const MonitorInspectMap = ({ token, points, onPointPress }) => {
  const mapRef = useRef(null)

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data) {
        const { code, data } = JSON.parse(event.data)
        switch (code) {
          case 'mapLoaded':
            updateMapPoints()
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
  }, [1])

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
        src={`${MOBILE_URL}?accessToken=${TOKEN}`}
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="WebView"
        onLoad={updateMapPoints}
      />
    </Box>
  )
}
