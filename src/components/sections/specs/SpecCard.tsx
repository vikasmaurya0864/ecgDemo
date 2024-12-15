import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SpecCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
}

export function SpecCard({ icon: Icon, title, description, details }: SpecCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-4">
        <div className="bg-red-100 rounded-lg p-3">
          <Icon className="h-6 w-6 text-red-500" />
        </div>
        <h3 className="ml-4 text-lg font-medium text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-500 mb-4">{description}</p>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}