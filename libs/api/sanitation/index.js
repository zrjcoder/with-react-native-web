import { httpClient } from '..'

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
