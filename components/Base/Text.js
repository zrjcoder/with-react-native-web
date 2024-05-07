import { Box } from 'components/Layout'
import { Text as BaseText } from 'react-native'

export function Text({
  color = '#333333',
  fontSize = 14,
  fontWeight = 'normal',
  children,
  style,
  ...props
}) {
  return (
    <Box {...style}>
      <BaseText style={{ color, fontSize, fontWeight, ...props }}>
        {children}
      </BaseText>
    </Box>
  )
}
