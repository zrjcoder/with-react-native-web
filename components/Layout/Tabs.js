/* eslint-disable react-hooks/exhaustive-deps */
import { Children, cloneElement, useState, useRef, useEffect } from 'react'
import { ScrollView, Animated, View } from 'react-native-web'
import { Column, Ripple, Row, Text } from 'components'
import { gsap } from 'gsap'

const Tabs = ({
  value = 0,
  onChange = () => {},
  width,
  tabWidth = 120,
  children,
  className = 'tab-content',
  ...props
}) => {
  const [activeTab, setActiveTab] = useState(value)

  const scrollViewRef = useRef()

  const anim = useRef(new Animated.Value(0))
  const animateBox = (value) => {
    Animated.timing(anim.current, {
      toValue: value,
      duration: 300,
      useNativeDriver: false,
    }).start()
  }

  return (
    <ScrollView
      ref={scrollViewRef}
      showsHorizontalScrollIndicator={false}
      horizontal
      style={{ flexGrow: 0, ...props }}>
      <Column>
        <Row>
          {Children.map(children, (child, index) => {
            return cloneElement(child, {
              width: tabWidth,
              isActivated: activeTab === index,
              onPress: () => {
                animateBox(tabWidth * index)
                scrollViewRef.current.scrollTo({
                  x: index * tabWidth - width / 4,
                })

                setActiveTab(index)
                onChange(index)

                const length = children.length
                const step = value - index

                if (step < 0) {
                  for (let i = value; i < length; i++) {
                    gsap.set(`.tab-content-${i}`, {
                      opacity: 1,
                    })
                  }
                } else if (step > 0) {
                  for (let i = value - 1; i >= 0; i--) {
                    gsap.set(`.tab-content-${i}`, {
                      opacity: 1,
                    })
                  }
                } else {
                  return
                }

                gsap.to(`.${className}`, {
                  left: -(index * width),
                  duration: 0.2,
                  onComplete: () => {
                    for (let i = 0; i < length; i++) {
                      if (i === index) {
                        continue
                      }
                      gsap.set(`.tab-content-${i}`, {
                        opacity: 0,
                      })
                    }
                  },
                })
              },
            })
          })}
        </Row>

        <Animated.View
          style={{
            height: 2,
            width: tabWidth,
            backgroundColor: '#FFFFFF',
            transform: [{ translateX: anim.current }],
          }}
        />
      </Column>
    </ScrollView>
  )
}

const Tab = ({ label, width, onPress }) => {
  return (
    <Ripple color="#D7E5F6" onPress={onPress}>
      <Column width={width}>
        <Text color="#FFFFFF" style={{ padding: 12, textAlign: 'center' }}>
          {label}
        </Text>
      </Column>
    </Ripple>
  )
}

Tab.Animated = ({ children, width }) => {
  const ref = useRef()

  useEffect(() => {
    ref.current.classList.add('tab-content')
  }, [])

  return (
    <View
      ref={ref}
      style={{
        flex: 1,
        flexDirection: 'row',
      }}>
      {Children.map(children, (child, index) => {
        return cloneElement(child, {
          index,
          width,
          opacity: index === 0 ? 1 : 0,
        })
      })}
    </View>
  )
}

Tab.Content = ({ width, index, children, ...props }) => {
  const ref = useRef()

  useEffect(() => {
    ref.current?.classList?.add(`tab-content-${index}`)
  }, [])

  return (
    <View
      ref={ref}
      key={index}
      style={{
        width,
        ...props,
      }}>
      {children}
    </View>
  )
}

export { Tabs, Tab }
