import { Box, ListView } from 'components'
import { TaskStatusPanel } from '../Common'
import { MonitorItem } from './MonitorItem'
import { useRouter } from 'next/router'

export const MonitorFloodTab = ({ data }) => {
  const router = useRouter()

  const floodStat = {
    doing: data?.quantityProgress,
    done: data?.quantityComplete,
    notdo: data?.timeoutQuantity,
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
        data={data?.warnTasks ?? []}
        renderItem={({ item }) => {
          return (
            <Box marginHorizontal={12} marginBottom={12}>
              <MonitorItem
                onPress={() => {
                  router.push({
                    pathname: './todo/flood',
                    query: {
                      ...item,
                    },
                  })
                }}
                endTime={item?.taskCutOffTime}
                data={{
                  任务预警: item?.forewarnLevelName ?? '暂无',
                  任务地点: item?.regionName ?? '暂无',
                  任务类型: item?.taskTypeName ?? '暂无',
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
