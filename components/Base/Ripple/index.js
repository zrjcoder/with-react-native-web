import React from 'react'

export const Ripple = ({ children, onPress, color = '#9999' }) => {
  const [coords, setCoords] = React.useState({ x: -1, y: -1 })
  const [isRippling, setIsRippling] = React.useState(false)

  React.useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true)
      setTimeout(() => setIsRippling(false), 300)
    } else setIsRippling(false)
  }, [coords])

  React.useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 })
  }, [isRippling])

  return (
    <div
      className="ripple-button"
      onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top })
        onPress && onPress(e)
      }}>
      {isRippling ? (
        <span
          className="ripple"
          style={{
            left: coords.x,
            top: coords.y,
            background: color,
          }}
        />
      ) : (
        ''
      )}
      <span className="content">{children}</span>
    </div>
  )
}
