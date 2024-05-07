import { View } from 'react-native'

export function Box({
  size,
  height,
  width,
  backgroundColor = 'transparent',
  children,
  ...props
}) {
  return (
    <View
      style={{
        height: size ?? height,
        width: size ?? width,
        backgroundColor,
        ...props,
      }}>
      {children}
    </View>
  )
}
