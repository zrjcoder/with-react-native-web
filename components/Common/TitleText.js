import { Row, Text, Box, Column } from 'components'

export function TitleText({ title, colors = [], children, titleStyle, ratio }) {
  return (
    <Row>
      <Text
        style={{
          flex: 1,
        }}
        color={colors[0] || '#999999'}
        {...titleStyle}>
        {title}
      </Text>
      <Text
        color={colors[1]}
        style={{
          flex: ratio,
        }}>
        {children}
      </Text>
    </Row>
  )
}

export function TitleTextList({
  data = {},
  colors = [],
  paddingVertical = 8,
  ratio = 3,
}) {
  return (
    <Box flex={1}>
      {Object.keys(data).map((key, index) => (
        <Column key={key}>
          <TitleText ratio={ratio} title={key} colors={colors}>
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
