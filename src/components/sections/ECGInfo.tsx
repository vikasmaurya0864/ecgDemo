import React from 'react';
import { Activity, AlertCircle, CheckCircle } from 'lucide-react';
import { ECGFeature } from './ecg/ECGFeature';

const features = [
  {
    icon: CheckCircle,
    title: "Regular P Waves",
    description: "Normal atrial depolarization pattern indicating healthy heart rhythm initiation."
  },
  {
    icon: Activity,
    title: "QRS Complex",
    description: "Proper ventricular contraction showing normal electrical conduction through the heart."
  },
  {
    icon: AlertCircle,
    title: "T Wave Characteristics",
    description: "Normal ventricular repolarization indicating healthy recovery phase."
  }
];

export function ECGInfo() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Understanding Normal ECG</h2>
          <p className="mt-4 text-xl text-gray-500">Learn to recognize healthy heart patterns</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80"
              alt="Normal ECG Reading"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 rounded-b-lg">
              <p className="text-white text-lg font-semibold">Normal Sinus Rhythm</p>
            </div>
          </div>

          <div className="space-y-6">
            {features.map((feature) => (
              <ECGFeature key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}