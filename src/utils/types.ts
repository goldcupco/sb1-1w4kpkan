export interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  service: string;
  passengers: string;
  message: string;
}

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