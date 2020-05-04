import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
const getEvents = () => apiClient.get('/events')
const getEvent = id => apiClient.get('/events/' + id)

export default { getEvents, getEvent }
