/* eslint-disable import/no-anonymous-default-export */
import cookie from 'cookie'

export default function handler(req, res) {
  const { token } = JSON.parse(req.body)

  res.setHeader(
    'Set-Cookie',
    cookie.serialize('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      maxAge: 60 * 60 * 24 * 7,
      sameSite: 'strict',
      path: '/',
    })
  )

  res.status(200).json({ token })
}
