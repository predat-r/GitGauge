import { Check } from "lucide-react";
import React from "react";

const Pricing = () => {
  return (
    <section className="py-20 px-6" id="pricing">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Simple, Transparent Pricing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-gray-200 dark:border-gray-900 rounded-xl p-8">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Starter</h3>
              <div className="text-3xl font-bold">
                $0
                <span className="text-gray-500 text-lg font-normal">/mo</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-600" />
                <span>Up to 2 repositories</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-600" />
                <span>Basic analytics</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-600" />
                <span>30-day history</span>
              </li>
            </ul>
            <button className="w-full py-2 border border-blue-600 text-blue-600 rounded-lg mt-11  dark:hover:bg-gray-900 hover:bg-blue-50">
              Get Started
            </button>
          </div>

          <div className="border-2 border-blue-600 rounded-xl p-8 relative">
            <div className="absolute top-0 right-6 transform -translate-y-1/2">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                Popular
              </span>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Advanced</h3>
              <div className="text-3xl font-bold">
                $29
                <span className="text-gray-500 text-lg font-normal">/mo</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-600" />
                <span>Up to 20 repositories</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-600" />
                <span>Deep analytics</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-600" />
                <span>1-year history</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-600" />
                <span>AI reviews</span>
              </li>
            </ul>
            <button className="w-full py-2 bg-blue-600 text-white rounded-lg  hover:bg-blue-700">
              Start Trial
            </button>
          </div>

          <div className="border border-gray-200 dark:border-gray-900 rounded-xl p-8">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
              <div className="text-3xl font-bold">Custom</div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-600" />
                <span>Unlimited repositories</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-600" />
                <span>Custom analytics</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-600" />
                <span>Unlimited history</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-600" />
                <span>Priority support</span>
              </li>
            </ul>
            <button className="w-full py-2 border border-blue-600 text-blue-600 rounded-lg  dark:hover:bg-gray-900 hover:bg-blue-50">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
