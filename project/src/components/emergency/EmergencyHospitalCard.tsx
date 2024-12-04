import React from 'react';
import { Clock, MapPin, Bed, Activity, Star, Users, Stethoscope } from 'lucide-react';
import { type EmergencyHospital } from '../../types/emergency';

interface EmergencyHospitalCardProps {
  hospital: EmergencyHospital;
  severity?: 'low' | 'medium' | 'high' | 'critical';
}

const EmergencyHospitalCard: React.FC<EmergencyHospitalCardProps> = ({ hospital, severity }) => {
  const getUrgencyColor = () => {
    switch (severity) {
      case 'critical':
        return 'bg-red-100 text-red-800';
      case 'high':
        return 'bg-orange-100 text-orange-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{hospital.name}</h3>
        <div className="flex items-center">
          <Star className="h-5 w-5 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm font-medium text-gray-600">{hospital.rating}</span>
        </div>
      </div>
      
      <div className="space-y-3 mb-6">
        <div className="flex items-center text-gray-600">
          <MapPin className="h-5 w-5 mr-2 text-blue-600" />
          <span>{hospital.distance} away</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <Clock className="h-5 w-5 mr-2 text-blue-600" />
          <span>Est. arrival time: {hospital.estimatedArrivalTime}</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <Bed className="h-5 w-5 mr-2 text-blue-600" />
          <span>{hospital.availability.beds} emergency beds available</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <Users className="h-5 w-5 mr-2 text-blue-600" />
          <span>Staff availability: {hospital.staffAvailability}%</span>
        </div>

        <div className="flex items-center text-gray-600">
          <Stethoscope className="h-5 w-5 mr-2 text-blue-600" />
          <span>Equipment level: {hospital.equipmentLevel}%</span>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Emergency Capabilities:</h4>
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

      <div className={`rounded-lg p-4 mb-6 ${getUrgencyColor()}`}>
        <div className="flex items-center">
          <Activity className="h-5 w-5 mr-2" />
          <span className="font-medium">
            {severity ? `Suitable for ${severity} severity cases` : 'Emergency status'}
          </span>
        </div>
      </div>

      <button
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        Request Emergency Transport
      </button>
    </div>
  );
};

export default EmergencyHospitalCard;