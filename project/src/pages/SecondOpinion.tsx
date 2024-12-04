import React from 'react';
import PageHeader from '../components/secondOpinion/PageHeader';
import FormSection from '../components/secondOpinion/FormSection';
import OpinionsSection from '../components/secondOpinion/OpinionsSection';
import { useSecondOpinion } from '../hooks/useSecondOpinion';

const SecondOpinion = () => {
  const { opinions, loading, submitRequest } = useSecondOpinion();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FormSection onSubmit={submitRequest} />
          <OpinionsSection opinions={opinions} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default SecondOpinion;