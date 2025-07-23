import AtomClient from './atomApi'

export const GetVideoFeed = async () => {
  try {
    const res = await AtomClient.get('/video_feed')

    console.log(res)
    return res
  } catch (err) {
    throw new Error(err)
  }
}