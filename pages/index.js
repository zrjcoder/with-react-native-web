import React from 'react'
import { View } from 'react-native-web'
import Image from 'next/Image'

const App = () => {
  return (
    <View>
      <View style={{ height: 180, width: '100%', position: 'relative' }}>
        <Image src="/images/bg-top.png" fill alt={'十堰美景'} />
      </View>

      <View></View>
    </View>
  )
}

export default App
