import React from 'react';
import { AlertTriangle, Heart } from 'lucide-react';

interface WaveCardProps {
  title: string;
  description: string;
  imageUrl: string;
  heartRate: string;
  warning?: string;
}

function WaveCard({ title, description, imageUrl, heartRate, warning }: WaveCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img
          src={imageUrl}
          alt={`${title} ECG Wave`}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full flex items-center">
          <Heart className="h-4 w-4 text-red-500 mr-1" />
          <span className="text-sm font-medium">{heartRate}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        {warning && (
          <div className="mt-4 flex items-start bg-red-50 p-3 rounded-md">
            <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
            <p className="ml-3 text-sm text-red-700">{warning}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export function ECGWaveComparison() {
  return (
    <div className="py-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-8">Understanding ECG Wave Patterns</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <WaveCard
          title="Normal Sinus Rhythm"
          description="Regular heart rhythm with consistent spacing between beats and normal P waves, QRS complexes, and T waves."
          imageUrl="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
          heartRate="60-100 BPM"
        />
        <WaveCard
          title="Tachycardia"
          description="Abnormally fast heart rate with shortened intervals between beats. May indicate stress, anxiety, or underlying heart conditions."
          imageUrl="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
          heartRate=">100 BPM"
          warning="Seek medical attention if accompanied by chest pain, shortness of breath, or dizziness."
        />
        <WaveCard
          title="Bradycardia"
          description="Slower than normal heart rate with extended intervals between beats. Can be normal during sleep but may indicate heart block or other conditions."
          imageUrl="https://images.unsplash.com/photo-1576091160391-31906e2e357b?auto=format&fit=crop&w=800&q=80"
          heartRate="<60 BPM"
          warning="Consult a healthcare provider if experiencing fatigue, weakness, or fainting spells."
        />
      </div>
    </div>
  );
}