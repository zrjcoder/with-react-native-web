import { httpClient } from './api'

export async function upload(medias = [], url, params = {}) {
  try {
    const formData = new FormData()

    const uploadPromises = medias.map(async (media) => {
      const response = await fetch(media)
      const blob = await response.blob()

      formData.append(
        'files',
        blob,
        `file-${Math.floor(Math.random() * 100000)}.png`
      )
    })

    await Promise.all(uploadPromises)

    Object.keys(params).forEach((key) => {
      formData.append(key, params[key])
    })

    const uploadMedias = await httpClient.formData(url, formData)
    return uploadMedias
  } catch (error) {
    return []
  }
}

export async function uploadImages(medias, { id, code, value } = {}) {
  return await upload(medias, '/data/media/addfiles', {
    relationId: id,
    relationTypeCode: code,
    relationTypeValue: value,
  })
}
