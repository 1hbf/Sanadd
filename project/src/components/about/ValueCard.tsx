import React from 'react';
import { type IconProps } from 'lucide-react';

interface ValueCardProps {
  title: string;
  description: string;
  Icon: React.FC<IconProps>;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description, Icon }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <Icon className="h-8 w-8 text-blue-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ValueCard;