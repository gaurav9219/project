import React, { useState } from 'react';
import { Link as LinkIcon, DollarSign, Users, TrendingUp, Copy, Check, Share2, BarChart3, Gift, Target, Zap, Award } from 'lucide-react';

interface AffiliatePageProps {
  isDarkMode: boolean;
}

const AffiliatePage: React.FC<AffiliatePageProps> = ({ isDarkMode }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const affiliateLink = 'https://quizhub.com/ref/your-unique-code';

  const stats = {
    totalEarnings: 2847.50,
    thisMonth: 456.75,
    referrals: 127,
    conversionRate: 12.5,
    clicks: 1024,
    pendingCommission: 189.25
  };

  const commissionTiers = [
    { referrals: '1-10', commission: '20%', bonus: '$0' },
    { referrals: '11-25', commission: '25%', bonus: '$50' },
    { referrals: '26-50', commission: '30%', bonus: '$150' },
    { referrals: '51+', commission: '35%', bonus: '$300' }
  ];

  const recentReferrals = [
    { id: 1, name: 'Sarah J.', date: '2025-01-15', status: 'Active', commission: '$12.50' },
    { id: 2, name: 'Michael C.', date: '2025-01-14', status: 'Active', commission: '$8.75' },
    { id: 3, name: 'Emma D.', date: '2025-01-13', status: 'Pending', commission: '$15.00' },
    { id: 4, name: 'David K.', date: '2025-01-12', status: 'Active', commission: '$22.25' },
    { id: 5, name: 'Lisa R.', date: '2025-01-11', status: 'Active', commission: '$18.50' }
  ];

  const marketingMaterials = [
    {
      type: 'Banner',
      title: 'QuizHub Hero Banner',
      size: '728x90',
      description: 'Perfect for website headers and blog posts',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      type: 'Social Media',
      title: 'Instagram Story Template',
      size: '1080x1920',
      description: 'Eye-catching design for social media promotion',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      type: 'Email',
      title: 'Email Newsletter Template',
      size: 'Responsive',
      description: 'Ready-to-use email template for your subscribers',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'materials', label: 'Marketing Materials', icon: Gift },
    { id: 'referrals', label: 'My Referrals', icon: Users },
    { id: 'payouts', label: 'Payouts', icon: DollarSign }
  ];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(affiliateLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <LinkIcon className="w-8 h-8 text-green-400 mr-3" />
          <h1 className={`text-3xl lg:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Affiliate Program
          </h1>
        </div>
        <p className={`text-lg ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
          Earn money by referring new users to QuizHub
        </p>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-600 via-teal-600 to-blue-700 rounded-2xl p-8 lg:p-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
        
        <div className="relative z-10 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Earn Up to 35% Commission
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of affiliates earning passive income by promoting QuizHub. 
            Get paid for every user you refer who becomes a premium member.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">35%</div>
              <div className="text-white/80">Max Commission</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">$300</div>
              <div className="text-white/80">Tier Bonus</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">30 days</div>
              <div className="text-white/80">Cookie Duration</div>
            </div>
          </div>
          
          <button className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            Join Affiliate Program
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6`}>
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-400" />
            </div>
            <span className="text-green-400 text-sm font-medium">+12.5%</span>
          </div>
          <div className="text-2xl font-bold text-green-400 mb-1">${stats.totalEarnings.toLocaleString()}</div>
          <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Total Earnings</div>
        </div>

        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6`}>
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-400" />
            </div>
            <span className="text-blue-400 text-sm font-medium">+8</span>
          </div>
          <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`}>{stats.referrals}</div>
          <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Total Referrals</div>
        </div>

        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6`}>
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-purple-400" />
            </div>
            <span className="text-purple-400 text-sm font-medium">+2.1%</span>
          </div>
          <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`}>{stats.conversionRate}%</div>
          <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Conversion Rate</div>
        </div>

        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6`}>
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-yellow-400" />
            </div>
            <span className="text-yellow-400 text-sm font-medium">+156</span>
          </div>
          <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`}>{stats.clicks}</div>
          <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Total Clicks</div>
        </div>
      </div>

      {/* Affiliate Link */}
      <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6`}>
        <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
          Your Affiliate Link
        </h3>
        <div className="flex gap-3">
          <input
            type="text"
            value={affiliateLink}
            readOnly
            className={`flex-1 ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border rounded-lg px-4 py-3 focus:outline-none`}
          />
          <button
            onClick={handleCopyLink}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copied!' : 'Copy'}
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
            <Share2 className="w-4 h-4" />
            Share
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-lg'
                : `${isDarkMode ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'}`
            }`}
          >
            <tab.icon className="w-5 h-5" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Commission Tiers */}
          <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6`}>
            <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
              Commission Tiers
            </h3>
            <div className="space-y-4">
              {commissionTiers.map((tier, index) => (
                <div key={index} className={`p-4 rounded-lg ${isDarkMode ? 'bg-slate-700' : 'bg-gray-50'} ${stats.referrals >= parseInt(tier.referrals.split('-')[0]) ? 'ring-2 ring-green-500' : ''}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {tier.referrals} Referrals
                    </span>
                    {stats.referrals >= parseInt(tier.referrals.split('-')[0]) && (
                      <Award className="w-5 h-5 text-green-400" />
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-green-400 font-bold text-lg">{tier.commission}</span>
                    <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                      Bonus: {tier.bonus}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6`}>
            <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
              How It Works
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                <div>
                  <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`}>Share Your Link</h4>
                  <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                    Share your unique affiliate link with friends, on social media, or your website
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                <div>
                  <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`}>Users Sign Up</h4>
                  <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                    When someone clicks your link and signs up for QuizHub, they become your referral
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                <div>
                  <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`}>Earn Commission</h4>
                  <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                    Earn commission on their premium subscriptions and quiz purchases
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'materials' && (
        <div className="space-y-6">
          <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Marketing Materials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketingMaterials.map((material, index) => (
              <div key={index} className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl overflow-hidden hover:shadow-lg transition-shadow`}>
                <img src={material.image} alt={material.title} className="w-full h-40 object-cover" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs px-2 py-1 rounded ${isDarkMode ? 'bg-slate-700 text-slate-300' : 'bg-gray-100 text-gray-600'}`}>
                      {material.type}
                    </span>
                    <span className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>
                      {material.size}
                    </span>
                  </div>
                  <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                    {material.title}
                  </h4>
                  <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'} mb-4`}>
                    {material.description}
                  </p>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors">
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'referrals' && (
        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6`}>
          <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
            Recent Referrals
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={`border-b ${isDarkMode ? 'border-slate-700' : 'border-gray-200'}`}>
                  <th className={`text-left py-3 px-4 font-medium ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>User</th>
                  <th className={`text-left py-3 px-4 font-medium ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Date</th>
                  <th className={`text-left py-3 px-4 font-medium ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Status</th>
                  <th className={`text-left py-3 px-4 font-medium ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Commission</th>
                </tr>
              </thead>
              <tbody>
                {recentReferrals.map((referral) => (
                  <tr key={referral.id} className={`border-b ${isDarkMode ? 'border-slate-700' : 'border-gray-200'}`}>
                    <td className={`py-3 px-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{referral.name}</td>
                    <td className={`py-3 px-4 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{referral.date}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                        referral.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {referral.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-green-400 font-bold">{referral.commission}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'payouts' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6`}>
            <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
              Payout Information
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Available Balance:</span>
                <span className="text-green-400 font-bold text-lg">${stats.thisMonth.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Pending Commission:</span>
                <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-bold`}>${stats.pendingCommission.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Minimum Payout:</span>
                <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-bold`}>$50.00</span>
              </div>
              <div className="flex justify-between">
                <span className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Next Payout:</span>
                <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-bold`}>Jan 31, 2025</span>
              </div>
            </div>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors mt-6">
              Request Payout
            </button>
          </div>

          <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6`}>
            <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
              Payment Methods
            </h3>
            <div className="space-y-4">
              <div className={`p-4 rounded-lg border-2 border-blue-500 ${isDarkMode ? 'bg-blue-500/10' : 'bg-blue-50'}`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>PayPal</h4>
                    <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>john.doe@email.com</p>
                  </div>
                  <span className="text-blue-500 text-sm font-bold">Primary</span>
                </div>
              </div>
              <button className={`w-full p-4 rounded-lg border-2 border-dashed ${isDarkMode ? 'border-slate-600 text-slate-400' : 'border-gray-300 text-gray-600'} hover:border-blue-500 hover:text-blue-500 transition-colors`}>
                + Add Payment Method
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AffiliatePage;