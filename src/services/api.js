import axios from 'axios'
import { API } from '../global'

const Client = axios.create({ baseURL: API })

export default Client
