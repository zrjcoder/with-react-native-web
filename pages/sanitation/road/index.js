import {
  Card,
  Container,
  TitleTextList,
  Row,
  Icon,
  ListView,
  Ripple,
} from 'components'
import { fetchRoadListData, Header } from 'libs'
import moment from 'moment'
import Link from 'next/link'

const SanitationRoad = ({ roadListData }) => {
  return (
    <Container>
      <Header title="道路保洁" />

      <ListView data={roadListData} renderItem={Item} />
    </Container>
  )

  function Item({ item }) {
    return (
      <Ripple style={{ margin: 12 }}>
        <Card>
          <Link href={`./road/${item.id}`}>
            <Row alignItems="center">
              <TitleTextList
                data={{
                  作业时间: item?.scheduleDate
                    ? moment().format(item.scheduleDate)
                    : '暂无',
                  作业路段: '暂无',
                  作业类型: item?.type ?? '暂无',
                }}
              />

              <Icon source={'/image/man.png'} size={60} />
            </Row>
          </Link>
        </Card>
      </Ripple>
    )
  }
}

export default SanitationRoad

export const getServerSideProps = async () => {
  const records = (await fetchRoadListData())?.result?.records ?? []

  return {
    props: {
      roadListData: records,
    },
  }
}
