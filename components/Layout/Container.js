import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { View } from 'react-native'

export function Container({ children, ...props }) {
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedData = localStorage.getItem('user')
      if (!storedData) {
        router.push('/login')
      }
    }
  }, [])

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F7F8FA',
        maxWidth: 500,
        marginHorizontal: 'auto',
        overflow: 'auto',
        ...props,
      }}>
      {children}
    </View>
  )
}
