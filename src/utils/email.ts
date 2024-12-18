import emailjs from '@emailjs/browser';
import { FormData } from './types';
import { EMAIL_CONFIG } from './constants';
import { EMAILJS_CONFIG } from './emailjs-config';

export const sendBookingEmail = async (formData: FormData): Promise<boolean> => {
  try {
    const templateParams = {
      to_email: EMAIL_CONFIG.formSubmissionEmail,
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      date: formData.date,
      service: formData.service,
      passengers: formData.passengers,
      message: formData.message
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    return response.status === 200;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};