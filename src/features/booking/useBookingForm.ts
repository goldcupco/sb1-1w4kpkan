import { useState } from 'react';
import type { FormData } from '@/types';
import { sendBookingRequest } from '@/services/api';

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  date: '',
  service: '',
  passengers: '',
  message: ''
};

export function useBookingForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const success = await sendBookingRequest(formData);
      if (success) {
        setStatus('success');
        resetForm();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  return {
    formData,
    status,
    handleSubmit,
    handleInputChange
  };
}