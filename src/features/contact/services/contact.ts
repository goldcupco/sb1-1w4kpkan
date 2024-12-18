import axios from 'axios';
import type { ContactFormData } from '../types';
import { API_CONFIG } from '@/config/api';

export async function sendContactEmail(formData: ContactFormData): Promise<boolean> {
  try {
    const response = await axios.post(
      `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.contact}`,
      formData,
      {
        headers: {
          'Content-Type': 'application/json'
        },
        timeout: 10000
      }
    );
    return response.data.success;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Contact form submission error:', {
        message: error.message,
        response: error.response?.data
      });
    } else {
      console.error('Unexpected error:', error);
    }
    return false;
  }
}