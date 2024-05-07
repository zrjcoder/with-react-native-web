import { Box, Icons, Row, Text } from 'components'
import { TouchableOpacity } from 'react-native-web'
import { useRouter } from 'next/router'

export function Header({ title, ...props }) {
  const router = useRouter()

  return (
    <Box
      borderBottomWidth={0.5}
      borderColor={'#D8D8D8'}
      backgroundColor={'#FFFFFF'}
      {...props}>
      <Row
        justifyContent="center"
        alignItems="center"
        position={'relative'}
        paddingVertical={16}
        paddingHorizontal={12}>
        <Box position={'absolute'} left={0} padding={12}>
          <TouchableOpacity
            onPress={() => {
              router.back()
            }}>
            {Icons['back']}
          </TouchableOpacity>
        </Box>

        <Text fontWeight="bold">{title}</Text>

        <Box></Box>
      </Row>
    </Box>
  )
}
