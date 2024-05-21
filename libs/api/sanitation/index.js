import { httpClient } from '../api'

// 公厕
export const GET_TOILET_LIST = '/sanitation/punch/record/getPunchRecordByUserId'
export const GET_SCHEDULE_TASK = '/sanitation/ScheduleTask/list'
export const GET_PUNCH_RANGE = '/sanitation/ScheduleTask/punchRange'

// export const getScheduleTask = ({ userName, scheduleTime }) =>
//   httpClient.post(`/sanitation/ScheduleTask/list`, {
//     managerialPersonnel: userName,
//     scheduleTime,
//   })

// export const getPunchRange = () =>
//   httpClient.get(`/sanitation/ScheduleTask/punchRange`, {
//     params: {
//       argument: 2,
//     },
//   })

export const SAVE_CLOCK_INFO = '/sanitation/punch/record/operate'

// 道路
export const GET_ROAD_LIST = '/sanitation/PersonnelOperationsData/list'
export const GET_ROAD_DETAIL = '/sanitation/PersonnelOperationsData'

export const saveRoadRecordInfo = (params) =>
  httpClient.put(`/sanitation/PersonnelOperationsData`, params)
