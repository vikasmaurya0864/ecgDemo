import React from 'react';
import { Clock, Heart, Users, AlertCircle } from 'lucide-react';
import { CPRTechniques } from './cpr/CPRTechniques';
import { CPRGuidelines } from './cpr/CPRGuidelines';
import { CPRStep } from './cpr/CPRStep';

const steps = [
  {
    title: "Check the Scene & Response",
    description: "Ensure the area is safe and check if the person is responsive by tapping their shoulder and asking loudly if they're okay",
    icon: Users,
  },
  {
    title: "Call Emergency Services",
    description: "Dial emergency number (911) immediately and get an AED if available. If alone with an adult, call first then begin CPR",
    icon: Clock,
  },
  {
    title: "Begin Chest Compressions",
    description: "Push hard and fast at the center of the chest, allowing full chest recoil between compressions",
    icon: Heart,
  },
  {
    title: "Watch for Signs of Life",
    description: "Continue CPR until you see obvious signs of life, an AED is ready to use, or emergency medical services take over",
    icon: AlertCircle,
  },
];

export function CPRAwareness() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">CPR Awareness</h2>
          <p className="mt-4 text-xl text-gray-500">Learn the basics of life-saving CPR</p>
        </div>

        <div className="mt-12 lg:mt-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80"
                alt="CPR Training"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <CPRStep key={step.title} {...step} index={index} />
              ))}
            </div>
          </div>

          <CPRTechniques />
          <CPRGuidelines />

          <div className="mt-12 text-center bg-red-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-red-900 mb-4">Remember</h3>
            <p className="text-red-700">
              High-quality CPR is crucial for survival. The most important aspects are:
              <br />
              Compress hard (2 inches deep), compress fast (100-120/min), allow full chest recoil,
              <br />
              minimize interruptions, and avoid excessive ventilation.
            </p>
          </div>

          <div className="mt-8 text-center">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600 transition-colors duration-200"
            >
              Sign Up for CPR Training
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}