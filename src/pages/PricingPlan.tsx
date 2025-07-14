import React, { useState } from 'react';
import { CreditCard, Check, X, Star, Zap, Crown, Gift, Users, BarChart3, Shield, Headphones } from 'lucide-react';

interface PricingPlanProps {
  isDarkMode: boolean;
}

const PricingPlan: React.FC<PricingPlanProps> = ({ isDarkMode }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const plans = [
    {
      id: 'free',
      name: 'Free',
      description: 'Perfect for getting started',
      icon: Gift,
      color: 'text-gray-400',
      bgColor: 'bg-gray-500/20',
      price: { monthly: 0, yearly: 0 },
      features: [
        { name: 'Create up to 5 quizzes', included: true },
        { name: 'Basic quiz templates', included: true },
        { name: 'Community support', included: true },
        { name: 'Basic analytics', included: true },
        { name: 'Public quiz sharing', included: true },
        { name: 'Custom branding', included: false },
        { name: 'Advanced analytics', included: false },
        { name: 'Priority support', included: false },
        { name: 'Team collaboration', included: false },
        { name: 'API access', included: false }
      ],
      popular: false,
      cta: 'Get Started Free'
    },
    {
      id: 'pro',
      name: 'Pro',
      description: 'Best for individual creators',
      icon: Zap,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      price: { monthly: 19, yearly: 190 },
      features: [
        { name: 'Unlimited quizzes', included: true },
        { name: 'Premium templates', included: true },
        { name: 'Advanced analytics', included: true },
        { name: 'Custom branding', included: true },
        { name: 'Priority support', included: true },
        { name: 'Export results', included: true },
        { name: 'Team collaboration (5 members)', included: true },
        { name: 'API access', included: false },
        { name: 'White-label solution', included: false },
        { name: 'Dedicated account manager', included: false }
      ],
      popular: true,
      cta: 'Start Pro Trial'
    },
    {
      id: 'business',
      name: 'Business',
      description: 'Perfect for teams and businesses',
      icon: Users,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      price: { monthly: 49, yearly: 490 },
      features: [
        { name: 'Everything in Pro', included: true },
        { name: 'Unlimited team members', included: true },
        { name: 'Advanced team analytics', included: true },
        { name: 'API access', included: true },
        { name: 'Custom integrations', included: true },
        { name: 'Advanced security features', included: true },
        { name: 'Bulk operations', included: true },
        { name: 'White-label solution', included: false },
        { name: 'Dedicated account manager', included: false },
        { name: 'Custom SLA', included: false }
      ],
      popular: false,
      cta: 'Start Business Trial'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large organizations',
      icon: Crown,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20',
      price: { monthly: 'Custom', yearly: 'Custom' },
      features: [
        { name: 'Everything in Business', included: true },
        { name: 'White-label solution', included: true },
        { name: 'Dedicated account manager', included: true },
        { name: 'Custom SLA', included: true },
        { name: 'On-premise deployment', included: true },
        { name: 'Custom development', included: true },
        { name: 'Advanced security & compliance', included: true },
        { name: 'Training & onboarding', included: true },
        { name: '24/7 phone support', included: true },
        { name: 'Custom reporting', included: true }
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const addOns = [
    {
      name: 'Additional Team Members',
      description: 'Add more team members to your account',
      price: '$5/month per member',
      icon: Users
    },
    {
      name: 'Advanced Analytics',
      description: 'Detailed insights and custom reports',
      price: '$15/month',
      icon: BarChart3
    },
    {
      name: 'Priority Support',
      description: '24/7 priority customer support',
      price: '$25/month',
      icon: Headphones
    },
    {
      name: 'Security Package',
      description: 'Enhanced security features and compliance',
      price: '$35/month',
      icon: Shield
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for all paid plans. No credit card required to start.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time. You\'ll continue to have access until the end of your billing period.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee for all paid plans if you\'re not satisfied.'
    }
  ];

  const getYearlySavings = (monthlyPrice: number) => {
    const yearlyPrice = monthlyPrice * 10; // 2 months free
    const monthlyCost = monthlyPrice * 12;
    return monthlyCost - yearlyPrice;
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <CreditCard className="w-8 h-8 text-blue-400 mr-3" />
          <h1 className={`text-3xl lg:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Pricing Plans
          </h1>
        </div>
        <p className={`text-lg ${isDarkMode ? 'text-slate-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
          Choose the perfect plan for your quiz creation needs. Start free and upgrade as you grow.
        </p>
      </div>

      {/* Billing Toggle */}
      <div className="flex items-center justify-center">
        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-gray-100'} rounded-lg p-1 flex`}>
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
              billingCycle === 'monthly'
                ? 'bg-blue-600 text-white shadow-lg'
                : `${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('yearly')}
            className={`px-6 py-2 rounded-md font-medium transition-all duration-200 relative ${
              billingCycle === 'yearly'
                ? 'bg-blue-600 text-white shadow-lg'
                : `${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`
            }`}
          >
            Yearly
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
              Save 17%
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative ${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl ${
              plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  Most Popular
                </span>
              </div>
            )}

            <div className="text-center mb-6">
              <div className={`w-16 h-16 ${plan.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <plan.icon className={`w-8 h-8 ${plan.color}`} />
              </div>
              <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                {plan.name}
              </h3>
              <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'} mb-4`}>
                {plan.description}
              </p>
              
              <div className="mb-4">
                {typeof plan.price[billingCycle] === 'number' ? (
                  <>
                    <span className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      ${plan.price[billingCycle]}
                    </span>
                    <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                    {billingCycle === 'yearly' && plan.price.monthly > 0 && (
                      <div className="text-green-400 text-sm font-medium mt-1">
                        Save ${getYearlySavings(plan.price.monthly)}/year
                      </div>
                    )}
                  </>
                ) : (
                  <span className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price[billingCycle]}
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-3 mb-6">
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  {feature.included ? (
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  ) : (
                    <X className={`w-5 h-5 ${isDarkMode ? 'text-slate-600' : 'text-gray-300'} mr-3 flex-shrink-0`} />
                  )}
                  <span className={`text-sm ${feature.included ? (isDarkMode ? 'text-white' : 'text-gray-900') : (isDarkMode ? 'text-slate-500' : 'text-gray-400')}`}>
                    {feature.name}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setSelectedPlan(plan.id)}
              className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                plan.popular
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                  : `${isDarkMode ? 'bg-slate-700 hover:bg-slate-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`
              }`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>

      {/* Add-ons */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Add-ons & Extensions
          </h2>
          <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
            Enhance your plan with additional features and capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {addOns.map((addon, index) => (
            <div key={index} className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6 text-center hover:shadow-lg transition-shadow`}>
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <addon.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                {addon.name}
              </h3>
              <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'} mb-4`}>
                {addon.description}
              </p>
              <div className="text-blue-400 font-bold mb-4">{addon.price}</div>
              <button className={`w-full py-2 rounded-lg font-medium transition-colors ${isDarkMode ? 'bg-slate-700 hover:bg-slate-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}>
                Add to Plan
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6`}>
              <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                {faq.question}
              </h3>
              <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-2xl p-8`}>
          <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Still have questions?
          </h2>
          <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} mb-6`}>
            Our team is here to help you choose the right plan for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Sales
            </button>
            <button className={`${isDarkMode ? 'bg-slate-700 hover:bg-slate-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'} px-8 py-3 rounded-lg font-semibold transition-colors`}>
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;