import { httpClient } from '../api'

export const SAVE_FACILITY_INFO = '/municipal/TaskFacilityList'

export const SAVE_FLOOD_INFO = '/municipalmonitor/ClockRecord'

export const fetchMonitorInspectList = ({ req } = { req: null }) =>
  httpClient.get(`/municipal/inspection/plan/list`, { req })

export const fetchMonitorInspectStat = ({ req } = { req: null }) =>
  httpClient.get(`/municipal/workbench/statistics/inspection`, { req })

export const fetchFloodList = ({ req } = { req: null }) =>
  httpClient.get(`/municipalmonitor/mobile/getFloodDto`, { req })

export const fetchInspectDetail = ({ id, req } = { id: 0, req: null }) =>
  httpClient.get(`/municipal/inspection/plan/info/${id}`, { req })
