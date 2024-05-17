import { Box, Container, Text } from 'components'
import { Header } from 'libs'

const ServerError = () => {
  return (
    <Container>
      <Header title={'500'} />

      <Box
        flex={1}
        justifyContent={'center'}
        alignItems={'center'}
        marginBottom={200}>
        <Text>服务出错</Text>
      </Box>
    </Container>
  )
}
export default ServerError
