import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CPRStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function CPRStep({ icon: Icon, title, description, index }: CPRStepProps) {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
          <Icon className="h-6 w-6" />
        </div>
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-medium text-gray-900">
          Step {index + 1}: {title}
        </h3>
        <p className="mt-2 text-gray-500">{description}</p>
      </div>
    </div>
  );
}