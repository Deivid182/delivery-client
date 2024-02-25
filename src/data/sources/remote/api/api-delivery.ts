import axios, { AxiosHeaders } from 'axios'
import { localStorage } from '../../local/local-storage'

export const apiDelivery = axios.create({
  baseURL: 'http://192.168.0.9:3000/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

apiDelivery.interceptors.request.use(async(config) => {
  const data = await localStorage().getItem('user');

  if(data) {
    const user = JSON.parse(data);
    (config.headers as AxiosHeaders).set('Authorization', `${user.token}`)
  }
  return config
})