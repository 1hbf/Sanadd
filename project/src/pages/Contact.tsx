import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const contactEmails = [
  {
    name: 'Salman Alsaml',
    email: 'salmanhb1052@gmail.com',
    role: 'Chief Operations Officer',
  },
  {
    name: 'Meshal Alsbah',
    email: 'meshal.alsabbah@gmail.com',
    role: 'Chief Technology Officer',
  },
  {
    name: 'Abdulaziz Alamre',
    email: 'azp2.a3@gmail.com',
    role: 'Chief Medical Officer',
  },
  {
    name: 'Hisham Alnabulsiyyah',
    email: 'abo3tb0092@gmail.com',
    role: 'Chief Executive Officer',
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Get in touch with our team for any inquiries or support
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Phone Support</p>
                    <p className="text-sm text-gray-600">24/7 Emergency Support</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Location</p>
                    <p className="text-sm text-gray-600">Riyadh, Saudi Arabia</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Business Hours</p>
                    <p className="text-sm text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Contact Cards */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactEmails.map((contact) => (
                <div
                  key={contact.email}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{contact.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{contact.role}</p>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-blue-600 hover:text-blue-800 text-sm break-all"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 text-center">
            How Can We Help?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <h3 className="font-medium text-gray-900 mb-2">Technical Support</h3>
              <p className="text-sm text-gray-600">
                For platform-related issues and technical assistance
              </p>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-900 mb-2">Medical Inquiries</h3>
              <p className="text-sm text-gray-600">
                For medical-related questions and consultations
              </p>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-900 mb-2">Partnerships</h3>
              <p className="text-sm text-gray-600">
                For business collaborations and partnerships
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;