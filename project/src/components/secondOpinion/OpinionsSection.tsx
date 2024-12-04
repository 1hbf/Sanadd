import React from 'react';
import DoctorOpinionCard from './DoctorOpinionCard';
import { type DoctorOpinion } from '../../types/secondOpinion';

interface OpinionsSectionProps {
  opinions: DoctorOpinion[];
  loading: boolean;
}

const OpinionsSection: React.FC<OpinionsSectionProps> = ({ opinions, loading }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Doctor Opinions</h2>
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      ) : opinions.length > 0 ? (
        opinions.map((opinion) => (
          <DoctorOpinionCard key={opinion.id} opinion={opinion} />
        ))
      ) : (
        <div className="bg-white rounded-lg shadow-md p-6 text-center text-gray-500">
          Submit your case to receive professional medical opinions
        </div>
      )}
    </div>
  );
};

export default OpinionsSection;