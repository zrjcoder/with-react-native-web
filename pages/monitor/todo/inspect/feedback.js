import { useState, useRef } from 'react'
import {
  Box,
  Card,
  Column,
  Container,
  Icon,
  Picker,
  Row,
  Text,
  TextAreaInput,
  Divide,
} from 'components'
import {
  Header,
  SAVE_FACILITY_INFO,
  uploadImages,
  useLocation,
  useMutation,
} from 'libs'
import { useRouter } from 'next/router'
import { FormClockIn } from 'components/Modules'
import moment from 'moment'

const MonitorInspectFeedback = () => {
  const router = useRouter()
  const params = router.query

  const [save, { loading }] = useMutation(SAVE_FACILITY_INFO)
  const { location } = useLocation()
  const mediaRef = useRef()

  const [feedback, setFeedback] = useState('')

  return (
    <Container>
      <Header title={'巡检任务详情'} paddingBottom={6} />

      <Column padding={12}>
        <CardInfo info={params} />

        <Box size={12} />
        <Card title={'任务反馈'}>
          <Text style={{ marginBottom: 12 }}>反馈内容</Text>
          <TextAreaInput rows={6} onChange={setFeedback} />
          <Divide vertical={12} />

          <Text style={{ marginBottom: 12 }}>照片</Text>
          <Picker ref={mediaRef} placeholder={'请上传最少一张图片！'} />
        </Card>
      </Column>

      <Box marginTop={48}>
        <FormClockIn
          loading={loading}
          title={'到岗打卡'}
          latitude={params.coordY}
          longitude={params.coordX}
          onPress={handleSubmit}
        />
        <Box size={24} />
      </Box>
    </Container>
  )

  async function handleSubmit() {
    const medias = mediaRef.current.getMedias()

    const { id } = await save({
      taskId: params.taskId,
      facilityId: params.inspectionFacilityId,
      facilityType: params.facilityType,
      longitude: location?.longitude,
      latitude: location?.latitude,
      records: feedback,
      upTime: moment().format('YYYY-MM-DDTHH:mm:ss'),
    })

    if (id) {
      router.back()
      uploadImages(medias, {
        id,
        code: '2',
        value: '巡检任务多媒体',
      })
    }
  }
}

function CardInfo({ info }) {
  return (
    <Card>
      <Row justifyContent="space-between">
        <Row alignItems="center">
          <Icon source={'/image/facility.png'} size={40} />
          <Box size={12} />
          <Column>
            <Text fontSize={16} fontWeight="bold">
              {info?.inspectionFacility}
            </Text>
            <Text color="#666666">当前巡检设施</Text>
          </Column>
        </Row>

        <Row></Row>
      </Row>
    </Card>
  )
}

export default MonitorInspectFeedback
