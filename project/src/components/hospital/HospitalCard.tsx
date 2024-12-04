import React from 'react';
import { Clock, MapPin, Bed, Activity, Star } from 'lucide-react';
import { type HospitalCardProps } from '../../types/hospital';

const HospitalCard: React.FC<HospitalCardProps> = ({ hospital, onSelect }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{hospital.name}</h3>
        <div className="flex items-center">
          <Star className="h-5 w-5 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm font-medium text-gray-600">{hospital.rating.toFixed(1)}</span>
        </div>
      </div>
      
      <div className="space-y-3 mb-6">
        <div className="flex items-center text-gray-600">
          <MapPin className="h-5 w-5 mr-2 text-blue-600" />
          <span>{hospital.distance} away</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <Clock className="h-5 w-5 mr-2 text-blue-600" />
          <span>Est. wait time: {hospital.waitTime}</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <Bed className="h-5 w-5 mr-2 text-blue-600" />
          <span>{hospital.availability.beds} beds available</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <Activity className="h-5 w-5 mr-2 text-blue-600" />
          <span>
            Emergency: {hospital.availability.emergency ? (
              <span className="text-green-600">Available</span>
            ) : (
              <span className="text-red-600">Limited</span>
            )}
          </span>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Specialties:</h4>
        <div className="flex flex-wrap gap-2">
          {hospital.specialties.map((specialty) => (
            <span
              key={specialty}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={() => onSelect(hospital)}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        Select Hospital
      </button>
    </div>
  );
};

export default HospitalCard;