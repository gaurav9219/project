import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, User, UserPlus, Github, Chrome, Check } from 'lucide-react';

interface RegisterProps {
  isDarkMode: boolean;
}

const Register: React.FC<RegisterProps> = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
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
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    if (!acceptTerms) {
      alert('Please accept the terms and conditions');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log('Registration attempt:', formData);
    }, 2000);
  };

  const passwordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const getStrengthColor = (strength: number) => {
    if (strength <= 2) return 'bg-red-500';
    if (strength <= 3) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getStrengthText = (strength: number) => {
    if (strength <= 2) return 'Weak';
    if (strength <= 3) return 'Medium';
    return 'Strong';
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Illustration/Info */}
      <div className="hidden lg:flex lg:flex-1 bg-gradient-to-br from-green-600 via-teal-600 to-blue-700 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 -translate-x-48"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-y-32 translate-x-32"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center px-12 text-white">
          <div className="max-w-md">
            <h2 className="text-4xl font-bold mb-6">
              Start Your Quiz Journey Today
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Create your account and unlock a world of knowledge, challenges, and rewards. Join our growing community of quiz enthusiasts.
            </p>
            
            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center">
                <Check className="w-6 h-6 text-green-300 mr-3" />
                <span>Create unlimited quizzes</span>
              </div>
              <div className="flex items-center">
                <Check className="w-6 h-6 text-green-300 mr-3" />
                <span>Earn rewards for participation</span>
              </div>
              <div className="flex items-center">
                <Check className="w-6 h-6 text-green-300 mr-3" />
                <span>Join global competitions</span>
              </div>
              <div className="flex items-center">
                <Check className="w-6 h-6 text-green-300 mr-3" />
                <span>Track your progress</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-32 left-20 w-48 h-32 bg-white/20 backdrop-blur-sm rounded-xl p-4 transform -rotate-12">
          <div className="text-white font-bold mb-2">Welcome Bonus</div>
          <div className="text-white/80 text-sm">Get $5 for signing up today!</div>
        </div>
        
        <div className="absolute bottom-40 left-32 w-40 h-28 bg-white/20 backdrop-blur-sm rounded-xl p-4 transform rotate-6">
          <div className="text-white font-bold mb-2">Daily Rewards</div>
          <div className="text-white/80 text-sm">Earn points every day</div>
        </div>
      </div>

      {/* Right Side - Registration Form */}
      <div className={`flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
        <div className="max-w-md w-full space-y-8">
          {/* Header */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl mr-3 flex items-center justify-center">
                <span className="text-white font-bold text-xl">Q</span>
              </div>
              <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>QuizHub</h1>
            </div>
            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Create your account
            </h2>
            <p className={`mt-2 text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              Join thousands of quiz enthusiasts worldwide
            </p>
          </div>

          {/* Social Registration */}
          <div className="space-y-3">
            <button className={`w-full flex items-center justify-center px-4 py-3 border ${isDarkMode ? 'border-slate-600 bg-slate-800 hover:bg-slate-700 text-white' : 'border-gray-300 bg-white hover:bg-gray-50 text-gray-900'} rounded-lg font-medium transition-colors`}>
              <Chrome className="w-5 h-5 mr-3" />
              Sign up with Google
            </button>
            <button className={`w-full flex items-center justify-center px-4 py-3 border ${isDarkMode ? 'border-slate-600 bg-slate-800 hover:bg-slate-700 text-white' : 'border-gray-300 bg-white hover:bg-gray-50 text-gray-900'} rounded-lg font-medium transition-colors`}>
              <Github className="w-5 h-5 mr-3" />
              Sign up with GitHub
            </button>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className={`w-full border-t ${isDarkMode ? 'border-slate-600' : 'border-gray-300'}`} />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className={`px-2 ${isDarkMode ? 'bg-slate-900 text-slate-400' : 'bg-gray-50 text-gray-500'}`}>
                Or sign up with email
              </span>
            </div>
          </div>

          {/* Registration Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'} mb-2`}>
                  First name
                </label>
                <div className="relative">
                  <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-slate-400' : 'text-gray-400'} w-5 h-5`} />
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-600 text-white placeholder-slate-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'} border rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                    placeholder="John"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="lastName" className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'} mb-2`}>
                  Last name
                </label>
                <div className="relative">
                  <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-slate-400' : 'text-gray-400'} w-5 h-5`} />
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-600 text-white placeholder-slate-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'} border rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                    placeholder="Doe"
                  />
                </div>
              </div>
            </div>

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
                  className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-600 text-white placeholder-slate-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'} border rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                  placeholder="john@example.com"
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
                  className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-600 text-white placeholder-slate-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'} border rounded-lg pl-10 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                  placeholder="Create a strong password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              
              {/* Password Strength Indicator */}
              {formData.password && (
                <div className="mt-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                      Password strength: {getStrengthText(passwordStrength(formData.password))}
                    </span>
                  </div>
                  <div className={`w-full ${isDarkMode ? 'bg-slate-700' : 'bg-gray-200'} rounded-full h-2`}>
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${getStrengthColor(passwordStrength(formData.password))}`}
                      style={{ width: `${(passwordStrength(formData.password) / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>

            <div>
              <label htmlFor="confirmPassword" className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'} mb-2`}>
                Confirm password
              </label>
              <div className="relative">
                <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-slate-400' : 'text-gray-400'} w-5 h-5`} />
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  required
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-600 text-white placeholder-slate-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'} border rounded-lg pl-10 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                    formData.confirmPassword && formData.password !== formData.confirmPassword ? 'border-red-500' : ''
                  }`}
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                <p className="mt-1 text-sm text-red-500">Passwords do not match</p>
              )}
            </div>

            <div className="flex items-center">
              <input
                id="accept-terms"
                name="accept-terms"
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="accept-terms" className={`ml-2 block text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
                I agree to the{' '}
                <Link to="/terms" className="text-green-600 hover:text-green-500 font-medium">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-green-600 hover:text-green-500 font-medium">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading || !acceptTerms}
              className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <UserPlus className="w-5 h-5" />
              )}
              {isLoading ? 'Creating account...' : 'Create account'}
            </button>
          </form>

          {/* Sign in link */}
          <div className="text-center">
            <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-green-600 hover:text-green-500 font-medium"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;