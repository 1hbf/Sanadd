import React from 'react';
import { useLocation } from 'react-router-dom';
import { type EmergencyCase, type EmergencyHospital } from '../types/emergency';
import EmergencyHospitalCard from '../components/emergency/EmergencyHospitalCard';

// Mock data - In a real application, this would come from an API
const mockHospitals: EmergencyHospital[] = [
  {
    id: '1',
    name: 'Central Emergency Hospital',
    distance: '1.8 km',
    waitTime: '5-10 mins',
    specialties: ['Emergency Care', 'Trauma Center', 'Critical Care'],
    availability: {
      beds: 15,
      emergency: true,
    },
    rating: 4.8,
    emergencyLevel: 5,
    staffAvailability: 90,
    equipmentLevel: 95,
    estimatedArrivalTime: '8 minutes',
  },
  {
    id: '2',
    name: 'City General Hospital',
    distance: '2.5 km',
    waitTime: '10-15 mins',
    specialties: ['Emergency Care', 'Surgery', 'Intensive Care'],
    availability: {
      beds: 10,
      emergency: true,
    },
    rating: 4.6,
    emergencyLevel: 4,
    staffAvailability: 85,
    equipmentLevel: 90,
    estimatedArrivalTime: '12 minutes',
  },
  {
    id: '3',
    name: 'Regional Medical Center',
    distance: '3.2 km',
    waitTime: '15-20 mins',
    specialties: ['Emergency Care', 'Cardiology', 'Neurology'],
    availability: {
      beds: 8,
      emergency: true,
    },
    rating: 4.7,
    emergencyLevel: 4,
    staffAvailability: 80,
    equipmentLevel: 85,
    estimatedArrivalTime: '15 minutes',
  },
];

const EmergencyResults = () => {
  const location = useLocation();
  const emergencyCase = location.state?.emergencyCase as EmergencyCase;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Available Emergency Hospitals</h1>
          <p className="mt-2 text-gray-600">
            Showing hospitals near {emergencyCase?.location || 'your location'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockHospitals.map((hospital) => (
            <EmergencyHospitalCard
              key={hospital.id}
              hospital={hospital}
              severity={emergencyCase?.severity}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmergencyResults;