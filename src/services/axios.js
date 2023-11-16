// import axios from 'axios';
const { axios } = require('@vue/cli-service');

export function getMessage() {
  return axios.get('http://localhost:3000/message').then((response) => {
    return response.data;
  });
}
