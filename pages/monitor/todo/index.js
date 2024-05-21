import { useState } from 'react'
import { Box, Container, Tab, Tabs } from 'components'
import {
  GET_FLOOD_LIST,
  GET_INSPECT_LIST,
  GET_INSPECT_STAT,
  Header,
  useDevice,
  useQuery,
} from 'libs'
import { MonitorInspectTab, MonitorFloodTab } from 'components/Modules'

const MonitorTodo = () => {
  const [value, setValue] = useState(0)
  const { width } = useDevice()

  const { data: inspectList } = useQuery(GET_INSPECT_LIST)
  const { data: inspectStat } = useQuery(GET_INSPECT_STAT)
  const { data: floodList } = useQuery(GET_FLOOD_LIST)

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
          <MonitorFloodTab data={floodList} />
        </Tab.Content>

        <Tab.Content>
          <MonitorInspectTab
            data={inspectList?.records ?? []}
            stat={inspectStat}
          />
        </Tab.Content>
      </Tab.Animated>
    </Container>
  )
}

export default MonitorTodo
