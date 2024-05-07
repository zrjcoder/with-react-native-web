import { Image } from './Image'

export const Icons = {
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
}

export function Icon({ source, size = 24 }) {
  return <Image source={source} size={size} resizeMode="contain" />
}
