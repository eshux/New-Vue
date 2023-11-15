import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  // Will throw an error if request takes longer than 10s
  timeout: 10000
});

export default {
  getEvents(perPage, page) {
    return apiClient.get(`/events?_limit=${perPage}&_page=${page}`);
  },
  getEvent(id) {
    return apiClient.get('/events/' + id);
  },
  postEvent(event) {
    return apiClient.post('/events', event);
  }
};
