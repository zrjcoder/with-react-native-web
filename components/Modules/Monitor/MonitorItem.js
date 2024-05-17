import { Box, Card, Ripple, Row, Text, TitleTextList } from 'components'
import { Timer } from '../Common'

export const MonitorItem = ({ data, onPress, endTime }) => {
  return (
    <Ripple onPress={onPress}>
      <Card>
        <Row
          justifyContent="space-between"
          alignItems="center"
          marginLeft={-12}>
          <Box>
            <Timer endTime={endTime} />
          </Box>
          <Text color={'#999999'} fontSize={12}>
            {endTime}
          </Text>
        </Row>

        <Box size={12} />

        <TitleTextList ratio={4} data={data} />
      </Card>
    </Ripple>
  )
}
