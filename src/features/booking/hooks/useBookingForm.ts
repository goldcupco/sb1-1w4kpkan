import { useState } from 'react';
import { z } from 'zod';
import { bookingSchema, type BookingFormData } from '../validation';
import { sendBookingRequest } from '../services/booking';

const initialFormData: BookingFormData = {
  name: '',
  email: '',
  phone: '',
  date: '',
  service: '',
  message: ''
};

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function useBookingForm() {
  const [formData, setFormData] = useState<BookingFormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [touched, setTouched] = useState<Set<keyof BookingFormData>>(new Set());

  const validateField = (field: keyof BookingFormData, value: string) => {
    try {
      const fieldSchema = bookingSchema.shape[field];
      fieldSchema.parse(value);
      setErrors(prev => ({ ...prev, [field]: undefined }));
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const message = error.errors[0]?.message || 'Invalid input';
        setErrors(prev => ({ ...prev, [field]: message }));
      }
      return false;
    }
  };

  const handleInputChange = (field: keyof BookingFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (touched.has(field)) {
      validateField(field, value);
    }
  };

  const handleBlur = (field: keyof BookingFormData) => {
    setTouched(prev => new Set(prev).add(field));
    validateField(field, formData[field]);
  };

  const validateForm = () => {
    try {
      bookingSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors = error.errors.reduce((acc, curr) => {
          const field = curr.path[0] as keyof BookingFormData;
          acc[field] = curr.message;
          return acc;
        }, {} as Record<keyof BookingFormData, string>);
        
        setErrors(newErrors);
        setTouched(new Set(Object.keys(formData) as Array<keyof BookingFormData>));
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus('submitting');

    try {
      const success = await sendBookingRequest(formData);
      if (success) {
        setStatus('success');
        setFormData(initialFormData);
        setErrors({});
        setTouched(new Set());
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
    errors,
    status,
    handleSubmit,
    handleInputChange,
    handleBlur,
    touched: Array.from(touched)
  };
}