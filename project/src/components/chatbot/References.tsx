import React from 'react';
import { BookOpen } from 'lucide-react';
import { type MedicalReference } from '../../types/chatbot';

interface ReferencesProps {
  references: MedicalReference[];
}

const References: React.FC<ReferencesProps> = ({ references }) => {
  if (references.length === 0) return null;

  return (
    <div className="mt-4 rounded-lg bg-gray-50 p-4">
      <h3 className="flex items-center text-sm font-medium text-gray-900 mb-2">
        <BookOpen className="h-4 w-4 mr-2" />
        Medical References
      </h3>
      <ul className="space-y-2">
        {references.map((ref, index) => (
          <li key={index} className="text-sm">
            <a
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {ref.title}
            </a>
            <span className="text-gray-500">
              {' '}
              - {ref.source} ({ref.year})
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default References;