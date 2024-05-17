/* eslint-disable react/jsx-key */
import { Children } from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { AppRegistry } from 'react-native'
import config from '../app.json'
// Force Next-generated DOM elements to fill their parent's height
const normalizeNextElements = `
  #__next {
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #F7F8FA;
  }

  a {
    text-decoration: none;
  }

  @media only screen and (min-width: 500px) {
    #__next {
      background: #EAF0F9;
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }
  * {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  *::-webkit-scrollbar {
    display: none;
  }
`

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    AppRegistry.registerComponent(config.name, () => Main)
    const { getStyleElement } = AppRegistry.getApplication(config.name)
    const page = await renderPage()
    const styles = [
      <style dangerouslySetInnerHTML={{ __html: normalizeNextElements }} />,
      getStyleElement(),
    ]
    return { ...page, styles: Children.toArray(styles) }
  }

  render() {
    return (
      <Html style={{ height: '100%' }}>
        <Head />
        <body style={{ height: '100%', overflow: 'hidden' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
