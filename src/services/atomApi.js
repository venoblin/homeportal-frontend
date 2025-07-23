import axios from 'axios'
import { ATOM_API } from '../global'

const AtomClient = axios.create({ baseURL: ATOM_API })

export default AtomClient