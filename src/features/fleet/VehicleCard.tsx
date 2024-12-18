import React from 'react';
import { VehicleItem } from '@/types';

interface VehicleCardProps {
  vehicle: VehicleItem;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <img 
        src={vehicle.image} 
        alt={vehicle.type}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{vehicle.type}</h3>
        <p className="text-gray-600 mb-4">{vehicle.capacity}</p>
        <ul className="space-y-2">
          {vehicle.features.map((feature, idx) => (
            <li key={idx} className="flex items-center">
              <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}