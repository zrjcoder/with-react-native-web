import React from 'react'
import { View, Text } from 'react-native'

export function Card({ title, style, children }) {
  return (
    <View
      style={{
        backgroundColor: '#FAFBFC',
        padding: 12,
        borderRadius: 8,
        ...style,
      }}>
      {title && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
            marginBottom: 12,
          }}>
          <View>
            <Text
              style={{ fontSize: 16, color: '#333333', fontWeight: 'bold' }}>
              {title}
            </Text>
          </View>
        </View>
      )}

      <View>{children}</View>
    </View>
  )
}
