import React from 'react'
import { Image } from './Image'

export const Icons = {
  garden: Icon({
    source: '/icon/garden.png',
  }),
  garden: Icon({
    source: '/icon/garden.png',
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
}

export function Icon({ source, size = 24 }) {
  return <Image source={source} size={size} resizeMode="contain" />
}
