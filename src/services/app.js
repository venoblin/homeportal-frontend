import Client from './api'

export const GetAllApps = async () => {
  try {
    const res = await Client.get('/apps')

    return res.data.apps
  } catch (err) {
    throw new Error(err)
  }
}

export const PostApp = async (payload) => {
  try {
    const res = await Client.post('/apps', payload)

    return res
  } catch (err) {
    throw new Error(err)
  }
}

export const PatchApp = async (id, payload) => {
  try {
    const res = await Client.patch(`/apps/${id}`, payload)

    return res
  } catch (err) {
    throw new Error(err)
  }
}

export const DeleteApp = async (id) => {
  try {
    const res = await Client.delete(`/apps/${id}`)

    return res
  } catch (err) {
    throw new Error(err)
  }
}

export const GetHostInfo = async () => {
  try {
    const res = await Client.get('/host')

    return res.data
  } catch (err) {
    throw new Error(err)
  }
}
