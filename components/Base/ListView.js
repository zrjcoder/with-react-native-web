import { useState, useEffect, useImperativeHandle, forwardRef } from 'react'
import {
  Animated,
  FlatList,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  RefreshControl,
} from 'react-native-web'

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
          listData?.length > 10 ? (
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
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text
          style={{
            color: '#666666',
          }}>
          加载更多数据...
        </Text>
      </View>
    </TouchableOpacity>
  )
}
