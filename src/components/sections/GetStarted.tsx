import React from 'react';
import { ArrowRight, Phone, FileText } from 'lucide-react';
import { Button } from '../ui/Button';

export function GetStarted() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Get Started with RhythemicBeats
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Choose the option that best suits your needs
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-8">
              <div className="flex justify-center">
                <Phone className="h-12 w-12 text-red-500" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-center text-gray-900">Book Consultation</h3>
              <p className="mt-2 text-gray-500 text-center">
                Schedule a free consultation with our healthcare experts
              </p>
              <div className="mt-6">
                <Button 
                  onClick={() => window.location.href = '/consultation'}
                  className="w-full"
                >
                  Book Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-8">
              <div className="flex justify-center">
                <FileText className="h-12 w-12 text-red-500" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-center text-gray-900">Download Guide</h3>
              <p className="mt-2 text-gray-500 text-center">
                Get our comprehensive guide on heart health monitoring
              </p>
              <div className="mt-6">
                <Button 
                  onClick={() => window.location.href = '/guide'}
                  className="w-full"
                >
                  Download
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}