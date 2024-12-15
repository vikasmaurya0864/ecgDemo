import React from 'react';
import { Shield, Heart, Clock } from 'lucide-react';
import { SloganCard } from './slogans/SloganCard';

const slogans = [
  {
    icon: Heart,
    title: "Your Heart's Guardian",
    description: "Professional ECG monitoring that travels with you everywhere",
  },
  {
    icon: Shield,
    title: "Peace of Mind, Anytime",
    description: "FDA-approved technology for reliable heart health tracking",
  },
  {
    icon: Clock,
    title: "Every Beat Matters",
    description: "Real-time monitoring with instant medical-grade analysis",
  },
];

export function Slogans() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose RhythemicBeats?
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Leading the revolution in portable cardiac monitoring
          </p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {slogans.map((slogan) => (
              <SloganCard key={slogan.title} {...slogan} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}