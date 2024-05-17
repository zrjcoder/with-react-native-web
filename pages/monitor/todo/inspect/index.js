import { Box, Column, Container } from 'components'
import {
  MonitorInspectCard,
  MonitorInspectPanel,
  RecordDistance,
} from 'components/Modules'
import { fetchInspectDetail, Header } from 'libs'

const MonitorInspect = ({ data }) => {
  return (
    <Container overflow="hidden">
      <Header title={'巡检任务详情'} paddingBottom={6} />

      <Column margin={12} flex={1}>
        <MonitorInspectCard info={data} />

        <Box size={12} />
        <MonitorInspectPanel data={data} />
      </Column>

      <RecordDistance id={data.planId} />
    </Container>
  )
}

export const getServerSideProps = async (context) => {
  const { id } = context.query

  const data = (await fetchInspectDetail({ id, req: context.req }))?.result

  return {
    props: {
      data: {
        ...data,
        planId: id,
      },
    },
  }
}

export default MonitorInspect
