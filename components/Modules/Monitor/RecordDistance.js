import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native-web'
import { useDistanceTracker, useMutation } from 'libs'
import moment from 'moment'
import { Divide, Icon, Ripple } from 'components/Base'

export function RecordDistance({ userInfo = {}, id }) {
  const { toggleTracking, stopTracking, elapsedTime, distance, status } =
    useDistanceTracker()
  const [save, { loading }] = useMutation('/municipal/TaskMileageList')

  return (
    <View
      style={{
        width: '100%',
        backgroundColor: 'white',
      }}>
      {status !== 'stopped' && (
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 16,
            paddingTop: 8,
            paddingBottom: 4,
          }}>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'center',
            }}>
            <Text style={{ color: '#999999', fontSize: 14, marginRight: 24 }}>
              时长
            </Text>
            <Text style={{ color: '#333333', fontSize: 14, marginRight: 12 }}>
              {moment.utc(elapsedTime * 1000).format('HH:mm:ss')}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'center',
            }}>
            <Text style={{ color: '#999999', fontSize: 14, marginRight: 36 }}>
              里程
            </Text>
            <Text style={{ color: '#333333', fontSize: 14 }}>{distance}m</Text>
          </View>
        </View>
      )}

      <Divide />

      <View
        style={{
          marginVertical: 8,
          alignItems: 'center',
        }}>
        {status !== 'stopped' ? (
          <View style={{ flexDirection: 'row', paddingHorizontal: 12 }}>
            {status === 'tracking' ? (
              <Button
                image={
                  <Icon
                    size={14}
                    source={'/icon/pause.png'}
                    style={{ width: 14, height: 14 }}
                  />
                }
                tittle="暂停"
                onPress={toggleTracking}
              />
            ) : (
              <Button
                colors={['#2EE02E', '#00C700']}
                tittle="继续"
                onPress={toggleTracking}
                image={
                  <Icon
                    size={14}
                    source={'/icon/play.png'}
                    style={{ width: 14, height: 14 }}
                  />
                }
              />
            )}
            <View style={{ width: 12 }} />
            <Button
              loading={loading}
              colors={['#FF9898', '#FF2626']}
              tittle="结束"
              image={
                <Icon
                  size={14}
                  source={'/icon/stop.png'}
                  style={{ width: 14, height: 14 }}
                />
              }
              onPress={async () => {
                try {
                  await save({
                    taskId: id,
                    userId: userInfo?.userId,
                    userName: userInfo?.userName,
                    duration: elapsedTime,
                    mileage: distance,
                    endTime: moment().format('YYYY-MM-DD HH:mm:ss'),
                    regionCode: '',
                  })

                  stopTracking()
                } catch (error) {}
              }}
            />
          </View>
        ) : (
          <Button tittle="记录里程" onPress={toggleTracking} />
        )}
      </View>
    </View>
  )
}

function Button({
  loading = false,
  tittle = '按钮',
  width = 160,
  onPress = () => {},
  style = {},
  image = null,
  colors = ['#8CBAFF', '#0066FF'],
}) {
  return (
    <Ripple onPress={onPress}>
      <View
        style={{
          borderRadius: 4,
          background: `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 100%), #FFFFFF`,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          width,
          height: '100%',
          paddingVertical: 14,
          ...style,
        }}>
        {image && (
          <View style={{ marginRight: 4 }}>
            {loading ? <ActivityIndicator color={'#FFFFFF'} /> : image}
          </View>
        )}
        <Text style={{ fontSize: 14, color: 'white' }}>{tittle}</Text>
      </View>
    </Ripple>
  )
}
