export interface PatientInfo {
  name: string;
  condition: string;
  location: string;
  medicalReport?: File;
  urgencyLevel: 'low' | 'medium' | 'high' | 'critical';
  hasInsurance: boolean;
  insuranceDetails?: string;
}

export interface Hospital {
  id: string;
  name: string;
  distance: string;
  waitTime: string;
  specialties: string[];
  availability: {
    beds: number;
    emergency: boolean;
    icu?: number;
  };
  rating: number;
}

export interface HospitalSearchFormProps {
  onSubmit: (data: PatientInfo) => void;
}

export interface LocationInputProps {
  value: string;
  onChange: (value: string) => void;
}

export interface HospitalCardProps {
  hospital: Hospital;
  onSelect: (hospital: Hospital) => void;
}

export interface UrgencyLevelBadgeProps {
  level: PatientInfo['urgencyLevel'];
}