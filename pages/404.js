import { Box, Container, Text } from 'components'
import { Header } from 'libs'

const NotFound = () => {
  return (
    <Container>
      <Header title={'404'} />

      <Box
        flex={1}
        justifyContent={'center'}
        alignItems={'center'}
        marginBottom={200}>
        <Text>暂无此页面</Text>
      </Box>
    </Container>
  )
}
export default NotFound
