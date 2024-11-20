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

export default disneyApiClient;