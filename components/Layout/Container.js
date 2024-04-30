import React from 'react'
import { View, Text } from 'react-native'

export function Container({ children, style = {} }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F3F5F6',
        maxWidth: 500,
        ...style,
      }}>
      {children}
    </View>
  )
}
