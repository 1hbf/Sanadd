import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Search, UserPlus, Stethoscope, FileSearch } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Revolutionizing Healthcare Access
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Smart solutions for emergency health management powered by AI
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/subscription"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Get Started
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-900"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the Home page content */}
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Core Services</h2>
            <p className="mt-4 text-xl text-gray-600">
              Comprehensive healthcare solutions at your fingertips
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <Search className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hospital Search</h3>
              <p className="text-gray-600">
                Find the nearest and most suitable hospitals based on your needs
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-lg">
              <UserPlus className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Medical Staff</h3>
              <p className="text-gray-600">
                Access our database of qualified healthcare professionals
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-lg">
              <Stethoscope className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Initial Diagnosis</h3>
              <p className="text-gray-600">
                AI-powered preliminary diagnosis system
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-lg">
              <Activity className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Emergency Response</h3>
              <p className="text-gray-600">
                Quick and efficient emergency case management
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-lg">
              <FileSearch className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Second Opinion</h3>
              <p className="text-gray-600">
                Get expert medical opinions from qualified specialists
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600">63.2%</div>
              <p className="mt-2 text-gray-600">
                Users report improved emergency response times
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">72.3%</div>
              <p className="mt-2 text-gray-600">
                Support AI-powered hospital recommendations
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">24/7</div>
              <p className="mt-2 text-gray-600">
                Available emergency support services
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;