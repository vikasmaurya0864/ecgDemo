import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ECGFeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ECGFeature({ icon: Icon, title, description }: ECGFeatureProps) {
  return (
    <div className="flex items-start">
      <Icon className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
      <div className="ml-3">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-500">{description}</p>
      </div>
    </div>
  );
}