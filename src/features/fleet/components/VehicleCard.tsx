import React from 'react';
import type { VehicleItem } from '@/types';

interface VehicleCardProps {
  vehicle: VehicleItem;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="relative h-64">
        <img 
          src={vehicle.image} 
          alt={vehicle.type}
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-2xl font-bold">{vehicle.type}</h3>
          <p className="text-lg opacity-90">{vehicle.capacity}</p>
        </div>
      </div>
      <div className="p-6">
        <h4 className="text-lg font-semibold mb-4">Features:</h4>
        <ul className="space-y-2">
          {vehicle.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}