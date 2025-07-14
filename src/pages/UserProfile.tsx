import React, { useState } from 'react';
import { 
  User, 
  Edit3, 
  Camera, 
  Trophy, 
  Star, 
  Users, 
  Calendar, 
  MapPin, 
  Mail, 
  Phone, 
  Globe, 
  Award, 
  TrendingUp, 
  Clock, 
  Target,
  Settings,
  Shield,
  Bell,
  Eye,
  EyeOff,
  Save,
  X
} from 'lucide-react';

interface UserProfileProps {
  isDarkMode: boolean;
}

const UserProfile: React.FC<UserProfileProps> = ({ isDarkMode }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    website: 'johndoe.com',
    bio: 'Passionate quiz creator and knowledge enthusiast. Love creating engaging educational content and challenging others to learn new things.',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const userStats = {
    totalQuizzes: 42,
    totalEarnings: 1247.50,
    followers: 1234,
    following: 567,
    rank: 15,
    winRate: 87,
    averageScore: 92,
    streakDays: 12
  };

  const achievements = [
    { id: 1, title: 'Quiz Master', description: 'Created 50+ quizzes', icon: Trophy, color: 'text-yellow-400', earned: true },
    { id: 2, title: 'Knowledge Seeker', description: 'Completed 100+ quizzes', icon: Target, color: 'text-blue-400', earned: true },
    { id: 3, title: 'Social Butterfly', description: '1000+ followers', icon: Users, color: 'text-purple-400', earned: true },
    { id: 4, title: 'Streak Champion', description: '30-day streak', icon: TrendingUp, color: 'text-green-400', earned: false },
    { id: 5, title: 'Perfect Score', description: '10 perfect scores', icon: Star, color: 'text-orange-400', earned: true },
    { id: 6, title: 'Speed Demon', description: 'Complete quiz in under 2 min', icon: Clock, color: 'text-red-400', earned: false }
  ];

  const recentActivity = [
    { id: 1, type: 'quiz_created', title: 'Created "Advanced Physics Quiz"', time: '2 hours ago', points: 50 },
    { id: 2, type: 'quiz_completed', title: 'Completed "World Geography Challenge"', time: '5 hours ago', points: 25 },
    { id: 3, type: 'achievement', title: 'Earned "Knowledge Seeker" badge', time: '1 day ago', points: 100 },
    { id: 4, type: 'follower', title: 'Sarah Williams started following you', time: '2 days ago', points: 0 },
    { id: 5, type: 'quiz_completed', title: 'Completed "Science Trivia"', time: '3 days ago', points: 30 }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'activity', label: 'Activity', icon: TrendingUp },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    // Save profile data
    console.log('Saving profile:', profileData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Reset form data
    setIsEditing(false);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className={`text-3xl lg:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          User Profile
        </h1>
        <p className={`text-lg ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
          Manage your account and track your progress
        </p>
      </div>

      {/* Profile Header Card */}
      <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-2xl overflow-hidden`}>
        {/* Cover Photo */}
        <div className="relative h-32 sm:h-48 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
          <div className="absolute inset-0 bg-black/20"></div>
          <button className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-lg transition-colors">
            <Camera className="w-5 h-5" />
          </button>
        </div>

        {/* Profile Info */}
        <div className="relative px-6 pb-6">
          {/* Avatar */}
          <div className="flex flex-col sm:flex-row items-center sm:items-end -mt-16 sm:-mt-20">
            <div className="relative">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-white flex items-center justify-center">
                <User className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
              </div>
              <button className="absolute bottom-0 right-0 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors">
                <Camera className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 sm:ml-6 mt-4 sm:mt-0 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className={`text-2xl sm:text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {profileData.firstName} {profileData.lastName}
                  </h2>
                  <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} mt-1`}>Quiz Master • Rank #{userStats.rank}</p>
                </div>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="mt-4 sm:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 mx-auto sm:mx-0"
                >
                  <Edit3 className="w-4 h-4" />
                  {isEditing ? 'Cancel Edit' : 'Edit Profile'}
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                <div className="text-center">
                  <div className={`text-xl sm:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{userStats.totalQuizzes}</div>
                  <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Quizzes</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-green-400">${userStats.totalEarnings}</div>
                  <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Earned</div>
                </div>
                <div className="text-center">
                  <div className={`text-xl sm:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{userStats.followers}</div>
                  <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-purple-400">{userStats.winRate}%</div>
                  <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Win Rate</div>
                </div>
              </div>
            </div>
          </div>
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Personal Information */}
          <div className="lg:col-span-2">
            <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-2xl p-6`}>
              <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
                Personal Information
              </h3>
              
              {isEditing ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'} mb-2`}>
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={profileData.firstName}
                        onChange={handleInputChange}
                        className={`w-full ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'} mb-2`}>
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={profileData.lastName}
                        onChange={handleInputChange}
                        className={`w-full ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'} mb-2`}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleInputChange}
                      className={`w-full ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'} mb-2`}>
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleInputChange}
                      className={`w-full ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'} mb-2`}>
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={profileData.location}
                      onChange={handleInputChange}
                      className={`w-full ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'} mb-2`}>
                      Website
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={profileData.website}
                      onChange={handleInputChange}
                      className={`w-full ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'} mb-2`}>
                      Bio
                    </label>
                    <textarea
                      name="bio"
                      value={profileData.bio}
                      onChange={handleInputChange}
                      rows={4}
                      className={`w-full ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none`}
                    />
                  </div>
                  
                  <div className="flex gap-4">
                    <button
                      onClick={handleSave}
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
                    >
                      <Save className="w-4 h-4" />
                      Save Changes
                    </button>
                    <button
                      onClick={handleCancel}
                      className={`${isDarkMode ? 'bg-slate-700 hover:bg-slate-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'} px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2`}
                    >
                      <X className="w-4 h-4" />
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className={`w-5 h-5 ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} mr-3`} />
                    <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{profileData.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className={`w-5 h-5 ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} mr-3`} />
                    <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{profileData.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className={`w-5 h-5 ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} mr-3`} />
                    <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{profileData.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className={`w-5 h-5 ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} mr-3`} />
                    <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{profileData.website}</span>
                  </div>
                  <div className="mt-6">
                    <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>About</h4>
                    <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} leading-relaxed`}>{profileData.bio}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="space-y-6">
            <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-2xl p-6`}>
              <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
                Performance Stats
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Average Score</span>
                  <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{userStats.averageScore}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Current Streak</span>
                  <span className="font-bold text-orange-400">{userStats.streakDays} days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Following</span>
                  <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{userStats.following}</span>
                </div>
              </div>
            </div>

            <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-2xl p-6`}>
              <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
                Member Since
              </h3>
              <div className="flex items-center">
                <Calendar className={`w-5 h-5 ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} mr-3`} />
                <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>January 2024</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'activity' && (
        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-2xl p-6`}>
          <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
            Recent Activity
          </h3>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className={`flex items-center justify-between p-4 ${isDarkMode ? 'bg-slate-700' : 'bg-gray-50'} rounded-lg`}>
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                    activity.type === 'quiz_created' ? 'bg-blue-500/20 text-blue-400' :
                    activity.type === 'quiz_completed' ? 'bg-green-500/20 text-green-400' :
                    activity.type === 'achievement' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    {activity.type === 'quiz_created' && <Edit3 className="w-5 h-5" />}
                    {activity.type === 'quiz_completed' && <Trophy className="w-5 h-5" />}
                    {activity.type === 'achievement' && <Award className="w-5 h-5" />}
                    {activity.type === 'follower' && <Users className="w-5 h-5" />}
                  </div>
                  <div>
                    <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{activity.title}</p>
                    <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{activity.time}</p>
                  </div>
                </div>
                {activity.points > 0 && (
                  <span className="text-green-400 font-bold">+{activity.points} pts</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'achievements' && (
        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-2xl p-6`}>
          <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
            Achievements & Badges
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <div key={achievement.id} className={`p-6 rounded-xl border-2 transition-all duration-200 ${
                achievement.earned 
                  ? `${isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-gray-50 border-gray-200'} hover:scale-105`
                  : `${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-gray-100 border-gray-300'} opacity-60`
              }`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                  achievement.earned ? 'bg-gradient-to-br from-yellow-400 to-orange-500' : 'bg-gray-400'
                }`}>
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {achievement.title}
                </h4>
                <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                  {achievement.description}
                </p>
                {achievement.earned && (
                  <div className="mt-3 text-xs text-green-400 font-medium">✓ Earned</div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'settings' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Account Settings */}
          <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-2xl p-6`}>
            <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
              Account Settings
            </h3>
            <div className="space-y-6">
              <div>
                <label className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'} mb-2`}>
                  Current Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="currentPassword"
                    value={profileData.currentPassword}
                    onChange={handleInputChange}
                    className={`w-full ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border rounded-lg px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Enter current password"
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
              
              <div>
                <label className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'} mb-2`}>
                  New Password
                </label>
                <input
                  type="password"
                  name="newPassword"
                  value={profileData.newPassword}
                  onChange={handleInputChange}
                  className={`w-full ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Enter new password"
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'} mb-2`}>
                  Confirm New Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={profileData.confirmPassword}
                  onChange={handleInputChange}
                  className={`w-full ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Confirm new password"
                />
              </div>
              
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Update Password
              </button>
            </div>
          </div>

          {/* Notification Settings */}
          <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-2xl p-6`}>
            <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
              Notification Preferences
            </h3>
            <div className="space-y-4">
              {[
                { id: 'email_notifications', label: 'Email Notifications', description: 'Receive updates via email' },
                { id: 'quiz_reminders', label: 'Quiz Reminders', description: 'Daily quiz challenge reminders' },
                { id: 'achievement_alerts', label: 'Achievement Alerts', description: 'Get notified when you earn badges' },
                { id: 'follower_updates', label: 'Follower Updates', description: 'When someone follows you' },
                { id: 'marketing_emails', label: 'Marketing Emails', description: 'Product updates and promotions' }
              ].map((setting) => (
                <div key={setting.id} className="flex items-center justify-between">
                  <div>
                    <div className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{setting.label}</div>
                    <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{setting.description}</div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;