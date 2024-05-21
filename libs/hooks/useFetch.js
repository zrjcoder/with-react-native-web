import { useState, useEffect } from 'react'
import { httpClient } from 'libs'

export function useMutation(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function request(params = {}, config = {}) {
    setLoading(true)

    try {
      const { result, error, msg } = await httpClient.post(url, params, config)
      setData(result)
      setError(msg || error)
      setLoading(false)

      return result
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

export function useQuery(url, params) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  async function getData(fullUrl) {
    try {
      const { result, error, msg } = await httpClient.get(fullUrl)
      setData(result)
      setError(msg || error)
      setLoading(false)
    } catch (error) {
      setError(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    const fullUrl = buildUrlWithParams(url, params)
    getData(fullUrl)
  }, [url, params])

  return {
    loading,
    error,
    data,
  }
}

function buildUrlWithParams(url, params) {
  const queryString = new URLSearchParams(params).toString()
  return queryString ? `${url}?${queryString}` : url
}
