import React, { useState } from 'react';
import { Upload, Plus, X } from 'lucide-react';
import { type SecondOpinionRequest } from '../../types/secondOpinion';

interface OpinionFormProps {
  onSubmit: (data: SecondOpinionRequest) => void;
}

const OpinionForm: React.FC<OpinionFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<SecondOpinionRequest>({
    initialDiagnosis: '',
    symptoms: '',
    medicalHistory: '',
    currentMedications: [''],
    firstDoctorName: '',
    firstDoctorSpecialization: '',
  });
  const [radiologyImages, setRadiologyImages] = useState<File[]>([]);
  const [medicalReport, setMedicalReport] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      radiologyImages,
      medicalReport: medicalReport || undefined,
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setRadiologyImages([...radiologyImages, ...Array.from(e.target.files)]);
    }
  };

  const removeImage = (index: number) => {
    setRadiologyImages(radiologyImages.filter((_, i) => i !== index));
  };

  const addMedication = () => {
    setFormData({
      ...formData,
      currentMedications: [...formData.currentMedications, ''],
    });
  };

  const removeMedication = (index: number) => {
    setFormData({
      ...formData,
      currentMedications: formData.currentMedications.filter((_, i) => i !== index),
    });
  };

  const updateMedication = (index: number, value: string) => {
    const newMedications = [...formData.currentMedications];
    newMedications[index] = value;
    setFormData({ ...formData, currentMedications: newMedications });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstDoctorName" className="block text-sm font-medium text-gray-700">
            First Doctor's Name
          </label>
          <input
            type="text"
            id="firstDoctorName"
            value={formData.firstDoctorName}
            onChange={(e) => setFormData({ ...formData, firstDoctorName: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="firstDoctorSpecialization" className="block text-sm font-medium text-gray-700">
            First Doctor's Specialization
          </label>
          <input
            type="text"
            id="firstDoctorSpecialization"
            value={formData.firstDoctorSpecialization}
            onChange={(e) => setFormData({ ...formData, firstDoctorSpecialization: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="initialDiagnosis" className="block text-sm font-medium text-gray-700">
          Initial Diagnosis
        </label>
        <textarea
          id="initialDiagnosis"
          value={formData.initialDiagnosis}
          onChange={(e) => setFormData({ ...formData, initialDiagnosis: e.target.value })}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700">
          Current Symptoms
        </label>
        <textarea
          id="symptoms"
          value={formData.symptoms}
          onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="medicalHistory" className="block text-sm font-medium text-gray-700">
          Medical History
        </label>
        <textarea
          id="medicalHistory"
          value={formData.medicalHistory}
          onChange={(e) => setFormData({ ...formData, medicalHistory: e.target.value })}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Current Medications
        </label>
        {formData.currentMedications.map((medication, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={medication}
              onChange={(e) => updateMedication(index, e.target.value)}
              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Medication name and dosage"
            />
            <button
              type="button"
              onClick={() => removeMedication(index)}
              className="p-2 text-red-600 hover:text-red-800"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addMedication}
          className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add Medication
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Radiology Images
        </label>
        <div className="mt-1 flex flex-wrap gap-4">
          {radiologyImages.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={URL.createObjectURL(image)}
                alt={`Radiology ${index + 1}`}
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

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Medical Report
        </label>
        <div className="mt-1 flex items-center">
          <label
            htmlFor="medical-report"
            className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <Upload className="h-5 w-5 mr-2 text-gray-500" />
            Upload Report
          </label>
          <input
            type="file"
            id="medical-report"
            className="hidden"
            accept=".pdf,.doc,.docx"
            onChange={(e) => e.target.files && setMedicalReport(e.target.files[0])}
          />
          {medicalReport && (
            <span className="ml-3 text-sm text-gray-500">{medicalReport.name}</span>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Request Second Opinion
      </button>
    </form>
  );
};

export default OpinionForm;