export * from './sanitation'

const BASE_URL = 'http://172.19.46.44:8001'

export const httpClient = {
  get: (path, config = {}) => customFetch(path, config),
  post: (path, data = {}, config = {}) =>
    customFetch(path, {
      method: 'POST',
      body: JSON.stringify(data),
      ...config,
    }),
  put: (path, data = {}, config = {}) =>
    customFetch(path, {
      method: 'PUT',
      body: JSON.stringify(data),
      ...config,
    }),
  delete: (path, config = {}) =>
    customFetch(path, { method: 'DELETE', ...config }),
}

export const customFetch = async (
  path,
  { headers = {}, ...customConfig } = {}
) => {
  const config = {
    ...customConfig,
    headers: {
      Authorization: 'Bearer f92c8007-b33a-499d-bde8-1fdb8737a224',
      Accept: 'application/json',
      ...headers,
    },
  }

  try {
    const response = await fetch(`${BASE_URL}${path}`, config)

    if (!response.ok) {
      return null
    }

    const parsedResult = await response.json()
    const result = parsedResult.hasOwnProperty('result')
      ? parsedResult?.result
      : parsedResult

    return result
  } catch (error) {
    return null
  }
}
