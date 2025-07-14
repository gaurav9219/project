import React, { useState } from 'react';
import { HelpCircle, Search, MessageCircle, Mail, Phone, Book, Video, FileText, Users, Clock, CheckCircle, AlertCircle, Send } from 'lucide-react';

interface SupportProps {
  isDarkMode: boolean;
}

const Support: React.FC<SupportProps> = ({ isDarkMode }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [ticketForm, setTicketForm] = useState({
    subject: '',
    category: 'general',
    priority: 'medium',
    description: ''
  });

  const categories = [
    { id: 'all', label: 'All Topics', icon: HelpCircle },
    { id: 'getting-started', label: 'Getting Started', icon: Book },
    { id: 'quiz-creation', label: 'Quiz Creation', icon: FileText },
    { id: 'account', label: 'Account & Billing', icon: Users },
    { id: 'technical', label: 'Technical Issues', icon: AlertCircle }
  ];

  const faqs = [
    {
      id: 1,
      question: 'How do I create my first quiz?',
      answer: 'To create your first quiz, click on the "Create Quiz" button in the main navigation. Follow our step-by-step wizard to add questions, set difficulty levels, and customize your quiz settings.',
      category: 'getting-started',
      helpful: 45,
      views: 1234
    },
    {
      id: 2,
      question: 'Can I customize the appearance of my quizzes?',
      answer: 'Yes! Pro and Business plan users can customize quiz themes, colors, fonts, and add their own branding. You can also upload custom images and logos.',
      category: 'quiz-creation',
      helpful: 38,
      views: 892
    },
    {
      id: 3,
      question: 'How do I upgrade my subscription?',
      answer: 'You can upgrade your subscription at any time by going to Settings > Billing. Choose your new plan and your upgrade will take effect immediately.',
      category: 'account',
      helpful: 52,
      views: 756
    },
    {
      id: 4,
      question: 'Why are my quiz results not saving?',
      answer: 'This usually happens due to browser cache issues or network connectivity problems. Try clearing your browser cache, checking your internet connection, or contact support if the issue persists.',
      category: 'technical',
      helpful: 29,
      views: 634
    },
    {
      id: 5,
      question: 'How can I share my quizzes with others?',
      answer: 'You can share quizzes by copying the quiz link, embedding it on your website, or sharing directly to social media platforms. All sharing options are available in the quiz settings.',
      category: 'quiz-creation',
      helpful: 67,
      views: 1456
    },
    {
      id: 6,
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual subscriptions.',
      category: 'account',
      helpful: 41,
      views: 523
    }
  ];

  const contactMethods = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      availability: 'Available 24/7',
      responseTime: 'Usually responds in minutes',
      color: 'text-green-400',
      bgColor: 'bg-green-500/20'
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message',
      icon: Mail,
      availability: 'Available 24/7',
      responseTime: 'Usually responds within 4 hours',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our team',
      icon: Phone,
      availability: 'Mon-Fri, 9AM-6PM EST',
      responseTime: 'Immediate assistance',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20'
    }
  ];

  const resources = [
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      icon: Video,
      count: '25+ videos',
      color: 'text-red-400'
    },
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API docs',
      icon: Book,
      count: '100+ articles',
      color: 'text-blue-400'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users',
      icon: Users,
      count: '5k+ members',
      color: 'text-green-400'
    },
    {
      title: 'Knowledge Base',
      description: 'Searchable help articles',
      icon: FileText,
      count: '200+ articles',
      color: 'text-purple-400'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Support ticket submitted:', ticketForm);
    // Reset form
    setTicketForm({
      subject: '',
      category: 'general',
      priority: 'medium',
      description: ''
    });
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <HelpCircle className="w-8 h-8 text-blue-400 mr-3" />
          <h1 className={`text-3xl lg:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Support Center
          </h1>
        </div>
        <p className={`text-lg ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
          Get help, find answers, and connect with our support team
        </p>
      </div>

      {/* Quick Search */}
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-slate-400' : 'text-gray-400'} w-6 h-6`} />
          <input
            type="text"
            placeholder="Search for help articles, guides, and FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-600 text-white placeholder-slate-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'} border rounded-xl pl-12 pr-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg`}
          />
        </div>
      </div>

      {/* Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactMethods.map((method, index) => (
          <div key={index} className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-2xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer`}>
            <div className={`w-16 h-16 ${method.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4`}>
              <method.icon className={`w-8 h-8 ${method.color}`} />
            </div>
            <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
              {method.title}
            </h3>
            <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} mb-4`}>
              {method.description}
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-center">
                <Clock className={`w-4 h-4 ${method.color} mr-2`} />
                <span className={`${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>{method.availability}</span>
              </div>
              <div className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                {method.responseTime}
              </div>
            </div>
            <button className={`w-full mt-4 py-2 rounded-lg font-medium transition-colors ${isDarkMode ? 'bg-slate-700 hover:bg-slate-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}>
              Contact Now
            </button>
          </div>
        ))}
      </div>

      {/* Resources */}
      <div className="space-y-6">
        <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} text-center`}>
          Self-Help Resources
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <div key={index} className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer`}>
              <resource.icon className={`w-12 h-12 ${resource.color} mx-auto mb-4`} />
              <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                {resource.title}
              </h3>
              <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'} mb-3`}>
                {resource.description}
              </p>
              <span className={`text-xs ${resource.color} font-bold`}>
                {resource.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Frequently Asked Questions
          </h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : `${isDarkMode ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'}`
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filteredFaqs.map((faq) => (
            <div key={faq.id} className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6`}>
              <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
                {faq.question}
              </h3>
              <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} mb-4 leading-relaxed`}>
                {faq.answer}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm">
                  <span className={`${isDarkMode ? 'text-slate-500' : 'text-gray-500'}`}>
                    {faq.views} views
                  </span>
                  <span className={`${isDarkMode ? 'text-slate-500' : 'text-gray-500'}`}>
                    {faq.helpful} found this helpful
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                    Was this helpful?
                  </span>
                  <button className="text-green-400 hover:text-green-300 p-1">
                    <CheckCircle className="w-5 h-5" />
                  </button>
                  <button className={`${isDarkMode ? 'text-slate-400 hover:text-slate-300' : 'text-gray-400 hover:text-gray-500'} p-1`}>
                    <AlertCircle className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredFaqs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
              No results found
            </h3>
            <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              Try adjusting your search terms or browse different categories
            </p>
          </div>
        )}
      </div>

      {/* Submit Ticket */}
      <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-2xl p-8`}>
        <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6 text-center`}>
          Still Need Help? Submit a Support Ticket
        </h2>
        
        <form onSubmit={handleTicketSubmit} className="max-w-2xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'} mb-2`}>
                Subject *
              </label>
              <input
                type="text"
                required
                value={ticketForm.subject}
                onChange={(e) => setTicketForm({ ...ticketForm, subject: e.target.value })}
                className={`w-full ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Brief description of your issue"
              />
            </div>

            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'} mb-2`}>
                Category
              </label>
              <select
                value={ticketForm.category}
                onChange={(e) => setTicketForm({ ...ticketForm, category: e.target.value })}
                className={`w-full ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              >
                <option value="general">General Question</option>
                <option value="technical">Technical Issue</option>
                <option value="billing">Billing & Account</option>
                <option value="feature">Feature Request</option>
                <option value="bug">Bug Report</option>
              </select>
            </div>
          </div>

          <div>
            <label className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'} mb-2`}>
              Priority
            </label>
            <div className="grid grid-cols-3 gap-3">
              {['low', 'medium', 'high'].map((priority) => (
                <button
                  key={priority}
                  type="button"
                  onClick={() => setTicketForm({ ...ticketForm, priority })}
                  className={`p-3 rounded-lg border-2 transition-colors capitalize ${
                    ticketForm.priority === priority
                      ? 'border-blue-500 bg-blue-500/10'
                      : `${isDarkMode ? 'border-slate-600 hover:border-slate-500' : 'border-gray-300 hover:border-gray-400'}`
                  }`}
                >
                  {priority}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'} mb-2`}>
              Description *
            </label>
            <textarea
              required
              rows={6}
              value={ticketForm.description}
              onChange={(e) => setTicketForm({ ...ticketForm, description: e.target.value })}
              className={`w-full ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none`}
              placeholder="Please provide as much detail as possible about your issue..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            Submit Support Ticket
          </button>
        </form>
      </div>

      {/* Status Page */}
      <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-2xl p-8 text-center`}>
        <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
          System Status
        </h2>
        <div className="flex items-center justify-center mb-4">
          <CheckCircle className="w-6 h-6 text-green-400 mr-2" />
          <span className="text-green-400 font-bold">All Systems Operational</span>
        </div>
        <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} mb-6`}>
          All QuizHub services are running smoothly. Last updated: 2 minutes ago
        </p>
        <button className={`${isDarkMode ? 'bg-slate-700 hover:bg-slate-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'} px-6 py-2 rounded-lg font-medium transition-colors`}>
          View Status Page
        </button>
      </div>
    </div>
  );
};

export default Support;