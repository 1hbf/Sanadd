import { type SecondOpinionRequest, type DoctorOpinion } from '../types/secondOpinion';

// Mock data - In a real application, this would come from an API
const mockDoctorOpinions: DoctorOpinion[] = [
  {
    id: '1',
    doctorName: 'Dr. Sarah Johnson',
    specialization: 'Cardiology',
    opinion: 'Based on the provided symptoms and medical history, I concur with the initial diagnosis of hypertensive heart disease. The patient\'s symptoms align with typical presentations, but I recommend additional cardiac workup to rule out any concurrent conditions. The current medication regimen appears appropriate, though some adjustments might optimize outcomes.',
    recommendedTreatment: `1. Continue current antihypertensive medication
2. Add daily blood pressure monitoring and maintain a log
3. Schedule an echocardiogram within two weeks
4. Consider adding a low-dose beta-blocker if blood pressure remains elevated
5. Implement lifestyle modifications including sodium restriction and regular exercise`,
    previousCases: [
      {
        description: 'Similar case with a 52-year-old patient presented with resistant hypertension',
        outcome: 'Successfully managed with medication adjustment and lifestyle changes',
        timeframe: '6 months treatment duration'
      }
    ],
    date: '2024-03-15',
  },
  {
    id: '2',
    doctorName: 'Dr. Michael Chen',
    specialization: 'Internal Medicine',
    opinion: 'While I understand the initial diagnosis, the combination of symptoms suggests we should also consider secondary causes of hypertension. The patient\'s medical history and current presentation warrant a more comprehensive metabolic workup. I\'ve treated several similar cases where underlying endocrine disorders were contributing factors.',
    recommendedTreatment: `1. Maintain current antihypertensive medication
2. Add 24-hour ambulatory blood pressure monitoring
3. Complete endocrine panel including aldosterone-renin ratio
4. Renal artery duplex ultrasound to rule out stenosis
5. Weekly follow-up for the first month to monitor response`,
    previousCases: [
      {
        description: 'Patient with resistant hypertension found to have primary aldosteronism',
        outcome: 'Successful treatment with specific targeted therapy',
        timeframe: '3 months to achieve optimal control'
      }
    ],
    date: '2024-03-14',
  },
  {
    id: '3',
    doctorName: 'Dr. Emily Rodriguez',
    specialization: 'Endocrinology',
    opinion: 'The patient\'s presentation suggests possible endocrine involvement. The pattern of blood pressure variability and associated symptoms raises concern for underlying endocrine disorders that could be contributing to or causing the hypertension. A thorough endocrine workup would be valuable in this case.',
    recommendedTreatment: `1. Comprehensive endocrine evaluation including:
   - Thyroid function tests
   - 24-hour urinary catecholamines
   - Serum cortisol levels
2. Continue current antihypertensive regimen
3. Add detailed symptom diary
4. Schedule follow-up in 2 weeks with test results`,
    previousCases: [
      {
        description: 'Patient with refractory hypertension and subtle hyperthyroidism',
        outcome: 'Blood pressure normalized after treating thyroid condition',
        timeframe: '4 months total treatment duration'
      }
    ],
    date: '2024-03-13',
  }
];

export const requestSecondOpinion = async (data: SecondOpinionRequest): Promise<DoctorOpinion[]> => {
  // Simulate API call with more sophisticated response based on input
  return new Promise((resolve) => {
    setTimeout(() => {
      // In a real application, we would use the data parameter to customize the response
      const customizedOpinions = mockDoctorOpinions.map(opinion => ({
        ...opinion,
        opinion: opinion.opinion.replace(
          'the initial diagnosis',
          `the initial diagnosis of ${data.initialDiagnosis}`
        )
      }));
      resolve(customizedOpinions);
    }, 1500);
  });
};