import React from 'react';
import { Activity } from 'lucide-react';
import { ECGWaveComparison } from './ecg/ECGWaveComparison';

const waves = [
  {
    name: "P Wave",
    description: "Represents atrial depolarization",
    details: "First positive deflection, indicates start of cardiac cycle"
  },
  {
    name: "QRS Complex",
    description: "Represents ventricular depolarization",
    details: "Most prominent wave, shows heart's main pumping action"
  },
  {
    name: "T Wave",
    description: "Represents ventricular repolarization",
    details: "Recovery phase of ventricles"
  },
  {
    name: "PR Interval",
    description: "Time from P wave start to QRS complex start",
    details: "Normal range: 0.12-0.20 seconds"
  },
  {
    name: "ST Segment",
    description: "Time between QRS end and T wave start",
    details: "Important for detecting heart attacks"
  }
];

export function ECGBasics() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Understanding ECG Waves
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Learn the basics of electrocardiogram readings
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
              alt="ECG Wave Pattern"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 rounded-b-lg">
              <Activity className="h-8 w-8 text-white" />
              <p className="text-white text-lg font-semibold mt-2">
                Normal Sinus Rhythm Pattern
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {waves.map((wave) => (
              <div
                key={wave.name}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {wave.name}
                </h3>
                <p className="mt-2 text-red-500 font-medium">
                  {wave.description}
                </p>
                <p className="mt-1 text-gray-500">
                  {wave.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        <ECGWaveComparison />
      </div>
    </div>
  );
}