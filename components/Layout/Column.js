import { View } from 'react-native'

export function Column({
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
        flexDirection: 'column',
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
