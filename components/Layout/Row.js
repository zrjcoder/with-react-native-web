import { View } from 'react-native'

export function Row({
  style,
  justifyContent = 'flex-start',
  alignItems = 'stretch',
  backgroundColor = 'transparent',
  children,
  ...props
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent,
        alignItems,
        backgroundColor,
        ...props,
      }}>
      {children}
    </View>
  )
}
