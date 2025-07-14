import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, LogIn, Github, Chrome } from 'lucide-react';

interface LoginProps {
  isDarkMode: boolean;
}

const Login: React.FC<LoginProps> = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log('Login attempt:', formData);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Login Form */}
      <div className={`flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
        <div className="max-w-md w-full space-y-8">
          {/* Header */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mr-3 flex items-center justify-center">
                <span className="text-white font-bold text-xl">Q</span>
              </div>
              <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>QuizHub</h1>
            </div>
            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Welcome back!
            </h2>
            <p className={`mt-2 text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              Sign in to your account to continue your quiz journey
            </p>
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <button className={`w-full flex items-center justify-center px-4 py-3 border ${isDarkMode ? 'border-slate-600 bg-slate-800 hover:bg-slate-700 text-white' : 'border-gray-300 bg-white hover:bg-gray-50 text-gray-900'} rounded-lg font-medium transition-colors`}>
              <Chrome className="w-5 h-5 mr-3" />
              Continue with Google
            </button>
            <button className={`w-full flex items-center justify-center px-4 py-3 border ${isDarkMode ? 'border-slate-600 bg-slate-800 hover:bg-slate-700 text-white' : 'border-gray-300 bg-white hover:bg-gray-50 text-gray-900'} rounded-lg font-medium transition-colors`}>
              <Github className="w-5 h-5 mr-3" />
              Continue with GitHub
            </button>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className={`w-full border-t ${isDarkMode ? 'border-slate-600' : 'border-gray-300'}`} />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className={`px-2 ${isDarkMode ? 'bg-slate-900 text-slate-400' : 'bg-gray-50 text-gray-500'}`}>
                Or continue with email
              </span>
            </div>
          </div>

          {/* Login Form */}
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
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-600 text-white placeholder-slate-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'} border rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'} mb-2`}>
                Password
              </label>
              <div className="relative">
                <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-slate-400' : 'text-gray-400'} w-5 h-5`} />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-600 text-white placeholder-slate-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'} border rounded-lg pl-10 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className={`ml-2 block text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link
                  to="/forgot-password"
                  className="text-blue-600 hover:text-blue-500 font-medium"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <LogIn className="w-5 h-5" />
              )}
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>

          {/* Sign up link */}
          <div className="text-center">
            <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              Don't have an account?{' '}
              <Link
                to="/register"
                className="text-blue-600 hover:text-blue-500 font-medium"
              >
                Sign up for free
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Illustration/Info */}
      <div className="hidden lg:flex lg:flex-1 bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-32 -translate-x-32"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center px-12 text-white">
          <div className="max-w-md">
            <h2 className="text-4xl font-bold mb-6">
              Join the Quiz Revolution
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Create engaging quizzes, challenge friends, and earn rewards for your knowledge. Join thousands of quiz enthusiasts worldwide.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-white/80">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-white/80">Quizzes Created</div>
              </div>
              <div>
                <div className="text-3xl font-bold">$100K+</div>
                <div className="text-white/80">Rewards Earned</div>
              </div>
              <div>
                <div className="text-3xl font-bold">4.9★</div>
                <div className="text-white/80">User Rating</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating quiz cards */}
        <div className="absolute top-20 right-20 w-48 h-32 bg-white/20 backdrop-blur-sm rounded-xl p-4 transform rotate-12">
          <div className="text-white font-bold mb-2">Science Quiz</div>
          <div className="text-white/80 text-sm">Test your knowledge of physics and chemistry</div>
        </div>
        
        <div className="absolute bottom-32 right-32 w-40 h-28 bg-white/20 backdrop-blur-sm rounded-xl p-4 transform -rotate-6">
          <div className="text-white font-bold mb-2">History Quiz</div>
          <div className="text-white/80 text-sm">Explore ancient civilizations</div>
        </div>
      </div>
    </div>
  );
};

export default Login;