import React from 'react';
import { UserCircle, Calendar, CheckCircle2 } from 'lucide-react';
import { type DoctorOpinion } from '../../types/secondOpinion';

interface DoctorOpinionCardProps {
  opinion: DoctorOpinion;
}

const DoctorOpinionCard: React.FC<DoctorOpinionCardProps> = ({ opinion }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center">
          <UserCircle className="h-10 w-10 text-blue-600 mr-3" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{opinion.doctorName}</h3>
            <p className="text-sm text-gray-600">{opinion.specialization}</p>
          </div>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Calendar className="h-4 w-4 mr-1" />
          {opinion.date}
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Professional Opinion</h4>
          <p className="text-gray-600 bg-gray-50 p-4 rounded-md">{opinion.opinion}</p>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Recommended Treatment Plan</h4>
          <div className="bg-gray-50 p-4 rounded-md">
            {opinion.recommendedTreatment.split('\n').map((step, index) => (
              <div key={index} className="flex items-start mb-2 last:mb-0">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">{step}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Similar Cases & Outcomes</h4>
          <div className="space-y-4">
            {opinion.previousCases.map((case_, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-md">
                <p className="text-gray-600 mb-2">{case_.description}</p>
                <div className="flex flex-col sm:flex-row sm:justify-between text-sm">
                  <span className="text-green-600 font-medium">Outcome: {case_.outcome}</span>
                  <span className="text-gray-500">Duration: {case_.timeframe}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorOpinionCard;