import React from 'react';
import { useNavigate } from 'react-router-dom';
import HospitalSearchForm from '../components/hospital/HospitalSearchForm';
import { type PatientInfo } from '../types/hospital';

const HospitalSearch = () => {
  const navigate = useNavigate();

  const handleSubmit = (data: PatientInfo) => {
    navigate('/hospital-search/results', { state: { patientInfo: data } });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Hospital Search</h1>
              <p className="mt-2 text-gray-600">
                Enter patient information to find the most suitable hospital
              </p>
            </div>
            <HospitalSearchForm onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalSearch;