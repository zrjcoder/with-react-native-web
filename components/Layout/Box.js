import { View } from 'react-native-web'

export function Box({
  ref,
  size,
  height,
  width,
  backgroundColor = 'transparent',
  children,
  paddingVertical,
  paddingHorizontal,
  marginVertical,
  marginHorizontal,
  padding,
  margin,
  ...props
}) {
  return (
    <View
      ref={ref}
      style={{
        height: size ?? height,
        width: size ?? width,
        backgroundColor,
        paddingVertical,
        paddingHorizontal,
        marginVertical,
        marginHorizontal,
        padding,
        margin,
        ...props,
      }}>
      {children}
    </View>
  )
}
