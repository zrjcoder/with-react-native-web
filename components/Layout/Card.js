import { Box, Column, Row, Text } from 'components'

export function Card({
  title,
  titleStyle,
  titleIcon,
  right,
  children,
  ...props
}) {
  return (
    <Column
      backgroundColor="#FFFFFF"
      padding={12}
      borderRadius={8}
      boxShadow="0px 1px 12px 0px rgba(16,112,255,0.04)"
      {...props}>
      {title && (
        <Row
          justifyContent="space-between"
          alignContent="center"
          marginBottom={12}
          {...titleStyle}>
          <Row alignItems="center" justifyContent="space-between">
            {titleIcon && <Box paddingRight={4}>{titleIcon}</Box>}
            <Text fontSize={16} color="#333333" fontWeight="bold">
              {title}
            </Text>
          </Row>
          {right}
        </Row>
      )}

      {children}
    </Column>
  )
}
