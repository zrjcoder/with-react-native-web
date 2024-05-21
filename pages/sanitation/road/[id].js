import React from 'react'
import { Container, Picker } from 'components'
import { GET_ROAD_DETAIL, Header, useLocation, useQuery } from 'libs'
import { Button } from 'react-native-web'

const RoadDetail = () => {
  const { location } = useLocation()
  const ref = React.useRef()

  const { data } = useQuery(GET_ROAD_DETAIL)

  return (
    <Container>
      <Header title={'道路保洁'} />
    </Container>
  )
}
export default RoadDetail
