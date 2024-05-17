/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useRef, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import { TransitionContext } from 'context'

export const TransitionComponent = ({ children }) => {
  const router = useRouter()
  const { toggleCompleted } = useContext(TransitionContext)

  const prevPath = useRef(router.pathname)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const handleRouteChange = (url) => {
      const prev = prevPath.current?.split('?')[0] ?? ''
      const current = url?.split('?')[0] ?? ''

      setDirection(current.length > prev.length ? 1 : -1)
      prevPath.current = url
    }

    router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router.pathname])

  const variants = {
    initial: (direction) => ({
      opacity: 0,
      x: direction > 0 ? '100%' : '-100%',
    }),
    enter: {
      opacity: 1,
      x: '0%',
      transition: { duration: 0.4, ease: [0.42, 0, 0.58, 1] },
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? '-100%' : '100%',
      transition: { duration: 0.4, ease: [0.42, 0, 0.58, 1] },
    }),
  }

  return (
    <AnimatePresence
      custom={direction}
      onExitComplete={() => toggleCompleted(true)}
      initial={false}>
      <motion.div
        key={router.pathname}
        custom={direction}
        initial="initial"
        animate="enter"
        exit="exit"
        variants={variants}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: 'flex',
        }}>
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
