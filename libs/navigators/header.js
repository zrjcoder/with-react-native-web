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
        <TouchableOpacity
          style={{
            width: 40,
            position: 'absolute',
            padding: 12,
            left: 0,
          }}
          onPress={() => {
            router.back()
          }}>
          <svg
            style={{ fill: '#555', height: '100%' }}
            viewBox="0 0 140 140"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M105.614 118.681c3.398 3.396 3.4 8.912 0 12.311-3.396 3.399-8.91 3.398-12.311 0-.02-.02-.035-.04-.053-.061l-.025.022-57.66-57.66.024-.022a8.664 8.664 0 01-2.608-6.208 8.672 8.672 0 013.229-6.762l-.06-.058 57.66-57.66.025.024c.018-.021.033-.039.053-.058A8.706 8.706 0 01106.2 14.86c-.021.02-.041.034-.061.054l.023.024-52.119 52.125 51.54 51.54-.025.021c.015.022.036.036.056.057" />
          </svg>
        </TouchableOpacity>

        <Text fontWeight="bold">{title}</Text>

        <Box></Box>
      </Row>
    </Box>
  )
}
