import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { type UrgencyLevelBadgeProps } from '../../types/hospital';

const UrgencyLevelBadge: React.FC<UrgencyLevelBadgeProps> = ({ level }) => {
  const getUrgencyStyles = () => {
    switch (level) {
      case 'critical':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'high':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className={`inline-flex items-center px-3 py-1 rounded-full border ${getUrgencyStyles()}`}>
      <AlertTriangle className="w-4 h-4 mr-1" />
      <span className="text-sm font-medium capitalize">{level}</span>
    </div>
  );
};

export default UrgencyLevelBadge;