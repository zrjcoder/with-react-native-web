import {
  Card,
  Column,
  Container,
  Icons,
  Image,
  Ripple,
  Row,
  Text,
} from 'components'
import { routers } from 'libs'
import { useRouter } from 'next/router'

const App = () => {
  const nextRouter = useRouter()

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
              padding={0}
              titleIcon={Icons[router.name]}
              titleStyle={{
                paddingHorizontal: 12,
                paddingTop: 12,
                marginBottom: 0,
              }}
              onPress={() => {
                router.onPress()
              }}>
              <Modules
                router={router}
                onPress={(moduleName) =>
                  nextRouter.push(`/${router['name']}/${moduleName}`)
                }
              />
            </Card>
          )
        })}
      </Column>
    </Container>
  )
}

export default App

function Modules({ router, onPress }) {
  return (
    <Row>
      {router.modules.map((module, index) => (
        <Ripple
          onPress={() => onPress(module['name'])}
          key={index}
          style={{
            flexBasis: '25%',
            paddingTop: 12,
            paddingBottom: 12,
          }}>
          <Column alignItems="center">
            {Icons[module.name]}
            <Text paddingTop={8} fontSize={12}>
              {module.title}
            </Text>
          </Column>
        </Ripple>
      ))}
    </Row>
  )
}
