import React from 'react';
import VehicleCard from './VehicleCard';
import type { VehicleItem } from '@/types';

interface FleetGridProps {
  vehicles: VehicleItem[];
}

export default function FleetGrid({ vehicles }: FleetGridProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {vehicles.map((vehicle, index) => (
        <VehicleCard key={index} vehicle={vehicle} />
      ))}
    </div>
  );
}