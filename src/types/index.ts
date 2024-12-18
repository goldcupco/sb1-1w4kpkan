// Form Types
export interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  service: string;
  passengers: string;
  message: string;
}

// API Types
export interface BookingResponse {
  success: boolean;
  message: string;
}

// Component Types
export interface ServiceItem {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface VehicleItem {
  type: string;
  capacity: string;
  features: string[];
  image: string;
}

// Hero Types
export interface HeroImage {
  url: string;
  title: string;
  subtitle: string;
}