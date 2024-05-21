import { Box, ListView } from 'components'
import { TaskStatusPanel } from '../Common'
import { MonitorItem } from './MonitorItem'
import { useRouter } from 'next/router'

export const MonitorInspectTab = ({ data, stat }) => {
  const router = useRouter()

  const floodStat = {
    doing: stat?.data3,
    done: stat?.data1,
    notdo: stat?.data2,
  }

  return (
    <Box flex={1}>
      <TaskStatusPanel status={floodStat} />

      <ListView
        scrollEnabled
        vertical={true}
        style={{
          marginTop: 6,
        }}
        data={data}
        renderItem={({ item }) => {
          return (
            <Box marginHorizontal={12} marginBottom={12}>
              <MonitorItem
                onPress={() => {
                  router.push({
                    pathname: './todo/inspect',
                    query: {
                      id: item?.planId,
                    },
                  })
                }}
                endTime={item?.endTime}
                data={{
                  任务名称: item?.inspectionPlanName ?? '暂无',
                  巡检范围: item?.inspectionScope ?? '暂无',
                }}
              />
            </Box>
          )
        }}
      />

      <Box size={12} />
    </Box>
  )
}
