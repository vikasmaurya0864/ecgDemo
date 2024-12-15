import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { contactInfo } from '../../config/contact';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <Logo size="sm" className="mr-2" />
              <span className="ml-2 text-xl font-bold">RhythemicBeats</span>
            </div>
            <p className="mt-4 text-gray-400">
              Advanced portable ECG technology for your peace of mind.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#specifications" className="text-gray-400 hover:text-white transition-colors">
                  Specifications
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              {contactInfo.phones.map((phone) => (
                <div key={phone} className="flex items-center">
                  <Phone className="h-5 w-5 text-red-500 mr-2" />
                  <span className="text-gray-400">{phone}</span>
                </div>
              ))}
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-red-500 mr-2" />
                <span className="text-gray-400">{contactInfo.email}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} RhythemicBeats. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}