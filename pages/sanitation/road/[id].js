import { Box, Card, Container, Text, TitleTextList } from 'components'
import { Ripple } from 'components'
import { fetchRoadDetailData, Header } from 'libs'
import Script from 'next/script'
import { Picker } from 'react-native-web'

const RoadDetail = ({ data }) => {
  return (
    <Container>
      <Header title={'道路保洁'} />

      <Picker
        style={{
          width: 200,
          height: 40,
          backgroundColor: '#fff',
          color: '#000',
          borderColor: '#000',
          borderWidth: 1,
          borderRadius: 5,
        }}
        backgroundColor="#fff">
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>

      <Script
        src="/cci.js"
        strategy="lazyOnload"
        onLoad={() => {
          alert(window)
          alert(cci.getLocation)
          cci.getSystemInfo(function (systemInfo) {
            alert(systemInfo.versionName)
          })
        }}
      />
    </Container>
  )
}
export default RoadDetail

export const getServerSideProps = async (context) => {
  const { id } = context.query

  const data = await fetchRoadDetailData(id)

  return {
    props: {
      data,
    },
  }
}
