import { Ripple, Row, Text } from 'components'
import { ActivityIndicator } from 'react-native-web'

export const Button = ({
  title,
  icon,
  loading = false,
  loadingText = '加载中...',
  colors = ['#0B69FF', '#FFFFFF'],
  onPress,
  fontSize,
  padding = [12, 6],
  ...props
}) => {
  return (
    <Ripple
      color={'#FFFFFF80'}
      onPress={onPress}
      style={{
        borderRadius: 6,
      }}>
      <Row
        alignItems="center"
        borderRadius={6}
        justifyContent="center"
        paddingHorizontal={padding[0]}
        paddingVertical={padding[1]}
        backgroundColor={colors[0]}
        borderWidth={colors[2] ? 1 : 0}
        borderColor={colors[2]}
        {...props}>
        {loading && (
          <ActivityIndicator color={colors[1]} style={{ marginRight: 4 }} />
        )}
        {loading ? (
          <Text fontSize={fontSize} color={colors[1]}>
            {loadingText}
          </Text>
        ) : (
          <Row>
            {icon}
            <Text fontSize={fontSize} color={colors[1]}>
              {title}
            </Text>
          </Row>
        )}
      </Row>
    </Ripple>
  )
}
