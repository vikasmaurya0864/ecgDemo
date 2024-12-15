import React from 'react';
import { CheckCircle } from 'lucide-react';

const guidelines = [
  {
    title: "For Adults",
    items: [
      "Start CPR if the person is unresponsive and not breathing normally",
      "Use chest compressions and rescue breaths in a 30:2 ratio",
      "Continue until emergency services arrive or the person shows signs of life",
    ],
  },
  {
    title: "For Children (1-8 years)",
    items: [
      "Use less force for chest compressions (about 2 inches deep)",
      "Start with 5 rescue breaths before beginning compressions",
      "Use the same 30:2 ratio for compressions to breaths",
    ],
  },
  {
    title: "For Infants (Under 1 year)",
    items: [
      "Use two fingers for chest compressions (about 1.5 inches deep)",
      "Cover both nose and mouth with your mouth for rescue breaths",
      "Use gentler breaths suitable for infant lung capacity",
    ],
  },
];

export function CPRGuidelines() {
  return (
    <div className="py-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-8">Age-Specific CPR Guidelines</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {guidelines.map((guideline) => (
          <div key={guideline.title} className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">{guideline.title}</h4>
            <ul className="space-y-3">
              {guideline.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="ml-3 text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}