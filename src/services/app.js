import Client from './api'

export const getAllApps = async () => {
  try {
    const res = await Client.get('/apps')

    return res
  } catch(e) {
    throw new Error(e)
  }
}