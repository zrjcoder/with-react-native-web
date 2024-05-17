import moment from 'moment'

export function formatDate(date, formatCode) {
  let format = 'YYYY-MM-DD'

  if (formatCode === 'all') {
    format = 'YYYY-MM-DD HH:mm:ss'
  }
  return !!date ? moment(date).format(format) : ''
}
