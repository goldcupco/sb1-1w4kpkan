import { useState } from 'react';
import type { ContactFormData } from '../types';
import { sendContactEmail } from '../services/contact';

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const success = await sendContactEmail(formData);
      if (success) {
        setStatus('success');
        resetForm();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      setStatus('error');
    }
  };

  return {
    formData,
    status,
    handleSubmit,
    handleInputChange,
    resetForm
  };
}