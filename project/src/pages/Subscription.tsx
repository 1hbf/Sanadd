import React from 'react';
import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: {
      monthly: 99,
      annual: 990,
    },
    features: [
      'Basic hospital search',
      'Emergency case management',
      'Initial diagnosis assistance',
      'Email support',
    ],
  },
  {
    name: 'Professional',
    price: {
      monthly: 199,
      annual: 1990,
    },
    features: [
      'Advanced hospital search',
      'Priority emergency management',
      'AI-powered diagnosis assistance',
      '24/7 phone support',
      'Second opinion service',
      'Health insurance integration',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: {
      monthly: 399,
      annual: 3990,
    },
    features: [
      'Full platform access',
      'VIP emergency management',
      'Advanced AI diagnostics',
      'Dedicated support team',
      'Custom integration options',
      'Analytics and reporting',
      'Multi-user access',
    ],
  },
];

const Subscription = () => {
  const [billingCycle, setBillingCycle] = React.useState<'monthly' | 'annual'>('monthly');

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h1>
          <p className="text-xl text-gray-600">
            Select the perfect plan for your healthcare needs
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-1 inline-flex shadow-sm">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                billingCycle === 'monthly'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                billingCycle === 'annual'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Annual (Save 20%)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                plan.popular ? 'ring-2 ring-blue-600' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-blue-600 text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h2>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {billingCycle === 'monthly' ? plan.price.monthly : plan.price.annual} SAR
                  </span>
                  <span className="text-gray-600">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                </div>

                <ul className="space-y-4 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-2 px-4 rounded-md font-medium ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-600">
          <p>All plans include:</p>
          <div className="mt-4 flex flex-wrap justify-center gap-8">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-blue-600 mr-2" />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 text-blue-600 mr-2" />
              <span>24/7 customer support</span>
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 text-blue-600 mr-2" />
              <span>Secure payment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;