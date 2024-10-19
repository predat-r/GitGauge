import React from "react";
import {
  GitBranch,
  BarChart2,
  Users,
  Shield,
  ArrowRight,
  Check,
} from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Navigation */}
      <nav className="fixed w-full bg-[var(--background)]/80 backdrop-blur-md z-50 ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <GitBranch className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold">GitGauge</span>
            </div>

            <div className="hidden md:flex items-center space-x-8 ">
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#docs">Documentation</a>
              <button className="px-4 py-2">Sign In</button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-5xl font-bold  mb-6">
              Measure What Matters in Your Development Process
            </h1>
            <p className="text-xl mb-8">
              GitGauge helps engineering teams track performance, improve code
              quality, and make data-driven decisions with powerful Git
              analytics.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="px-8 py-3 border border-gray-200 rounded-lg hover:border-gray-300">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-800  mb-2">
                10,000+
              </div>
              <div>Repositories Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-800 mb-2">
                50,000+
              </div>
              <div>Developers Tracked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-800 mb-2">99.9%</div>
              <div>Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 dark:bg-[#0d0d0d] px-6" id="features">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything You Need to Optimize Your Development Workflow
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="dark:bg-black p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart2 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Performance Analytics
              </h3>
              <p>
                Track commit patterns, code quality metrics, and developer
                productivity across all your repositories.
              </p>
            </div>

            <div className="dark:bg-black p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Team Insights</h3>
              <p>
                Understand team dynamics, collaboration patterns, and identify
                areas for improvement.
              </p>
            </div>

            <div className="dark:bg-black p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className=" text-xl font-semibold mb-2">Code Quality</h3>
              <p>
                Monitor code quality trends and ensure high standards across
                your codebase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6" id="pricing">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Simple, Transparent Pricing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-xl p-8">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Starter</h3>
                <div className="text-3xl font-bold">
                  $29
                  <span className="text-gray-500 text-lg font-normal">/mo</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Up to 5 repositories</span>
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
              <button className="w-full py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
                Start Trial
              </button>
            </div>

            <div className="border-2 border-blue-600 rounded-xl p-8 relative">
              <div className="absolute top-0 right-6 transform -translate-y-1/2">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  Popular
                </span>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Team</h3>
                <div className="text-3xl font-bold">
                  $99
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
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>1-year history</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Team reports</span>
                </li>
              </ul>
              <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Start Trial
              </button>
            </div>

            <div className="border border-gray-200 rounded-xl p-8">
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
              <button className="w-full py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Start Optimizing Your Development Process Today
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Join thousands of teams who use GitGauge to improve their
            development workflow.
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50">
            Start Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Roadmap</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
