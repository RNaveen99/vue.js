import axios from 'axios'
import NProgress from 'nprogress'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
apiClient.interceptors.request.use(config => {
  NProgress.start()
  return config
})
apiClient.interceptors.response.use(response => {
  NProgress.done()
  return response
})

const getEvents = (perPage, page) =>
  apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
const getEvent = id => apiClient.get('/events/' + id)
const postEvent = event => apiClient.post('/events', event)

export default { getEvents, getEvent, postEvent }
