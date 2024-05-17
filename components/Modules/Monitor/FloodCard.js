import { Box, Card, Row, Text, TitleTextList } from 'components'

export const MonitorFloodCard = ({ info }) => {
  return (
    <Card
      boxShadow="0px 4px 48px 0px rgba(16,112,255,0.08), 0px 2px 6px 0px rgba(16,112,255,0.12), 0px 4px 56px 0px rgba(16,112,255,0.12);"
      background={'linear-gradient(135deg, #8CBAFF 0%, #0066FF 100%), #FFFFFF'}>
      <Row justifyContent="space-between" alignItems="center">
        <Text color={'#FFFFFF'}>基本信息</Text>
      </Row>

      <Box size={12} />

      <TitleTextList
        ratio={4}
        colors={['#FFFFFF80', '#FFFFFF']}
        data={{
          预警级别: info?.forewarnLevelName,
          所属区域: info?.regionName,
          积水点位: info?.pointName,
          防汛人员: info?.floodPersonnelName,
          截止时间: info?.taskCutOffTime,
        }}
      />
    </Card>
  )
}
