import { Box, Card, Column, Icon, Ripple, Row, Text } from 'components'

export const TaskStatusPanel = ({
  config = defaultConfig,
  status = {
    doing: 0,
    done: 0,
    notdo: 0,
  },
}) => {
  return (
    <Column>
      <Row marginHorizontal={6}>
        {Object.entries(status).map(([key, value]) => {
          return (
            <Ripple
              style={{
                flex: 1,
                margin: '0 6px',
              }}
              key={key}>
              <Card alignItems={'center'}>
                <Icon source={config[key]?.icon} size={40} />
                <Box size={8} />
                <Row alignItems="flex-end" marginBottom={4}>
                  <Text fontSize={22} lineHeight={22} marginRight={2}>
                    {value ?? 0}
                  </Text>
                  <Text fontSize={13}>{config[key]?.unit}</Text>
                </Row>

                <Text color={'#999999'} fontSize={13}>
                  {config[key]?.title}
                </Text>
              </Card>
            </Ripple>
          )
        })}
      </Row>
    </Column>
  )
}

const defaultConfig = {
  doing: {
    title: '进行中',
    unit: '个',
    icon: '/image/task-doing.png',
  },
  done: {
    title: '已完成',
    unit: '个',
    icon: '/image/task-done.png',
  },
  notdo: {
    title: '已超时',
    unit: '个',
    icon: '/image/task-notdo.png',
  },
}
