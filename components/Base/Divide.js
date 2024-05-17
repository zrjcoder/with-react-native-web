import { Box } from 'components'

export const Divide = ({ vertical = 0, horizontal = 0 }) => {
  return (
    <Box
      width={'100%'}
      height={1}
      marginHorizontal={horizontal[1]}
      marginVertical={vertical}
      backgroundColor={'#F3F3F3'}
      borderRadius="0px 0px 0px 0px"
    />
  )
}
