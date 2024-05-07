import { Row, Text, Box, Column } from 'components'

export function TitleText({ title, children, titleStyle, ratio }) {
  return (
    <Row>
      <Text
        style={{
          flex: 1,
        }}
        color={'#999999'}
        {...titleStyle}>
        {title}
      </Text>
      <Text
        style={{
          flex: ratio,
        }}>
        {children}
        123
      </Text>
    </Row>
  )
}

export function TitleTextList({ data = {}, paddingVertical = 8, ratio = 3 }) {
  return (
    <Box flex={1}>
      {Object.keys(data).map((key, index) => (
        <Column key={key}>
          <TitleText ratio={ratio} title={key}>
            {data[key]}
          </TitleText>
          {index !== Object.keys(data).length - 1 && (
            <Box height={paddingVertical} />
          )}
        </Column>
      ))}
    </Box>
  )
}
