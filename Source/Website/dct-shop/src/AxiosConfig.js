import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api', // Thay đổi URL của máy chủ
});

export default instance;