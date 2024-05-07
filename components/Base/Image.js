import { Image as BaseImage } from 'react-native'

export function Image({
  source,
  style = {},
  size = 200,
  resizeMode = 'contain',
}) {
  return (
    <BaseImage
      resizeMode={resizeMode}
      source={source}
      style={{
        height: size,
        width: size,
        ...style,
      }}
    />
  )
}
