import React, { useState } from 'react';
import { 
  BarChart3, 
  Users, 
  FileText, 
  DollarSign, 
  TrendingUp, 
  AlertTriangle,
  Settings,
  Shield,
  Eye,
  Edit,
  Trash2,
  Search,
  Filter,
  Download,
  Plus,
  CheckCircle,
  XCircle,
  Clock,
  Star,
  MessageSquare,
  Flag,
  Award,
  Target,
  Zap
} from 'lucide-react';

interface AdminDashboardProps {
  isDarkMode: boolean;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ isDarkMode }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'quizzes', label: 'Quizzes', icon: FileText },
    { id: 'payments', label: 'Payments', icon: DollarSign },
    { id: 'reports', label: 'Reports', icon: Flag },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const stats = {
    totalUsers: 45672,
    activeUsers: 12834,
    totalQuizzes: 8945,
    pendingQuizzes: 234,
    totalRevenue: 125430.50,
    monthlyRevenue: 23450.75,
    totalReports: 89,
    pendingReports: 12
  };

  const recentUsers = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john@example.com',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
      joinDate: '2025-01-15',
      status: 'active',
      quizzes: 12,
      earnings: 245.50
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
      joinDate: '2025-01-14',
      status: 'active',
      quizzes: 8,
      earnings: 189.25
    },
    {
      id: 3,
      name: 'Mike Wilson',
      email: 'mike@example.com',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
      joinDate: '2025-01-13',
      status: 'suspended',
      quizzes: 3,
      earnings: 45.00
    }
  ];

  const recentQuizzes = [
    {
      id: 1,
      title: 'Advanced Physics Quiz',
      creator: 'Dr. Sarah Chen',
      category: 'Science',
      status: 'approved',
      participants: 1234,
      rating: 4.8,
      createdAt: '2025-01-15',
      revenue: 567.80
    },
    {
      id: 2,
      title: 'World Geography Challenge',
      creator: 'Alex Johnson',
      category: 'Geography',
      status: 'pending',
      participants: 0,
      rating: 0,
      createdAt: '2025-01-15',
      revenue: 0
    },
    {
      id: 3,
      title: 'History Mysteries',
      creator: 'Prof. Michael Brown',
      category: 'History',
      status: 'rejected',
      participants: 0,
      rating: 0,
      createdAt: '2025-01-14',
      revenue: 0
    }
  ];

  const recentReports = [
    {
      id: 1,
      type: 'inappropriate_content',
      reporter: 'User123',
      target: 'Quiz: "Offensive Content Quiz"',
      status: 'pending',
      priority: 'high',
      createdAt: '2025-01-15'
    },
    {
      id: 2,
      type: 'spam',
      reporter: 'QuizMaster',
      target: 'User: spammer@example.com',
      status: 'resolved',
      priority: 'medium',
      createdAt: '2025-01-14'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
      case 'approved':
      case 'resolved':
        return 'text-green-400 bg-green-500/20';
      case 'pending':
        return 'text-yellow-400 bg-yellow-500/20';
      case 'suspended':
      case 'rejected':
        return 'text-red-400 bg-red-500/20';
      default:
        return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-400 bg-red-500/20';
      case 'medium':
        return 'text-yellow-400 bg-yellow-500/20';
      case 'low':
        return 'text-green-400 bg-green-500/20';
      default:
        return 'text-gray-400 bg-gray-500/20';
    }
  };

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6`}>
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-400" />
            </div>
            <span className="text-green-400 text-sm font-medium">+12.5%</span>
          </div>
          <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`}>
            {stats.totalUsers.toLocaleString()}
          </div>
          <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Total Users</div>
          <div className="text-xs text-blue-400 mt-1">{stats.activeUsers.toLocaleString()} active</div>
        </div>

        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6`}>
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-purple-400" />
            </div>
            <span className="text-green-400 text-sm font-medium">+8.3%</span>
          </div>
          <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`}>
            {stats.totalQuizzes.toLocaleString()}
          </div>
          <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Total Quizzes</div>
          <div className="text-xs text-yellow-400 mt-1">{stats.pendingQuizzes} pending</div>
        </div>

        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6`}>
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-400" />
            </div>
            <span className="text-green-400 text-sm font-medium">+15.2%</span>
          </div>
          <div className="text-2xl font-bold text-green-400 mb-1">
            ${stats.totalRevenue.toLocaleString()}
          </div>
          <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Total Revenue</div>
          <div className="text-xs text-green-400 mt-1">${stats.monthlyRevenue.toLocaleString()} this month</div>
        </div>

        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6`}>
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
              <Flag className="w-6 h-6 text-red-400" />
            </div>
            <span className="text-red-400 text-sm font-medium">+3</span>
          </div>
          <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`}>
            {stats.totalReports}
          </div>
          <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Total Reports</div>
          <div className="text-xs text-red-400 mt-1">{stats.pendingReports} pending</div>
        </div>
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Revenue Chart Placeholder */}
        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6`}>
          <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
            Revenue Overview
          </h3>
          <div className="h-64 flex items-center justify-center">
            <div className={`text-center ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>
              <BarChart3 className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p>Revenue chart would be displayed here</p>
            </div>
          </div>
        </div>

        {/* User Growth Chart Placeholder */}
        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6`}>
          <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
            User Growth
          </h3>
          <div className="h-64 flex items-center justify-center">
            <div className={`text-center ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>
              <TrendingUp className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p>User growth chart would be displayed here</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Users */}
        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6`}>
          <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Recent Users
          </h3>
          <div className="space-y-4">
            {recentUsers.slice(0, 3).map((user) => (
              <div key={user.id} className="flex items-center justify-between">
                <div className="flex items-center">
                  <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full mr-3" />
                  <div>
                    <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} text-sm`}>
                      {user.name}
                    </p>
                    <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                      {user.joinDate}
                    </p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-bold ${getStatusColor(user.status)}`}>
                  {user.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Quizzes */}
        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6`}>
          <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Recent Quizzes
          </h3>
          <div className="space-y-4">
            {recentQuizzes.slice(0, 3).map((quiz) => (
              <div key={quiz.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} text-sm`}>
                    {quiz.title}
                  </p>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${getStatusColor(quiz.status)}`}>
                    {quiz.status}
                  </span>
                </div>
                <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                  by {quiz.creator} • {quiz.category}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Reports */}
        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6`}>
          <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Recent Reports
          </h3>
          <div className="space-y-4">
            {recentReports.slice(0, 3).map((report) => (
              <div key={report.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} text-sm`}>
                    {report.type.replace('_', ' ')}
                  </p>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${getPriorityColor(report.priority)}`}>
                    {report.priority}
                  </span>
                </div>
                <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                  {report.target}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderUsers = () => (
    <div className="space-y-6">
      {/* Search and Actions */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-slate-400' : 'text-gray-400'} w-5 h-5`} />
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-600 text-white placeholder-slate-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'} border rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>
        <div className="flex gap-3">
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className={`${isDarkMode ? 'bg-slate-800 border-slate-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            <option value="all">All Users</option>
            <option value="active">Active</option>
            <option value="suspended">Suspended</option>
          </select>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* Users Table */}
      <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl overflow-hidden`}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className={`${isDarkMode ? 'bg-slate-700' : 'bg-gray-50'}`}>
              <tr>
                <th className={`text-left py-4 px-6 font-medium ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>User</th>
                <th className={`text-left py-4 px-6 font-medium ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Status</th>
                <th className={`text-left py-4 px-6 font-medium ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Quizzes</th>
                <th className={`text-left py-4 px-6 font-medium ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Earnings</th>
                <th className={`text-left py-4 px-6 font-medium ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Joined</th>
                <th className={`text-left py-4 px-6 font-medium ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentUsers.map((user) => (
                <tr key={user.id} className={`border-t ${isDarkMode ? 'border-slate-700' : 'border-gray-200'}`}>
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full mr-3" />
                      <div>
                        <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{user.name}</p>
                        <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(user.status)}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className={`py-4 px-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{user.quizzes}</td>
                  <td className="py-4 px-6 text-green-400 font-bold">${user.earnings}</td>
                  <td className={`py-4 px-6 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{user.joinDate}</td>
                  <td className="py-4 px-6">
                    <div className="flex gap-2">
                      <button className="text-blue-400 hover:text-blue-300 p-1">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-yellow-400 hover:text-yellow-300 p-1">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-red-400 hover:text-red-300 p-1">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderQuizzes = () => (
    <div className="space-y-6">
      {/* Search and Actions */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-slate-400' : 'text-gray-400'} w-5 h-5`} />
          <input
            type="text"
            placeholder="Search quizzes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-600 text-white placeholder-slate-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'} border rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>
        <div className="flex gap-3">
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className={`${isDarkMode ? 'bg-slate-800 border-slate-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            <option value="all">All Quizzes</option>
            <option value="approved">Approved</option>
            <option value="pending">Pending</option>
            <option value="rejected">Rejected</option>
          </select>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            Bulk Approve
          </button>
        </div>
      </div>

      {/* Quizzes Table */}
      <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl overflow-hidden`}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className={`${isDarkMode ? 'bg-slate-700' : 'bg-gray-50'}`}>
              <tr>
                <th className={`text-left py-4 px-6 font-medium ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Quiz</th>
                <th className={`text-left py-4 px-6 font-medium ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Creator</th>
                <th className={`text-left py-4 px-6 font-medium ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Status</th>
                <th className={`text-left py-4 px-6 font-medium ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Participants</th>
                <th className={`text-left py-4 px-6 font-medium ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Rating</th>
                <th className={`text-left py-4 px-6 font-medium ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Revenue</th>
                <th className={`text-left py-4 px-6 font-medium ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentQuizzes.map((quiz) => (
                <tr key={quiz.id} className={`border-t ${isDarkMode ? 'border-slate-700' : 'border-gray-200'}`}>
                  <td className="py-4 px-6">
                    <div>
                      <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{quiz.title}</p>
                      <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{quiz.category}</p>
                    </div>
                  </td>
                  <td className={`py-4 px-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{quiz.creator}</td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(quiz.status)}`}>
                      {quiz.status}
                    </span>
                  </td>
                  <td className={`py-4 px-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{quiz.participants.toLocaleString()}</td>
                  <td className="py-4 px-6">
                    {quiz.rating > 0 ? (
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-yellow-400 font-bold">{quiz.rating}</span>
                      </div>
                    ) : (
                      <span className={`${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>N/A</span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-green-400 font-bold">${quiz.revenue}</td>
                  <td className="py-4 px-6">
                    <div className="flex gap-2">
                      <button className="text-blue-400 hover:text-blue-300 p-1">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-green-400 hover:text-green-300 p-1">
                        <CheckCircle className="w-4 h-4" />
                      </button>
                      <button className="text-red-400 hover:text-red-300 p-1">
                        <XCircle className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'users':
        return renderUsers();
      case 'quizzes':
        return renderQuizzes();
      case 'payments':
        return (
          <div className="text-center py-12">
            <DollarSign className={`w-16 h-16 ${isDarkMode ? 'text-slate-600' : 'text-gray-400'} mx-auto mb-4`} />
            <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
              Payments Management
            </h3>
            <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              Payment processing and transaction management features coming soon
            </p>
          </div>
        );
      case 'reports':
        return (
          <div className="text-center py-12">
            <Flag className={`w-16 h-16 ${isDarkMode ? 'text-slate-600' : 'text-gray-400'} mx-auto mb-4`} />
            <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
              Reports Management
            </h3>
            <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              User reports and content moderation features coming soon
            </p>
          </div>
        );
      case 'settings':
        return (
          <div className="text-center py-12">
            <Settings className={`w-16 h-16 ${isDarkMode ? 'text-slate-600' : 'text-gray-400'} mx-auto mb-4`} />
            <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
              System Settings
            </h3>
            <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              Platform configuration and system settings coming soon
            </p>
          </div>
        );
      default:
        return renderOverview();
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center mb-4">
            <Shield className="w-8 h-8 text-red-400 mr-3" />
            <h1 className={`text-3xl lg:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Admin Dashboard
            </h1>
          </div>
          <p className={`text-lg ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
            Manage users, quizzes, and platform operations
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-red-500/20 text-red-400 px-3 py-2 rounded-lg">
            <AlertTriangle className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">{stats.pendingReports} pending reports</span>
          </div>
          <div className="flex items-center bg-yellow-500/20 text-yellow-400 px-3 py-2 rounded-lg">
            <Clock className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">{stats.pendingQuizzes} pending reviews</span>
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

      {/* Content */}
      {renderContent()}
    </div>
  );
};

export default AdminDashboard;