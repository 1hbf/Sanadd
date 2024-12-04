import { useState } from 'react';
import { type SecondOpinionRequest, type DoctorOpinion } from '../types/secondOpinion';
import { requestSecondOpinion } from '../services/secondOpinion';

export const useSecondOpinion = () => {
  const [opinions, setOpinions] = useState<DoctorOpinion[]>([]);
  const [loading, setLoading] = useState(false);

  const submitRequest = async (data: SecondOpinionRequest) => {
    setLoading(true);
    try {
      const response = await requestSecondOpinion(data);
      setOpinions(response);
    } catch (error) {
      console.error('Error requesting second opinion:', error);
      // Handle error appropriately
    } finally {
      setLoading(false);
    }
  };

  return {
    opinions,
    loading,
    submitRequest,
  };
};