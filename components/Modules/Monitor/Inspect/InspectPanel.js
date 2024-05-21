import { useState } from 'react'
import {
  Box,
  Button,
  Card,
  Column,
  Icons,
  ListView,
  Ripple,
  Row,
  Tab,
  Tabs,
  Text,
} from 'components'
import { MonitorInspectMap } from './InspectMap'
import { useDevice } from 'libs'
import { useRouter } from 'next/router'

export const MonitorInspectPanel = ({ data }) => {
  const [value, setValue] = useState(0)
  const { width } = useDevice()
  const router = useRouter()

  const points = (data?.inspectionRecordList ?? []).map((item) => ({
    status: !item?.taskFacility ? 'doing' : 'done',
    ...item,
  }))

  return (
    <Card
      flex={1}
      paddingVertical={0}
      titleStyle={{
        marginBottom: 0,
      }}
      title={'排查设施'}
      right={
        <Tabs
          tabWidth={18}
          width={width - 48}
          value={value}
          onChange={setValue}
          marginRight={-6}>
          <IconTab isActive={value === 0} name="map" />
          <IconTab isActive={value === 1} name="list" />
        </Tabs>
      }>
      <Tab.Animated width={width - 48}>
        <Tab.Content>
          {points.length > 0 && (
            <MonitorInspectMap
              onPointPress={(id) => {
                const currentPoint = points.find(
                  (item) => item.inspectionFacilityId === id
                )
                if (currentPoint?.status === 'done') return

                router.push({
                  pathname: './inspect/feedback',
                  query: {
                    taskId: id,
                    ...currentPoint,
                  },
                })
              }}
              points={points}
            />
          )}
        </Tab.Content>

        <Tab.Content>
          <ListView
            data={points}
            renderItem={({ item }) => {
              return (
                <Item
                  item={item}
                  onPress={() => {
                    if (item?.status === 'done') return
                    router.push({
                      pathname: './inspect/feedback',
                      query: {
                        taskId: data?.planId,
                        ...item,
                      },
                    })
                  }}
                />
              )
            }}
          />
        </Tab.Content>
      </Tab.Animated>
    </Card>
  )
}

function Item({ item, onPress }) {
  const status = {
    doing: {
      text: '开始巡检',
      colors: ['#0B69FF', '#FFFFFF'],
      icon: 'point2',
      title: '进行中',
    },
    done: {
      text: '已完成',
      colors: ['transparent', '#00C700', '#00C700'],
      icon: 'point1',
      title: '已完成',
    },
  }[item?.status ?? 'done']

  return (
    <Card backgroundColor={'#F7F7F7'} marginBottom={12}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Column>
          <Text>{item?.inspectionFacility}</Text>
          <Box size={4} />
          <Row alignItems="center">
            {Icons[status['icon']]}
            <Box size={4} />
            {item?.status === 'done' ? (
              <Text fontSize={12} color={'#00C700'}>
                {`已打卡 ${item?.taskFacility?.upTime}`}
              </Text>
            ) : (
              <Text fontSize={12} color={'#666666'}>
                {status['title']}
              </Text>
            )}
          </Row>
        </Column>

        <Box>
          <Button
            onPress={onPress}
            colors={status['colors']}
            fontSize={12}
            title={status['text']}
          />
        </Box>
      </div>
    </Card>
  )
}

function IconTab({ isActive, name, onPress }) {
  return (
    <Ripple
      onPress={onPress}
      style={{
        padding: '12px 6px',
      }}>
      {Icons[isActive ? `active-${name}` : name]}
    </Ripple>
  )
}
