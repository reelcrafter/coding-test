import axios from 'axios';
import axiosRetry from 'axios-retry';

const apiCall = axios.create({
  baseURL: import.meta.env.VITE_APP_EARTHQUAKE_API_URL,
});

axiosRetry(apiCall, { retries: 3 });

export { apiCall };
