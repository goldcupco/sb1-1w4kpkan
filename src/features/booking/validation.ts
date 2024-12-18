import { z } from 'zod';

export const bookingSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),
  
  email: z.string()
    .email('Invalid email address')
    .min(1, 'Email is required'),
  
  phone: z.string()
    .regex(
      /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/, 
      'Invalid phone number format'
    )
    .transform(phone => phone.replace(/\D/g, ''))
    .refine(
      phone => phone.length === 10,
      'Phone number must be 10 digits'
    ),
  
  date: z.string()
    .refine(
      (date) => {
        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return selectedDate >= today;
      }, 
      'Date must be in the future'
    )
    .refine(
      (date) => {
        const selectedDate = new Date(date);
        const maxDate = new Date();
        maxDate.setFullYear(maxDate.getFullYear() + 1);
        return selectedDate <= maxDate;
      },
      'Date must be within one year'
    ),
  
  service: z.string()
    .min(1, 'Please select a service'),
  
  message: z.string()
    .max(1000, 'Message must be less than 1000 characters')
    .optional()
});

export type BookingFormData = z.infer<typeof bookingSchema>;