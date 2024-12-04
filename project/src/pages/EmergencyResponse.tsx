import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmergencyForm from '../components/emergency/EmergencyForm';
import { type EmergencyCase } from '../types/emergency';

const EmergencyResponse = () => {
  const navigate = useNavigate();

  const handleSubmit = (data: EmergencyCase) => {
    // In a real application, this would make an API call
    navigate('/emergency-response/results', { state: { emergencyCase: data } });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Emergency Response</h1>
              <p className="mt-2 text-gray-600">
                Submit emergency case details to find the most suitable hospital
              </p>
            </div>
            <EmergencyForm onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyResponse;