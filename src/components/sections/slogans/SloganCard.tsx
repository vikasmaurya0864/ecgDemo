import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SloganCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function SloganCard({ icon: Icon, title, description }: SloganCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-red-100 text-red-500 mb-6">
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}