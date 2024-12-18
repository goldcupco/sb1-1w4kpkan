export const API_CONFIG = {
  baseUrl: import.meta.env.PROD 
    ? 'https://api.steelcityrollz.com'
    : 'http://localhost:8000',
  endpoints: {
    booking: '/api/booking',
    contact: '/api/contact'
  }
};