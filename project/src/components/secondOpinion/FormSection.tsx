import React from 'react';
import OpinionForm from './OpinionForm';
import { type SecondOpinionRequest } from '../../types/secondOpinion';

interface FormSectionProps {
  onSubmit: (data: SecondOpinionRequest) => void;
}

const FormSection: React.FC<FormSectionProps> = ({ onSubmit }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Submit Your Case</h2>
      <OpinionForm onSubmit={onSubmit} />
    </div>
  );
};

export default FormSection;