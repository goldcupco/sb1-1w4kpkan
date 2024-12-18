import axios from 'axios';
import type { BookingFormData } from '../types';
import { API_CONFIG } from '@/config/api';

export async function sendBookingRequest(formData: BookingFormData): Promise<boolean> {
  try {
    const response = await axios.post(
      `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.booking}`,
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
      console.error('Booking form submission error:', {
        message: error.message,
        response: error.response?.data
      });
    } else {
      console.error('Unexpected error:', error);
    }
    return false;
  }
}