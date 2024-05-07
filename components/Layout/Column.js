import { View } from 'react-native'

export function Column({
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
        flexDirection: 'column',
        justifyContent,
        backgroundColor,
        alignItems,
        ...props,
      }}>
      {children}
    </View>
  )
}
