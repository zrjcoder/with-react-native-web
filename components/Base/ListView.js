import { Center } from 'components/Layout'
import { useState, useEffect, useImperativeHandle, forwardRef } from 'react'
import {
  Animated,
  FlatList,
  Text,
  View,
  ActivityIndicator,
  RefreshControl,
} from 'react-native-web'
import { Ripple } from './Ripple'
import jsxRuntime from 'react/jsx-runtime'

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

export const ListView = forwardRef(
  (
    {
      data = [],
      loading = false,
      onRefresh,
      onLoadMore,
      renderItem = <View />,
      ...props
    },
    ref
  ) => {
    const [refreshing, setRefreshing] = useState(loading)

    const [pageNum, setPageNum] = useState(1)
    const [listData, setListData] = useState([])

    useEffect(() => {
      setRefreshing(loading)
    }, [loading])

    useEffect(() => {
      listData[pageNum - 1] = data
      setListData([...listData])
    }, [data])

    useImperativeHandle(ref, () => ({
      setRefreshing: () => {},
    }))

    if (loading && pageNum === 1) {
      // return <Loading />
    }

    return (
      <AnimatedFlatList
        data={listData.flat()}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        ListEmptyComponent={
          <View>
            <Text style={{ textAlign: 'center', color: '#666666' }}>
              暂无数据
            </Text>
          </View>
        }
        refreshControl={
          <RefreshControl
            refreshing={true}
            onRefresh={() => {
              onRefresh && onRefresh()
              setPageNum(1)
            }}
          />
        }
        ListFooterComponent={
          listData.flat()?.length > 10 ? (
            <LoadMore
              onPress={() => {
                setPageNum(pageNum + 1)
                onLoadMore && onLoadMore(pageNum + 1)
              }}
              loading={loading}
            />
          ) : (
            <View />
          )
        }
        {...props}
      />
    )
  }
)

export function LoadMore({ onPress, loading }) {
  if (loading) {
    return <ActivityIndicator size={'lg'} style={{ paddingVertical: 12 }} />
  }

  return (
    <Center padding={12}>
      <Ripple onPress={onPress}>
        <View>
          <Text
            style={{
              color: '#666666',
            }}>
            加载更多数据
          </Text>
        </View>
      </Ripple>
    </Center>
  )
}
