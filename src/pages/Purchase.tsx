import React from 'react';
import { Package, Shield, CreditCard } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function Purchase() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 text-center">Purchase RhythemicBeats</h1>
        
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900">Device Specifications</h2>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center">
                <Package className="h-5 w-5 text-red-500 mr-3" />
                <span>Advanced Arduino UNO-based ECG monitoring</span>
              </li>
              <li className="flex items-center">
                <Shield className="h-5 w-5 text-red-500 mr-3" />
                <span>FDA-approved technology</span>
              </li>
              <li className="flex items-center">
                <CreditCard className="h-5 w-5 text-red-500 mr-3" />
                <span>1-year warranty included</span>
              </li>
            </ul>
            
            <div className="mt-8">
              <div className="text-4xl font-bold text-gray-900">$299.99</div>
              <p className="mt-2 text-gray-500">Free shipping worldwide</p>
            </div>

            <Button className="w-full mt-8">
              Add to Cart
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900">What's Included</h2>
            <ul className="mt-6 space-y-4">
              <li>RhythemicBeats ECG Device</li>
              <li>USB Cable</li>
              <li>Electrode Pads (Pack of 10)</li>
              <li>Quick Start Guide</li>
              <li>Mobile App Access</li>
              <li>24/7 Technical Support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}