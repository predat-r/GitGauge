import React from "react";
import {
  BarChart2,
  Users,
  Shield,
  ArrowRight,
} from "lucide-react";
import Footer from "../components/footer";
import Pricing from "../components/pricing";
import Nav from "../components/landing-page-nav";

const LandingPage = async () => {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav></Nav>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-5xl font-bold  mb-6">
              Measure What Matters in Your Development Process
            </h1>
            <p className="text-xl mb-8">
              Git Gauge helps engineering teams track performance, improve code
              quality, and make data-driven decisions with powerful Git
              analytics.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
                <span>Start Analyzing</span>
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
              <div className="text-3xl font-bold text-blue-800 mb-2">99%</div>
              <div>Better Code</div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20  dark:bg-[#0a0a0a] px-6" id="features">
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
      <Pricing></Pricing>
      {/* CTA Section */}
      <section className="py-20 bg-blue-600 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Start Optimizing Your Development Process Today
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Join thousands of teams who use Git Gauge to improve their
            development workflow.
          </p>
          <button className="px-8 py-3 bg-white text-blue-700 dark:bg-white rounded-lg hover:bg-blue-50">
            Start Analyzing 
          </button>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default LandingPage;
