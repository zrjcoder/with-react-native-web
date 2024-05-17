import { View } from 'react-native'

export function Row({
  style,
  justifyContent = 'flex-start',
  alignItems = 'stretch',
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
        flexDirection: 'row',
        justifyContent,
        alignItems,
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
