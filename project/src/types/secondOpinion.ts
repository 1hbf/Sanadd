export interface PreviousCase {
  description: string;
  outcome: string;
  timeframe: string;
}

export interface DoctorOpinion {
  id: string;
  doctorName: string;
  specialization: string;
  opinion: string;
  recommendedTreatment: string;
  previousCases: PreviousCase[];
  date: string;
}

export interface SecondOpinionRequest {
  initialDiagnosis: string;
  symptoms: string;
  medicalHistory: string;
  currentMedications: string[];
  radiologyImages?: File[];
  medicalReport?: File;
  firstDoctorName: string;
  firstDoctorSpecialization: string;
}