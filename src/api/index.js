import axios from 'axios';
const url = 'https://dog.ceo/api/breeds/image/random/50';

const onSucess = res => {
  return res.data;
}

const onError = err => console.log('api request error', err);

export const getAll = () => {
  return axios.get(url).then(onSucess, onError)
}

