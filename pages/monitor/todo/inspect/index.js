import { Box, Column, Container } from 'components'
import {
  MonitorInspectCard,
  MonitorInspectPanel,
  RecordDistance,
} from 'components/Modules'
import { GET_INSPECT_DETAIL, Header, useQuery } from 'libs'
import { useRouter } from 'next/router'

const MonitorInspect = () => {
  const router = useRouter()

  const { data } = useQuery(`${GET_INSPECT_DETAIL}/${router.query.id}`)

  return (
    <Container overflow="hidden">
      <Header title={'巡检任务详情'} paddingBottom={6} />

      <Column margin={12} flex={1}>
        <MonitorInspectCard info={data} />

        <Box size={12} />
        <MonitorInspectPanel data={data} />
      </Column>

      <RecordDistance id={data?.planId} />
    </Container>
  )
}

export default MonitorInspect
