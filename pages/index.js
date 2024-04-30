import React from 'react'
import { View, Text } from 'react-native'

import { Card, Container, Icons, Image } from 'components'
import { routers } from 'libs'

const App = () => {
  return (
    <Container
      style={{
        marginHorizontal: 'auto',
      }}>
      <Image
        source={'/image/bg.png'}
        resizeMode={'Stretch'}
        style={{ height: 180, width: '100%' }}
      />

      <View style={{ padding: 12 }}>
        {routers.map((router, index) => {
          return (
            <Card
              key={index}
              title={router.title}
              style={{ marginBottom: 12 }}
              onPress={() => {
                router.onPress()
              }}>
              <Modules router={router} />
            </Card>
          )
        })}
      </View>
    </Container>
  )
}

export default App

function Modules({ router }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {router.modules.map((module, index) => (
        <View key={index} style={{ flexBasis: '25%', flexDirection: 'row' }}>
          <View style={{ alignItems: 'center', justifyItems: 'flex-start' }}>
            {Icons[module.name]}
            <Text style={{ paddingTop: 8, fontSize: 12, color: '#241F1F' }}>
              {module.title}
            </Text>
          </View>
          {/* {index === 0 && <View style={{ width: 20 }}></View>} */}
        </View>
      ))}
    </View>
  )
}
