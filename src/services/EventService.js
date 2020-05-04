import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
const getEvents = (perPage, page) =>
  apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
const getEvent = id => apiClient.get('/events/' + id)
const postEvent = event => apiClient.post('/events', event)

export default { getEvents, getEvent, postEvent }
