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
