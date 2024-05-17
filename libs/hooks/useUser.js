import { useState, useEffect } from 'react'

export const useUser = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user')
      if (storedUser) {
        setUser(JSON.parse(storedUser))
      }
    }
  }, [])

  const saveUser = (userData) => {
    setUser(userData)
    if (typeof window !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(userData))
    }
  }

  const removeUser = () => {
    setUser(null)
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user')
    }
  }

  return {
    user,
    saveUser,
    removeUser,
  }
}
