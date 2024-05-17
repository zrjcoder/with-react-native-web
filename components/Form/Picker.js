import { useState, forwardRef, useImperativeHandle } from 'react'
import { Box, Column, Image, Row, Text } from 'components'

export const Picker = forwardRef(({ size = 80, placeholder }, ref) => {
  const [images, setImages] = useState([])

  useImperativeHandle(ref, () => ({
    getMedias: () => images,
  }))

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files).map((file) =>
      URL.createObjectURL(file)
    )
    setImages((prevImages) => [...prevImages, ...files])
  }

  return (
    <Column>
      <Row flexWrap="wrap">
        <Box marginRight={8}>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            style={{
              width: size,
              height: size,
              zIndex: 999,
              position: 'absolute',
              opacity: 0,
              cursor: 'pointer',
            }}
          />
          <Image
            source={'/image/camera.png'}
            size={size}
            borderRadius={20}
            style={{
              borderRadius: 4,
              marginBottom: 8,
            }}
          />
        </Box>

        {images.map((image, index) => (
          <Box key={index} marginRight={8}>
            <Preview source={image} />
          </Box>
        ))}
      </Row>

      {placeholder && (
        <Text fontSize={12} color="#999999">
          请上传最少一张图片！
        </Text>
      )}
    </Column>
  )
})

export const Preview = ({ source, size = 80 }) => {
  return (
    <Image
      source={source}
      size={size}
      resizeMode="container"
      style={{
        borderRadius: 4,
        marginBottom: 8,
      }}
    />
  )
}
