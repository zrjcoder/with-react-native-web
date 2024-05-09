import { httpClient } from '..'

// 公厕
export const getPunchClockInfo = () =>
  httpClient.get(`/sanitation/punch/record/getPunchRecordByUserId`)

export const getScheduleTask = ({ userName, scheduleTime }) =>
  httpClient.post(`/sanitation/ScheduleTask/list`, {
    managerialPersonnel: userName,
    scheduleTime,
  })

export const getPunchRange = () =>
  httpClient.get(`/sanitation/ScheduleTask/punchRange`, {
    params: {
      argument: 2,
    },
  })

export const SAVE_CLOCK_INFO = '/sanitation/punch/record/operate'

// 道路
export const fetchRoadListData = () =>
  httpClient.post(`/sanitation/PersonnelOperationsData/list`)

export const fetchRoadDetailData = (id) =>
  httpClient.get(`/sanitation/PersonnelOperationsData/${id}`)

export const saveRoadRecordInfo = (params) =>
  httpClient.put(`/sanitation/PersonnelOperationsData`, params)
