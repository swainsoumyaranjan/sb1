import React from 'react';
import { Check } from 'lucide-react';

export function Pricing() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
        <p className="text-xl text-gray-600">Choose the plan that best fits your needs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingCard
          name="Free"
          price="$0"
          description="Perfect for getting started"
          features={[
            '10 GIF conversions per month',
            'Basic watermark options',
            'Standard quality exports',
            'Manual tagging'
          ]}
        />
        <PricingCard
          name="Pro"
          price="$9.99"
          description="For content creators"
          features={[
            'Unlimited GIF conversions',
            'Advanced watermark options',
            'HD quality exports',
            'AI-powered tagging',
            'Priority support'
          ]}
          highlighted
        />
        <PricingCard
          name="Business"
          price="$24.99"
          description="For teams and businesses"
          features={[
            'Everything in Pro',
            'Team collaboration',
            'Custom branding',
            'API access',
            'Dedicated support'
          ]}
        />
      </div>
    </div>
  );
}

function PricingCard({ 
  name, 
  price, 
  description, 
  features, 
  highlighted = false 
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}) {
  return (
    <div className={`rounded-xl p-8 ${
      highlighted 
        ? 'bg-indigo-600 text-white ring-4 ring-indigo-600 ring-offset-2' 
        : 'bg-white text-gray-900 shadow-sm'
    }`}>
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <div className="flex items-baseline gap-1 mb-4">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-sm">/month</span>
      </div>
      <p className={`mb-6 ${highlighted ? 'text-indigo-100' : 'text-gray-600'}`}>
        {description}
      </p>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className={`w-5 h-5 ${
              highlighted ? 'text-indigo-200' : 'text-indigo-600'
            }`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-2 rounded-lg transition ${
        highlighted
          ? 'bg-white text-indigo-600 hover:bg-indigo-50'
          : 'bg-indigo-600 text-white hover:bg-indigo-700'
      }`}>
        Get Started
      </button>
    </div>
  );
}