import React from 'react';
import { type TeamMember as TeamMemberType } from '../../types';

const TeamMember: React.FC<TeamMemberType> = ({ name, role }) => {
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();

  return (
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center mb-4">
        <span className="text-2xl font-bold text-white">{initials}</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      <p className="text-sm text-gray-600">{role}</p>
    </div>
  );
};

export default TeamMember;