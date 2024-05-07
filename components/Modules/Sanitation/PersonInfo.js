import { Card, Row, TitleTextList, Icon } from 'components'

export function SanitationPersonInfo({}) {
  return (
    <Card margin={12}>
      <Row alignItems="center">
        <TitleTextList
          data={{
            姓名: '市政监督员01',
            作业单位: '暂无',
            考勤组: '暂无',
          }}
        />

        <Icon source={'/image/man.png'} size={60} />
      </Row>
    </Card>
  )
}
