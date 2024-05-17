import { useState } from 'react'
import { Box, Container, Tab, Tabs } from 'components'
import {
  fetchFloodList,
  fetchMonitorInspectList,
  fetchMonitorInspectStat,
  Header,
  useDevice,
} from 'libs'
import { MonitorInspectTab, MonitorFloodTab } from 'components/Modules'

const MonitorTodo = ({ inspectList, floodList, floodStat }) => {
  const [value, setValue] = useState(0)
  const { width } = useDevice()
  fetchFloodList()

  return (
    <Container overflow={'hidden'}>
      <Header color={'#FFFFFF'} title={'待办任务'} paddingBottom={0} />

      <Box
        height={190}
        width={'100%'}
        position="absolute"
        background="linear-gradient(135deg, #8CBAFF 0%, #0066FF 100%)"
        borderRadius="0px 0px 0px 0px"
      />
      <Box size={12} />

      <Tabs
        value={value}
        tabWidth={width / 2}
        width={width}
        onChange={(index) => setValue(index)}>
        <Tab label={'防汛任务'} />
        <Tab label={'排查任务'} />
      </Tabs>

      <Box size={36} />

      <Tab.Animated width={width}>
        <Tab.Content>
          <MonitorFloodTab data={floodList} stat={floodStat} />
        </Tab.Content>

        <Tab.Content>
          <MonitorInspectTab data={inspectList} />
        </Tab.Content>
      </Tab.Animated>
    </Container>
  )
}

export default MonitorTodo

export const getServerSideProps = async (context) => {
  const inspectList =
    (await fetchMonitorInspectList({ req: context.req }))?.result?.records ?? []

  const floodData = (await fetchFloodList({ req: context.req }))?.result
  const floodStat = {
    doing: floodData?.quantityProgress,
    done: floodData?.quantityComplete,
    notdo: floodData?.timeoutQuantity,
  }

  const inspectStat =
    (await fetchMonitorInspectStat({ req: context.req }))?.result ?? {}

  return {
    props: {
      inspectList,
      floodList: floodData?.warnTasks ?? [],
      floodStat,
      inspectStat,
    },
  }
}
