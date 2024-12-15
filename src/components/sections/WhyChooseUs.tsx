import React from 'react';
import { Heart, Shield, Clock, Zap, Users, Award } from 'lucide-react';

const reasons = [
  {
    icon: Heart,
    title: "Precision Monitoring",
    description: "High-accuracy ECG readings with medical-grade AD8232 sensor",
    hindi: "सटीक निगरानी"
  },
  {
    icon: Shield,
    title: "Reliable Technology",
    description: "Built on proven Arduino UNO platform with robust performance",
    hindi: "विश्वसनीय तकनीक"
  },
  {
    icon: Clock,
    title: "24/7 Monitoring",
    description: "Continuous heart monitoring with instant alerts",
    hindi: "चौबीसों घंटे निगरानी"
  },
  {
    icon: Zap,
    title: "Quick Response",
    description: "Immediate notification system for irregular patterns",
    hindi: "त्वरित प्रतिक्रिया"
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Dedicated medical professionals at your service",
    hindi: "विशेषज्ञ सहायता"
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "ISO certified manufacturing and testing process",
    hindi: "गुणवत्ता आश्वासन"
  }
];

export function WhyChooseUs() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose Rhythemic Beats?
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Leading innovation in portable cardiac monitoring
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <reason.icon className="h-8 w-8 text-red-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {reason.title}
                  </h3>
                  <p className="mt-1 text-sm text-red-500 font-medium">
                    {reason.hindi}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-gray-500">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}