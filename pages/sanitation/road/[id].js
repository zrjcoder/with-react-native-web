import React from 'react'
import { Container, Picker } from 'components'
import { fetchRoadDetailData, Header, useLocation } from 'libs'
import { Button } from 'react-native-web'

const RoadDetail = ({ data }) => {
  const { location } = useLocation()
  const ref = React.useRef()

  return (
    <Container>
      <Header title={'道路保洁'} />
    </Container>
  )
}
export default RoadDetail

export const getServerSideProps = async (context) => {
  const { id } = context.query

  const data = (await fetchRoadDetailData(id))?.result

  return {
    props: {
      data,
    },
  }
}
