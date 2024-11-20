// lib/axiosInstance.ts
import axios from 'axios';

// Create an axios instance with default settings
const disneyApiClient = axios.create({
  baseURL: 'https://api.disneyapi.dev', // Base URL for your API
  timeout: 5000, // 5 seconds timeout
  headers: {
    // Add any headers here if needed (e.g., authorization headers)
    'Content-Type': 'application/json',
  },
});

// Example of handling response globally (interceptors)
disneyApiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

export default disneyApiClient;