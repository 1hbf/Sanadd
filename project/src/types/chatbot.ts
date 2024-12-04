import { type LucideIcon } from 'lucide-react';

export interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

export interface SuggestedQuestion {
  id: string;
  text: string;
  icon: LucideIcon;
}

export interface MedicalReference {
  title: string;
  source: string;
  url: string;
  year: number;
}

export interface BotResponse {
  message: string;
  references: MedicalReference[];
  relatedQuestions: string[];
  specialistOpinions?: {
    doctorName: string;
    specialization: string;
    opinion: string;
  }[];
}