import { Image } from './Image'

export const Icons = {
  // 首页
  garden: Icon({
    source: '/icon/garden.png',
    size: 14,
  }),
  maintain: Icon({
    source: '/icon/maintain.png',
  }),
  'risk-task': Icon({
    source: '/icon/risk-task.png',
  }),
  'garden-map': Icon({
    source: '/icon/garden-map.png',
  }),
  sanitation: Icon({
    source: '/icon/sanitation.png',
    size: 14,
  }),
  punch: Icon({
    source: '/icon/punch.png',
  }),
  road: Icon({
    source: '/icon/road.png',
  }),
  supervision: Icon({
    source: '/icon/supervision.png',
  }),
  civicism: Icon({
    source: '/icon/civicism.png',
    size: 14,
  }),
  task: Icon({
    source: '/icon/task.png',
  }),
  inspect: Icon({
    source: '/icon/inspect.png',
  }),
  'facility-map': Icon({
    source: '/icon/facility-map.png',
  }),
  board: Icon({
    source: '/icon/board.png',
  }),
  monitor: Icon({
    source: '/icon/monitor.png',
    size: 14,
  }),
  check: Icon({
    source: '/icon/check.png',
  }),
  todo: Icon({
    source: '/icon/todo.png',
  }),
  facility: Icon({
    source: '/icon/facility.png',
  }),
  warning: Icon({
    source: '/icon/warning.png',
  }),

  back: Icon({
    source: '/icon/back.png',
    size: 16,
  }),
  point1: Icon({
    source: '/icon/point1.png',
    size: 8,
  }),
  point2: Icon({
    source: '/icon/point2.png',
    size: 8,
  }),
  point3: Icon({
    source: '/icon/point3.png',
    size: 8,
  }),
  checked: Icon({
    source: '/icon/checked.png',
    size: 12,
  }),
  collaboration: Icon({
    source: '/icon/collaboration.png',
    size: 18,
  }),
  map: Icon({
    source: '/icon/map.png',
    size: 16,
  }),
  list: Icon({
    source: '/icon/list.png',
    size: 16,
  }),
  avatar: Icon({
    source: '/icon/avatar.png',
    size: 20,
  }),
  pwd: Icon({
    source: '/icon/pwd.png',
    size: 20,
  }),
  'active-map': Icon({
    source: '/icon/active-map.png',
    size: 16,
  }),
  'active-list': Icon({
    source: '/icon/active-list.png',
    size: 16,
  }),
}

export function Icon({ source, size = 26 }) {
  return (
    <Image
      source={source ? source : '/image/man.png'}
      size={size}
      resizeMode="contain"
    />
  )
}
