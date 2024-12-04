import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HospitalCard from '../components/hospital/HospitalCard';
import { type Hospital, type PatientInfo } from '../types/hospital';

// Mock data - In a real application, this would come from an API
const mockHospitals: Hospital[] = [
  {
    id: '1',
    name: 'Central Medical Center',
    distance: '2.5 km',
    waitTime: '15-20 mins',
    specialties: ['Emergency Care', 'Trauma Center', 'Cardiology'],
    availability: {
      beds: 12,
      emergency: true,
    },
    rating: 4.8,
  },
  {
    id: '2',
    name: 'City General Hospital',
    distance: '3.8 km',
    waitTime: '25-30 mins',
    specialties: ['Emergency Care', 'Pediatrics', 'Orthopedics'],
    availability: {
      beds: 8,
      emergency: true,
    },
    rating: 4.5,
  },
  {
    id: '3',
    name: 'Community Healthcare',
    distance: '5.2 km',
    waitTime: '10-15 mins',
    specialties: ['Emergency Care', 'Internal Medicine', 'Neurology'],
    availability: {
      beds: 15,
      emergency: true,
    },
    rating: 4.7,
  },
];

const HospitalSearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const patientInfo = location.state?.patientInfo as PatientInfo;

  const handleHospitalSelect = (hospital: Hospital) => {
    // Handle hospital selection - In a real application, this would initiate the booking process
    console.log('Selected hospital:', hospital);
    console.log('Patient info:', patientInfo);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Available Hospitals</h1>
          <p className="mt-2 text-gray-600">
            Showing hospitals near {patientInfo?.location || 'your location'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockHospitals.map((hospital) => (
            <HospitalCard
              key={hospital.id}
              hospital={hospital}
              onSelect={handleHospitalSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HospitalSearchResults;