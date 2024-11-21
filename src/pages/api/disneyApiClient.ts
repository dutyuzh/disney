import axios from 'axios';

// Create an axios instance with default settings
const disneyApiClient = axios.create({
  baseURL: process.env.REACT_APP_DISNEY_API_URL || 'https://api.disneyapi.dev',
  timeout: 8000, // 8 seconds timeout
  headers: {
    // Add any headers here if needed (e.g., authorization headers)
    'Content-Type': 'application/json',
  },
});

// Add a response interceptor for consistent error handling
disneyApiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error(`✨🚨 Oh no! Jafar's curse strikes again! API responded with a problem:`, error.response.data);
    } else if (error.request) {
      console.error(`🕯️🔍 Lumière says, "Be our guest!" but no response was received. Check the API's enchanted castle:`, error.request);
    } else {
      console.error(`❄️💔 Elsa tried to "Let It Go," but an unexpected error froze the process:`, error.message);
    }
    return Promise.reject(error);
  }
);


export default disneyApiClient;