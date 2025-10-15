import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 animate-bounce">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h1 className="text-5xl font-bold mb-4 animate-fade-in">
              Beneficiary Credit Scoring Dashboard
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Empowering smarter, fairer lending decisions through AI-powered credit assessment
            </p>
          </div>
        </div>
      </div>

      <div className="container-max py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Overview Card */}
          <div className="card p-8 mb-8 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">What is this platform?</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  The Beneficiary Credit Scoring Dashboard is a cutting-edge automation system designed for digital lending 
                  platforms. It revolutionizes the credit assessment process by seamlessly collecting beneficiary financial 
                  information, analyzing it through advanced AI algorithms, and delivering clear, explainable credit scoring 
                  results in real-time.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="card p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-green-500">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast & Efficient</h3>
              <p className="text-gray-600">Reduce credit assessment time from days to minutes with automated processing</p>
            </div>
            <div className="card p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-blue-500">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Accurate Decisions</h3>
              <p className="text-gray-600">AI-powered scoring ensures fair and data-driven lending decisions</p>
            </div>
            <div className="card p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-purple-500">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Full Transparency</h3>
              <p className="text-gray-600">Explainable AI provides clear reasoning for every credit decision</p>
            </div>
          </div>

          {/* How It Works */}
          <div className="card p-8 mb-8 bg-gradient-to-br from-white to-blue-50">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How It Works</h2>
            <div className="space-y-6">
              {[
                { step: '01', title: 'Data Collection', desc: 'Beneficiaries submit financial information through an intuitive, user-friendly form', icon: '📝', color: 'blue' },
                { step: '02', title: 'AI Analysis', desc: 'Advanced algorithms process data to calculate repayment, income, and composite credit scores', icon: '🤖', color: 'purple' },
                { step: '03', title: 'Risk Assessment', desc: 'System assigns appropriate risk bands based on comprehensive financial analysis', icon: '📊', color: 'yellow' },
                { step: '04', title: 'Loan Recommendation', desc: 'Generates personalized loan amounts, interest rates, and tenure recommendations', icon: '💰', color: 'green' },
                { step: '05', title: 'Decision Output', desc: 'Provides final decision (Auto-Approve/Manual Review/Reject) with detailed explanations', icon: '✅', color: 'red' },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-6 group">
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br from-${item.color}-400 to-${item.color}-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">{item.icon}</span>
                      <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Powerful Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '📊', title: 'Visual Analytics', desc: 'Interactive charts and gauges', gradient: 'from-blue-500 to-cyan-500' },
                { icon: '🎯', title: 'Smart Scoring', desc: 'Multi-factor AI analysis', gradient: 'from-green-500 to-emerald-500' },
                { icon: '📝', title: 'Explainable AI', desc: 'Transparent decision-making', gradient: 'from-purple-500 to-pink-500' },
                { icon: '💾', title: 'Data Management', desc: 'Historical record tracking', gradient: 'from-yellow-500 to-orange-500' },
                { icon: '⚡', title: 'Real-time Processing', desc: 'Instant credit decisions', gradient: 'from-red-500 to-pink-500' },
                { icon: '🔒', title: 'Secure & Private', desc: 'Bank-level security', gradient: 'from-indigo-500 to-purple-500' },
                { icon: '📱', title: 'Responsive Design', desc: 'Works on any device', gradient: 'from-teal-500 to-green-500' },
                { icon: '🌐', title: 'Cloud Ready', desc: 'Scalable architecture', gradient: 'from-sky-500 to-blue-500' },
              ].map((feature, index) => (
                <div key={index} className="card p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:rotate-12 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div className="card p-8 mb-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">Built With Modern Technology</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'React', icon: '⚛️' },
                { name: 'TypeScript', icon: '📘' },
                { name: 'Tailwind CSS', icon: '🎨' },
                { name: 'Recharts', icon: '📈' },
                { name: 'Python', icon: '🐍' },
                { name: 'FastAPI', icon: '⚡' },
                { name: 'SQLite', icon: '💾' },
                { name: 'Vite', icon: '⚡' },
              ].map((tech, index) => (
                <div key={index} className="text-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300">
                  <div className="text-4xl mb-2">{tech.icon}</div>
                  <div className="font-semibold">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className="card p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Perfect For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                '🏦 Microfinance Institutions',
                '💳 Digital Lending Platforms',
                '🏢 NBFCs (Non-Banking Financial Companies)',
                '🏛️ Banks and Credit Unions',
                '🌾 Agricultural Finance',
                '🎓 Education Loan Providers',
                '🏘️ Housing Finance Companies',
                '🏛️ Government Subsidy Programs',
              ].map((useCase, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg hover:shadow-md transition-shadow duration-300">
                  <div className="text-2xl">{useCase.split(' ')[0]}</div>
                  <span className="font-medium text-gray-800">{useCase.substring(3)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="card p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl font-bold text-blue-600 mb-2">99%</div>
              <div className="text-gray-600 font-medium">Accuracy Rate</div>
            </div>
            <div className="card p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl font-bold text-green-600 mb-2">&lt;2min</div>
              <div className="text-gray-600 font-medium">Processing Time</div>
            </div>
            <div className="card p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Availability</div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center py-12 border-t border-gray-200">
            <div className="inline-flex items-center justify-center gap-2 text-gray-600 text-lg mb-4">
              <span>Built with</span>
              <span className="text-red-500 text-2xl animate-pulse">❤️</span>
              <span>for smarter, fairer lending decisions</span>
            </div>
            <p className="text-gray-500 text-sm">
              Empowering financial inclusion through technology
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
