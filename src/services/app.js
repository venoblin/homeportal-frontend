import Client from './api'

export const getAllApps = async () => {
  try {
    const res = await Client.get('/apps')

    return res.data.apps
  } catch (err) {
    throw new Error(err)
  }
}

export const postApp = async (payload) => {
  try {
    const res = await Client.post('/apps', payload)

    return res
  } catch (err) {
    throw new Error(err)
  }
}

export const patchApp = async (id, payload) => {
  try {
    const res = await Client.patch(`/apps/${id}`, payload)

    return res
  } catch (err) {
    throw new Error(err)
  }
}

export const deleteApp = async (id) => {
  try {
    const res = await Client.delete(`/apps/${id}`)

    return res
  } catch (err) {
    throw new Error(err)
  }
}
