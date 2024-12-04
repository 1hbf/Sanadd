import React, { useState } from 'react';
import { Upload, Plus, X, Ambulance, Building2 } from 'lucide-react';
import { type EmergencyCase } from '../../types/emergency';

interface EmergencyFormProps {
  onSubmit: (data: EmergencyCase) => void;
}

const EmergencyForm: React.FC<EmergencyFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<EmergencyCase>({
    ambulanceType: 'redCrescent',
    patientCondition: '',
    images: [],
    location: '',
    severity: 'medium',
  });
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files);
      setFormData(prev => ({
        ...prev,
        images: [...prev.images, ...newImages],
      }));

      // Create preview URLs
      const newPreviews = newImages.map(file => URL.createObjectURL(file));
      setPreviewImages(prev => [...prev, ...newPreviews]);
    }
  };

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
    URL.revokeObjectURL(previewImages[index]);
    setPreviewImages(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Ambulance Type
        </label>
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => setFormData({ ...formData, ambulanceType: 'redCrescent' })}
            className={`p-4 rounded-lg border-2 flex flex-col items-center ${
              formData.ambulanceType === 'redCrescent'
                ? 'border-red-500 bg-red-50'
                : 'border-gray-200 hover:border-red-300'
            }`}
          >
            <Ambulance className={`h-8 w-8 ${
              formData.ambulanceType === 'redCrescent' ? 'text-red-500' : 'text-gray-400'
            }`} />
            <span className="mt-2 font-medium">Red Crescent</span>
          </button>

          <button
            type="button"
            onClick={() => setFormData({ ...formData, ambulanceType: 'hospital' })}
            className={`p-4 rounded-lg border-2 flex flex-col items-center ${
              formData.ambulanceType === 'hospital'
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            <Building2 className={`h-8 w-8 ${
              formData.ambulanceType === 'hospital' ? 'text-blue-500' : 'text-gray-400'
            }`} />
            <span className="mt-2 font-medium">Hospital Ambulance</span>
          </button>
        </div>
      </div>

      {formData.ambulanceType === 'hospital' && (
        <div>
          <label htmlFor="hospitalName" className="block text-sm font-medium text-gray-700">
            Hospital Name
          </label>
          <input
            type="text"
            id="hospitalName"
            value={formData.hospitalName || ''}
            onChange={(e) => setFormData({ ...formData, hospitalName: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
      )}

      <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
          Current Location
        </label>
        <input
          type="text"
          id="location"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="severity" className="block text-sm font-medium text-gray-700">
          Case Severity
        </label>
        <select
          id="severity"
          value={formData.severity}
          onChange={(e) => setFormData({ ...formData, severity: e.target.value as EmergencyCase['severity'] })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="critical">Critical</option>
        </select>
      </div>

      <div>
        <label htmlFor="patientCondition" className="block text-sm font-medium text-gray-700">
          Patient's Condition
        </label>
        <textarea
          id="patientCondition"
          value={formData.patientCondition}
          onChange={(e) => setFormData({ ...formData, patientCondition: e.target.value })}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Case Images
        </label>
        <div className="mt-1 flex flex-wrap gap-4">
          {previewImages.map((preview, index) => (
            <div key={index} className="relative">
              <img
                src={preview}
                alt={`Case ${index + 1}`}
                className="h-24 w-24 object-cover rounded-lg"
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute -top-2 -right-2 p-1 bg-red-100 rounded-full text-red-600 hover:text-red-800"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
          <label className="h-24 w-24 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <Plus className="h-8 w-8 text-gray-400" />
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Find Suitable Hospitals
      </button>
    </form>
  );
};

export default EmergencyForm;