import axios from 'axios'
import { API_BASE_URL } from '../global'

const Client = axios.create({ baseURL: API_BASE_URL })

export default Client