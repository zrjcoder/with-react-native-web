import { TouchableOpacity } from 'react-native'

import { Card, Column, Container, Icons, Image, Row, Text } from 'components'
import { routers } from 'libs'
import Link from 'next/link'

const App = () => {
  return (
    <Container>
      <Image
        source={'/image/bg.png'}
        resizeMode={'Stretch'}
        style={{ height: 180, width: '100%' }}
      />

      <Column padding={12}>
        {routers.map((router, index) => {
          return (
            <Card
              key={index}
              title={router.title}
              marginBottom={12}
              titleIcon={Icons[router.name]}
              onPress={() => {
                router.onPress()
              }}>
              <Modules router={router} />
            </Card>
          )
        })}
      </Column>
    </Container>
  )
}

export default App

function Modules({ router }) {
  return (
    <Row>
      {router.modules.map((module, index) => (
        <TouchableOpacity
          key={index}
          style={{
            flexBasis: '25%',
            flexDirection: 'row',
          }}>
          <Link href={`/${router['name']}/${module['name']}`}>
            <Column alignItems="center">
              {Icons[module.name]}
              <Text paddingTop={8} fontSize={12}>
                {module.title}
              </Text>
            </Column>
          </Link>
        </TouchableOpacity>
      ))}
    </Row>
  )
}
