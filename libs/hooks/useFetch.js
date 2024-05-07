import { useState, useEffect } from 'react'
import { httpClient } from 'libs'

export function useMutation(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function request(params = {}, config = {}) {
    setLoading(true)

    try {
      const data = await httpClient.post(url, params, config)
      setData(data)
      setLoading(false)

      return data
    } catch (error) {
      setError(error)
      setLoading(false)

      return null
    }
  }

  return [
    request,
    {
      loading,
      error,
      data,
    },
  ]
}

export function useQuery(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  async function getData() {
    try {
      const data = await httpClient.get(url)
      setData(data)
      setLoading(false)
    } catch (error) {
      setError(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getData(url)
  }, [])

  return {
    loading,
    error,
    data,
  }
}
