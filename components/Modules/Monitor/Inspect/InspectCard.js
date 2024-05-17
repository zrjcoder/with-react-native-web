import { Box, Card, Icons, Ripple, Row, Text, TitleTextList } from 'components'
import { formatDate } from 'libs'

export const MonitorInspectCard = ({ info }) => {
  return (
    <Card
      boxShadow="0px 4px 48px 0px rgba(16,112,255,0.08), 0px 2px 6px 0px rgba(16,112,255,0.12), 0px 4px 56px 0px rgba(16,112,255,0.12);"
      background={'linear-gradient(135deg, #8CBAFF 0%, #0066FF 100%), #FFFFFF'}>
      <Row justifyContent="space-between" alignItems="center">
        <Text color={'#FFFFFF'}>基本信息</Text>

        <Ripple color="#FFFFFF80">
          <Row>
            {Icons['collaboration']}
            <Box size={8} />
            <Text color={'#FFFFFF'}>申请协同</Text>
          </Row>
        </Ripple>
      </Row>

      <Box size={12} />

      <TitleTextList
        ratio={4}
        colors={['#FFFFFF80', '#FFFFFF']}
        data={{
          计划名称: info?.inspectionPlanName,
          计划时间: `${formatDate(info?.startTime)} ~ ${formatDate(info?.endTime)}`,
        }}
      />
    </Card>
  )
}
