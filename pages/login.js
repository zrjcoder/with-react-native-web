import MD5 from 'crypto-js/md5'
import { useState } from 'react'
import {
  Box,
  Button,
  Column,
  Container,
  Divide,
  Icons,
  Image,
  Row,
  Text,
  TextInput,
} from 'components'
import { useMutation, useUser } from 'libs'
import { useRouter } from 'next/router'

const Login = () => {
  const router = useRouter()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { saveUser } = useUser()
  const [login, { loading, error }] = useMutation('/auth/oauth/token')

  return (
    <Container backgroundColor={'#FFFFFF'} overflow="hidden">
      <Column marginHorizontal={24}>
        <Row marginTop={48} marginBottom={64} alignItems="center">
          <Image size={27.5} source={'/image/logo.png'} />
          <Box size={8} />
          <Text fontSize={16} fontWeight="bold">
            鄂州市掌上城管
          </Text>
        </Row>

        <Row alignItems="center" marginBottom={8} paddingVertical={4}>
          {Icons['avatar']}
          <Box size={8} />
          <TextInput onChange={setUsername} placeholder="请输入密码" />
        </Row>
        <Divide />

        <Box size={24} />

        <Row alignItems="center" marginBottom={8} paddingVertical={4}>
          {Icons['pwd']}
          <Box size={8} />
          <TextInput onChange={setPassword} placeholder="请输入密码" />
        </Row>
        <Divide />

        {error && (
          <Text color="red" style={{ marginTop: 24 }}>
            {error}
          </Text>
        )}

        <Box size={48} />
        <Button loading={loading} title={'登录'} onPress={handleLogin} />
      </Column>

      <Image
        source={'/image/login-bg.png'}
        resizeMode="cover"
        style={{
          position: 'absolute',
          width: '100%',
          bottom: 0,
        }}
      />
    </Container>
  )

  async function handleLogin() {
    const result = await login(
      objectToQueryString({
        username,
        password: MD5(password),
        grant_type: 'inner',
        systemTag: 'MA',
      }),
      {
        headers: {
          Authorization: 'Basic Y20td2ViOmNtLXdlYg==',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )

    if (result?.accessToken) {
      saveUser({
        accessToken: result.accessToken,
        ...result.userInfo,
      })

      await fetch(`/api/token`, {
        method: 'POST',
        body: JSON.stringify({ token: result.accessToken }),
      })

      router.push('/')
    }
  }
}
export default Login

function objectToQueryString(obj) {
  const params = new URLSearchParams()

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      params.append(key, obj[key])
    }
  }

  return params.toString()
}
