import axios from 'axios';
import type { FormData } from '@/types';
import { API_CONFIG } from '@/config/api';

const api = axios.create({
  baseURL: API_CONFIG.baseUrl,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000, // Increased timeout
  withCredentials: false // Changed to false since we're not using cookies
});

export const sendBookingRequest = async (formData: FormData): Promise<boolean> => {
  try {
    const requestData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      date: formData.date,
      service: formData.service,
      message: formData.message
    };

    const response = await api.post(API_CONFIG.endpoints.booking, requestData);
    return response.data.success;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Handle specific error cases
      if (error.code === 'ECONNABORTED') {
        console.error('Request timed out');
      } else if (!error.response) {
        console.error('Network error - server might be down');
      } else {
        console.error('API Error:', error.response.data);
      }
    } else {
      console.error('Unexpected error:', error);
    }
    return false;
  }
};