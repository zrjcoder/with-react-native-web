import cookie from 'cookie'

export const BASE_URL = 'http://172.19.46.44:8001'
export const TOKEN = '520a4678-909e-4ff4-9003-37dca297d709'
export const MOBILE_URL = 'http://172.19.46.103:8000/mobile/mobile.html'
// export const MOBILE_URL = 'http://172.16.11.88:8980/mobile.html'

export const httpClient = {
  get: (path, config = {}) =>
    customFetch(path, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...config,
    }),
  post: (path, data = {}, config = {}) => {
    const headers = config?.headers ?? {}
    let body = null

    if (headers['Content-Type'] === 'application/x-www-form-urlencoded') {
      body = data
    } else {
      body = JSON.stringify(data)
    }
    return customFetch(path, {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json',
      },
      ...config,
    })
  },
  formData: (path, data = {}) =>
    customFetch(path, {
      method: 'POST',
      body: data,
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
  let token = null

  if (typeof window !== 'undefined') {
    const storedData = localStorage.getItem('user')
    const user = storedData ? JSON.parse(storedData) : {}
    token = user?.accessToken
  } else {
    const { req } = customConfig
    if (req && req.headers && req.headers.cookie) {
      const cookies = cookie.parse(req.headers.cookie)
      token = cookies?.token
    }
  }

  const config = {
    ...customConfig,
    headers: {
      Authorization: `Bearer ${token}`,
      ...headers,
    },
  }

  try {
    const response = await fetch(`${BASE_URL}${path}`, config)
    if (!response.ok) {
      return null
    }

    const parsedResult = await response.json()
    const code = parsedResult?.code
    const error = parsedResult?.error
    const msg = parsedResult?.msg

    const result =
      (parsedResult.hasOwnProperty('result')
        ? parsedResult?.result
        : parsedResult) ?? null

    return { result, code, error, msg }
  } catch (error) {
    return null
  }
}
