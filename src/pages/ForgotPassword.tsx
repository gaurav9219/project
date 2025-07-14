import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, Send, CheckCircle } from 'lucide-react';

interface ForgotPasswordProps {
  isDarkMode: boolean;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ isDarkMode }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsEmailSent(true);
      console.log('Password reset email sent to:', email);
    }, 2000);
  };

  if (isEmailSent) {
    return (
      <div className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Check your email
            </h2>
            <p className={`mt-4 text-lg ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              We've sent a password reset link to
            </p>
            <p className="text-blue-600 font-medium text-lg">{email}</p>
          </div>

          <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-lg p-6`}>
            <h3 className={`text-lg font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              What's next?
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-blue-600 font-bold text-xs">1</span>
                </div>
                <p className={`${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
                  Check your email inbox (and spam folder)
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-blue-600 font-bold text-xs">2</span>
                </div>
                <p className={`${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
                  Click the reset password link in the email
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-blue-600 font-bold text-xs">3</span>
                </div>
                <p className={`${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
                  Create a new password for your account
                </p>
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              Didn't receive the email?{' '}
              <button
                onClick={() => setIsEmailSent(false)}
                className="text-blue-600 hover:text-blue-500 font-medium"
              >
                Try again
              </button>
            </p>
            
            <Link
              to="/login"
              className={`inline-flex items-center text-sm ${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to sign in
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl mr-3 flex items-center justify-center">
              <span className="text-white font-bold text-xl">Q</span>
            </div>
            <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>QuizHub</h1>
          </div>
          <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Forgot your password?
          </h2>
          <p className={`mt-2 text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
            No worries! Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>

        {/* Illustration */}
        <div className="flex justify-center">
          <div className="w-32 h-32 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center">
            <Mail className="w-16 h-16 text-orange-600" />
          </div>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'} mb-2`}>
              Email address
            </label>
            <div className="relative">
              <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-slate-400' : 'text-gray-400'} w-5 h-5`} />
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-600 text-white placeholder-slate-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'} border rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent`}
                placeholder="Enter your email address"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading || !email}
            className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
            {isLoading ? 'Sending...' : 'Send reset link'}
          </button>
        </form>

        {/* Additional info */}
        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-blue-50 border border-blue-200'} rounded-lg p-4`}>
          <div className="flex">
            <div className="flex-shrink-0">
              <Mail className="h-5 w-5 text-blue-400" />
            </div>
            <div className="ml-3">
              <h3 className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-blue-800'}`}>
                Check your spam folder
              </h3>
              <div className={`mt-1 text-sm ${isDarkMode ? 'text-slate-400' : 'text-blue-700'}`}>
                Sometimes our emails end up in spam. If you don't see it in your inbox, please check your spam folder.
              </div>
            </div>
          </div>
        </div>

        {/* Back to login */}
        <div className="text-center">
          <Link
            to="/login"
            className={`inline-flex items-center text-sm ${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to sign in
          </Link>
        </div>

        {/* Support */}
        <div className="text-center">
          <p className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-gray-500'}`}>
            Still having trouble?{' '}
            <Link to="/support" className="text-orange-600 hover:text-orange-500 font-medium">
              Contact support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;