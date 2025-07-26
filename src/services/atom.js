import AtomClient from './atomApi'

export const PostCommand = async (payload) => {
  try {
    const res = await AtomClient.post('/control_atom', payload)

    return res
  } catch (err) {
    throw new Error(err)
  }
}