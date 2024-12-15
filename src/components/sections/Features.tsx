import React from 'react';
import { Battery, Bluetooth, Clock, Cloud, Heart, Smartphone } from 'lucide-react';
import { FeatureCard } from './features/FeatureCard';

const features = [
  {
    name: 'Real-time Monitoring',
    description: 'Get instant ECG readings with professional-grade accuracy',
    icon: Heart,
  },
  {
    name: 'Bluetooth Connectivity',
    description: 'Seamlessly connect to your smartphone or tablet',
    icon: Bluetooth,
  },
  {
    name: 'Long Battery Life',
    description: 'Up to 48 hours of continuous monitoring on a single charge',
    icon: Battery,
  },
  {
    name: 'Cloud Storage',
    description: 'Secure storage and access to your ECG history',
    icon: Cloud,
  },
  {
    name: 'Mobile App',
    description: 'User-friendly app for iOS and Android devices',
    icon: Smartphone,
  },
  {
    name: '24/7 Support',
    description: 'Round-the-clock technical and medical support',
    icon: Clock,
  },
];

export function Features() {
  return (
    <div id="features" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-red-500 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Advanced Heart Monitoring Made Simple
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.name} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}