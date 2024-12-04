import { type Hospital } from './hospital';

export interface EmergencyCase {
  ambulanceType: 'redCrescent' | 'hospital';
  hospitalName?: string;
  patientCondition: string;
  images: File[];
  location: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

export interface EmergencyHospital extends Hospital {
  emergencyLevel: number;
  staffAvailability: number;
  equipmentLevel: number;
  estimatedArrivalTime: string;
}