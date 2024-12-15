import React from 'react';
import { Calendar } from 'lucide-react';
import { Input } from '../components/ui/Input';
import { TextArea } from '../components/ui/TextArea';
import { Button } from '../components/ui/Button';

export function Consultation() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 text-center">Book a Consultation</h1>
        <p className="mt-4 text-xl text-gray-500 text-center">
          Schedule a free consultation with our healthcare experts
        </p>

        <form className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Input
                label="First Name"
                type="text"
                required
              />
              <Input
                label="Last Name"
                type="text"
                required
              />
            </div>
            
            <Input
              label="Email"
              type="email"
              required
            />
            
            <Input
              label="Phone"
              type="tel"
              required
            />
            
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-red-500 mr-2" />
              <Input
                label="Preferred Date"
                type="date"
                required
              />
            </div>
            
            <TextArea
              label="Additional Notes"
              rows={4}
              placeholder="Please let us know if you have any specific concerns or questions"
            />
            
            <Button className="w-full">
              Schedule Consultation
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}