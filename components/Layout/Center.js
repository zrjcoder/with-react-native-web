import { View } from 'react-native'

export function Center({
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
        justifyContent: 'center',
        ...props,
      }}>
      {children}
    </View>
  )
}
