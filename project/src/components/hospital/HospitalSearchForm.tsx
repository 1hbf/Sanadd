import React, { useState } from 'react';
import { Upload, MapPin } from 'lucide-react';
import { type HospitalSearchFormProps, type PatientInfo } from '../../types/hospital';
import LocationInput from './LocationInput';
import UrgencyLevelBadge from './UrgencyLevelBadge';

const HospitalSearchForm: React.FC<HospitalSearchFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<PatientInfo>({
    name: '',
    condition: '',
    location: '',
    urgencyLevel: 'medium',
    hasInsurance: false,
    insuranceDetails: '',
  });
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...formData, medicalReport: file || undefined });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Patient Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="urgencyLevel" className="block text-sm font-medium text-gray-700 mb-1">
          Urgency Level
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {(['low', 'medium', 'high', 'critical'] as const).map((level) => (
            <button
              key={level}
              type="button"
              onClick={() => setFormData({ ...formData, urgencyLevel: level })}
              className={`p-2 rounded-md border ${
                formData.urgencyLevel === level
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-300 hover:border-blue-300'
              }`}
            >
              <UrgencyLevelBadge level={level} />
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="condition" className="block text-sm font-medium text-gray-700">
          Current Condition
        </label>
        <textarea
          id="condition"
          value={formData.condition}
          onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Location</label>
        <LocationInput
          value={formData.location}
          onChange={(value) => setFormData({ ...formData, location: value })}
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="hasInsurance"
            checked={formData.hasInsurance}
            onChange={(e) => setFormData({ ...formData, hasInsurance: e.target.checked })}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="hasInsurance" className="ml-2 block text-sm text-gray-700">
            I have health insurance
          </label>
        </div>

        {formData.hasInsurance && (
          <div className="ml-6">
            <label htmlFor="insuranceDetails" className="block text-sm font-medium text-gray-700">
              Insurance Details
            </label>
            <input
              type="text"
              id="insuranceDetails"
              value={formData.insuranceDetails}
              onChange={(e) => setFormData({ ...formData, insuranceDetails: e.target.value })}
              placeholder="Insurance provider and policy number"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Medical Report (optional)
        </label>
        <div className="mt-1 flex items-center">
          <label
            htmlFor="medical-report"
            className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <Upload className="h-5 w-5 mr-2 text-gray-500" />
            Upload File
          </label>
          <input
            type="file"
            id="medical-report"
            className="hidden"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            onChange={handleFileChange}
          />
          {file && (
            <span className="ml-3 text-sm text-gray-500">{file.name}</span>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Search Hospitals
      </button>
    </form>
  );
};

export default HospitalSearchForm;