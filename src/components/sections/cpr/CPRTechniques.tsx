import React from 'react';
import { Heart, Wind, Timer, AlertTriangle } from 'lucide-react';

const techniques = [
  {
    icon: Heart,
    title: "Compression Depth",
    description: "Push at least 2 inches (5 cm) deep for adults. Allow chest to fully recoil between compressions.",
  },
  {
    icon: Timer,
    title: "Compression Rate",
    description: "Maintain a rate of 100-120 compressions per minute. Think of the beat of 'Stayin' Alive'.",
  },
  {
    icon: Wind,
    title: "Rescue Breaths",
    description: "After 30 compressions, give 2 rescue breaths. Each breath should last about 1 second.",
  },
  {
    icon: AlertTriangle,
    title: "Minimize Interruptions",
    description: "Keep pauses in chest compressions to less than 10 seconds to maintain blood flow.",
  },
];

export function CPRTechniques() {
  return (
    <div className="py-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-8">Proper CPR Techniques</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {techniques.map((technique) => (
          <div key={technique.title} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-red-100 p-3 rounded-full">
                <technique.icon className="h-6 w-6 text-red-500" />
              </div>
              <h4 className="ml-4 text-lg font-semibold text-gray-900">{technique.title}</h4>
            </div>
            <p className="text-gray-600">{technique.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}