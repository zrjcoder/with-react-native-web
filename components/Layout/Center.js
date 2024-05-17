import { View } from 'react-native'

export function Center({
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
      style={{
        height: size ?? height,
        width: size ?? width,
        backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
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
