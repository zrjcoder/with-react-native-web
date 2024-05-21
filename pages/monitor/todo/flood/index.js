import { useState, useRef } from 'react'
import {
  Box,
  Card,
  Column,
  Container,
  Divide,
  Picker,
  Text,
  TextAreaInput,
} from 'components'
import { FormClockIn, MonitorFloodCard } from 'components/Modules'
import {
  Header,
  SAVE_FLOOD_INFO,
  uploadImages,
  useLocation,
  useMutation,
} from 'libs'
import { useRouter } from 'next/router'

const MonitorFlood = () => {
  const router = useRouter()
  const data = router.query

  const [feedback, setFeedback] = useState('')
  const { location } = useLocation()
  const mediaRef = useRef()

  const [save, { loading }] = useMutation(SAVE_FLOOD_INFO)

  return (
    <Container>
      <Header title={'防汛任务打卡'} paddingBottom={6} />

      <Column margin={12} flex={1}>
        <MonitorFloodCard info={data} />

        <Box size={12} />
        <Card title={'任务反馈'}>
          <Text style={{ marginBottom: 12 }}>反馈内容</Text>
          <TextAreaInput rows={6} onChange={setFeedback} />
          <Divide vertical={12} />

          <Text style={{ marginBottom: 12 }}>照片</Text>
          <Picker ref={mediaRef} placeholder={'请上传最少一张图片！'} />
        </Card>

        <Box margin={48}>
          <FormClockIn
            loading={loading}
            title={'到岗打卡'}
            latitude={data?.coordY}
            longitude={data?.coordX}
            onPress={handleSubmit}
          />
        </Box>
        <Box size={24} />
      </Column>
    </Container>
  )

  async function handleSubmit() {
    const medias = mediaRef.current.getMedias()

    const result = await save({
      taskId: data.taskId,
      userName: data.floodPersonnelName,
      userId: data.floodPersonnelId,
      punchX: location?.longitude,
      punchY: location?.latitude,
      content: feedback,
    })

    if (result?.recordId) {
      router.back()
      uploadImages(medias, {
        id: result?.recordId,
        code: '2',
        value: '预警任务多媒体',
      })
    }
  }
}

export default MonitorFlood
