import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
}

export function FeatureCard({ icon: Icon, name, description }: FeatureCardProps) {
  return (
    <div className="relative">
      <div className="absolute h-12 w-12 text-red-500">
        <Icon className="h-6 w-6" />
      </div>
      <div className="ml-16">
        <h3 className="text-lg font-medium text-gray-900">{name}</h3>
        <p className="mt-2 text-base text-gray-500">{description}</p>
      </div>
    </div>
  );
}