import React from 'react';
import { Download, FileText, Book } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function Guide() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 text-center">Heart Health Monitoring Guide</h1>
        <p className="mt-4 text-xl text-gray-500 text-center">
          Download our comprehensive guide to heart health monitoring
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900">What's Inside</h2>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center">
                <FileText className="h-5 w-5 text-red-500 mr-3" />
                <span>Understanding ECG Basics</span>
              </li>
              <li className="flex items-center">
                <Book className="h-5 w-5 text-red-500 mr-3" />
                <span>Heart Health Best Practices</span>
              </li>
              <li className="flex items-center">
                <Download className="h-5 w-5 text-red-500 mr-3" />
                <span>Device Usage Instructions</span>
              </li>
            </ul>
            
            <Button className="w-full mt-8">
              Download Guide
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900">Guide Preview</h2>
            <div className="mt-6 aspect-w-16 aspect-h-9">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
                alt="Guide Preview"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}