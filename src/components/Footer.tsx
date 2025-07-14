import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  const quickLinks = [
    'Dashboard',
    'Create Quiz',
    'Leaderboard',
    'Affiliate Program',
    'Pricing'
  ];

  const categories = [
    'Science',
    'History',
    'Mathematics',
    'Literature',
    'Sports'
  ];

  return (
    <footer className={`${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-gray-100 border-gray-200'} border-t lg:ml-64`}>
      {/* Main footer content */}
      <div className="px-4 lg:px-8 py-8 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {/* Brand section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mr-3 flex items-center justify-center">
                <span className="text-white font-bold">Q</span>
              </div>
              <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>QuizHub</h3>
            </div>
            
            <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} mb-6 leading-relaxed`}>
              Create engaging quizzes, challenge others, and earn rewards for your knowledge. Join our community of quiz creators and players today.
            </p>
            
            {/* Social links */}
            <div className="flex gap-3">
              <button className={`w-10 h-10 ${isDarkMode ? 'bg-slate-800 hover:bg-blue-600 text-slate-400' : 'bg-gray-200 hover:bg-blue-600 text-gray-600'} hover:text-white rounded-lg flex items-center justify-center transition-all duration-200`}>
                <Facebook className="w-5 h-5" />
              </button>
              <button className={`w-10 h-10 ${isDarkMode ? 'bg-slate-800 hover:bg-blue-400 text-slate-400' : 'bg-gray-200 hover:bg-blue-400 text-gray-600'} hover:text-white rounded-lg flex items-center justify-center transition-all duration-200`}>
                <Twitter className="w-5 h-5" />
              </button>
              <button className={`w-10 h-10 ${isDarkMode ? 'bg-slate-800 hover:bg-pink-600 text-slate-400' : 'bg-gray-200 hover:bg-pink-600 text-gray-600'} hover:text-white rounded-lg flex items-center justify-center transition-all duration-200`}>
                <Instagram className="w-5 h-5" />
              </button>
              <button className={`w-10 h-10 ${isDarkMode ? 'bg-slate-800 hover:bg-red-600 text-slate-400' : 'bg-gray-200 hover:bg-red-600 text-gray-600'} hover:text-white rounded-lg flex items-center justify-center transition-all duration-200`}>
                <Youtube className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-lg font-bold mb-6`}>Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button className={`${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors text-left`}>
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-lg font-bold mb-6`}>Categories</h4>
            <ul className="space-y-3">
              {categories.map((category, index) => (
                <li key={index}>
                  <button className={`${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors text-left`}>
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-lg font-bold mb-6`}>Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className={`w-5 h-5 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'} mt-1 flex-shrink-0`} />
                <div>
                  <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>123 Quiz Street,</p>
                  <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Knowledge City, QZ 12345</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className={`w-5 h-5 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'} flex-shrink-0`} />
                <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>+1 (555) 123-4567</p>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className={`w-5 h-5 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'} flex-shrink-0`} />
                <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>support@quizhub.com</p>
              </div>
            </div>
            
            <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
              Contact Support
            </button>
          </div>
        </div>

        {/* Newsletter subscription in footer */}
        <div className={`mt-8 lg:mt-16 pt-8 lg:pt-12 border-t ${isDarkMode ? 'border-slate-700' : 'border-gray-200'}`}>
          <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-2xl p-6 lg:p-8 max-w-4xl mx-auto`}>
            <div className="text-center mb-6">
              <h4 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-xl lg:text-2xl font-bold mb-2`}>Subscribe to our newsletter</h4>
              <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                Get the latest news, updates and quiz tips delivered directly to your inbox.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className={`flex-1 ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white placeholder-slate-400' : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400'} border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
              />
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 lg:px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className={`border-t ${isDarkMode ? 'border-slate-700' : 'border-gray-200'} px-4 lg:px-8 py-6 lg:py-8`}>
        <div className="flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto gap-4">
          <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} text-sm text-center sm:text-left`}>
            © 2025 QuizHub . All rights reserved.
          </p>
          
          <div className="flex flex-wrap gap-4 lg:gap-6 justify-center sm:justify-end">
            <button className={`${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} text-sm transition-colors`}>
              Privacy Policy ↗
            </button>
            <button className={`${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} text-sm transition-colors`}>
              Terms of Service ↗
            </button>
            <button className={`${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} text-sm transition-colors`}>
              Cookie Policy ↗
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;