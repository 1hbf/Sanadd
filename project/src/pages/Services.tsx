import React from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  FileSearch,
  Bot,
  Activity,
  Stethoscope,
  AlertCircle,
  Clock,
  Building,
  Users,
} from 'lucide-react';

const services = [
  {
    title: 'Hospital Search',
    description: 'Find the nearest and most suitable hospitals based on your needs',
    icon: Search,
    path: '/hospital-search',
    color: 'blue',
  },
  {
    title: 'Second Opinion',
    description: 'Get expert medical opinions from qualified specialists',
    icon: FileSearch,
    path: '/second-opinion',
    color: 'green',
  },
  {
    title: 'Medical Chatbot',
    description: 'AI-powered medical assistant for health-related queries',
    icon: Bot,
    path: '/medical-chatbot',
    color: 'purple',
  },
  {
    title: 'Emergency Response',
    description: 'Quick and efficient emergency case management',
    icon: Activity,
    path: '/emergency-response',
    color: 'red',
  },
  {
    title: 'Initial Diagnosis',
    description: 'AI-powered preliminary diagnosis system',
    icon: Stethoscope,
    path: '/initial-diagnosis',
    color: 'indigo',
  },
  {
    title: 'Health Monitoring',
    description: 'Track and monitor your health conditions',
    icon: AlertCircle,
    path: '/health-monitoring',
    color: 'yellow',
  },
  {
    title: 'Wait Time Tracking',
    description: 'Real-time hospital wait time information',
    icon: Clock,
    path: '/wait-times',
    color: 'pink',
  },
  {
    title: 'Hospital Network',
    description: 'Access our network of partner hospitals',
    icon: Building,
    path: '/hospital-network',
    color: 'teal',
  },
  {
    title: 'Medical Staff',
    description: 'Connect with qualified healthcare professionals',
    icon: Users,
    path: '/medical-staff',
    color: 'orange',
  },
];

const getColorClasses = (color: string) => {
  const colorMap = {
    blue: 'bg-blue-50 text-blue-700 hover:bg-blue-100',
    green: 'bg-green-50 text-green-700 hover:bg-green-100',
    purple: 'bg-purple-50 text-purple-700 hover:bg-purple-100',
    red: 'bg-red-50 text-red-700 hover:bg-red-100',
    indigo: 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100',
    yellow: 'bg-yellow-50 text-yellow-700 hover:bg-yellow-100',
    pink: 'bg-pink-50 text-pink-700 hover:bg-pink-100',
    teal: 'bg-teal-50 text-teal-700 hover:bg-teal-100',
    orange: 'bg-orange-50 text-orange-700 hover:bg-orange-100',
  };
  return colorMap[color as keyof typeof colorMap] || colorMap.blue;
};

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">
            Comprehensive healthcare solutions powered by innovation and technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            const colorClasses = getColorClasses(service.color);

            return (
              <Link
                key={service.title}
                to={service.path}
                className={`block p-6 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 ${colorClasses}`}
              >
                <div className="flex items-center mb-4">
                  <IconComponent className="h-8 w-8 mr-3" />
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-sm opacity-90">{service.description}</p>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Need help choosing a service?{' '}
            <Link to="/contact" className="text-blue-600 hover:text-blue-800">
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;