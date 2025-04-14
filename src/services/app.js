import Client from './api'

export const getAllApps = async () => {
  try {
    const res = await Client.get('/apps')

    return res.data.apps
  } catch (err) {
    throw new Error(err)
  }
}
