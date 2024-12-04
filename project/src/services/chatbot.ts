import { type BotResponse } from '../types/chatbot';

const mockResponses: Record<string, BotResponse> = {
  'headache': {
    message: "Based on general symptoms of headache, there could be several causes ranging from tension to migraine. It's important to note the frequency, intensity, and any accompanying symptoms. Common remedies include rest, hydration, and over-the-counter pain relievers. However, if headaches are severe or persistent, medical evaluation is recommended.",
    references: [
      {
        title: "Headache Classification and Diagnosis",
        source: "International Headache Society",
        url: "https://example.com/headache-classification",
        year: 2024
      }
    ],
    relatedQuestions: [
      "How can I prevent tension headaches?",
      "What are the warning signs of a migraine?",
      "When should I see a doctor for headaches?"
    ],
    specialistOpinions: [
      {
        doctorName: "Dr. James Wilson",
        specialization: "Neurology",
        opinion: "Frequent headaches should be evaluated for underlying causes. Keep a headache diary noting triggers and symptoms."
      }
    ]
  },
  'fever': {
    message: "Fever is often a sign that your body is fighting an infection. For adults, a temperature above 38°C (100.4°F) is considered a fever. While fever itself isn't usually dangerous, it's important to stay hydrated and monitor other symptoms.",
    references: [
      {
        title: "Fever Management Guidelines",
        source: "World Health Organization",
        url: "https://example.com/fever-guidelines",
        year: 2024
      }
    ],
    relatedQuestions: [
      "When should I worry about a fever?",
      "How can I reduce fever naturally?",
      "What are common causes of fever?"
    ],
    specialistOpinions: [
      {
        doctorName: "Dr. Sarah Chen",
        specialization: "Internal Medicine",
        opinion: "Most fevers resolve on their own within a few days. Seek medical attention if fever persists or is accompanied by severe symptoms."
      }
    ]
  }
};

export const getBotResponse = async (message: string): Promise<BotResponse> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Simple keyword matching (in a real app, this would use NLP)
  const keywords = ['headache', 'fever'];
  const matchedKeyword = keywords.find(keyword => 
    message.toLowerCase().includes(keyword)
  );

  return matchedKeyword ? mockResponses[matchedKeyword] : {
    message: "I understand you have a medical concern. While I can provide general information, it's important to consult with a healthcare provider for personalized medical advice. Could you provide more specific details about your symptoms?",
    references: [],
    relatedQuestions: [
      "What symptoms are you experiencing?",
      "How long have you had these symptoms?",
      "Have you had any similar conditions before?"
    ]
  };
};