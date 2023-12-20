import axios from 'axios'

export const apiDelivery = axios.create({
  baseURL: 'http://192.168.0.9:3000/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

export const apiDeliveryForImage = axios.create({
  baseURL: 'http://192.168.0.9:3000/api',
  headers: {
    'Content-Type': 'multipart/form-data',
    'Accept': 'application/json'
  }
})