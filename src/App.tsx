import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import TodaysChallenge from './pages/TodaysChallenge';
import Categories from './pages/Categories';
import QuizBattle from './pages/QuizBattle';
import NewsUpdates from './pages/NewsUpdates';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import UserProfile from './pages/UserProfile';
import ExploreQuizzes from './pages/ExploreQuizzes';
import QuizTournament from './pages/QuizTournament';
import Leaderboard from './pages/Leaderboard';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-200 ${isDarkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} toggleSidebar={toggleSidebar} />
        <div className="flex">
          <Sidebar isDarkMode={isDarkMode} isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
          <main className="flex-1 lg:ml-64 pt-16 sm:pt-20 lg:pt-24 px-3 sm:px-4 lg:px-8 py-4 lg:py-8">
            <Routes>
              <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
              <Route path="/todays-challenge" element={<TodaysChallenge isDarkMode={isDarkMode} />} />
              <Route path="/categories" element={<Categories isDarkMode={isDarkMode} />} />
              <Route path="/quiz-battle" element={<QuizBattle isDarkMode={isDarkMode} />} />
              <Route path="/news-updates" element={<NewsUpdates isDarkMode={isDarkMode} />} />
              <Route path="/user-profile" element={<UserProfile isDarkMode={isDarkMode} />} />
              <Route path="/login" element={<Login isDarkMode={isDarkMode} />} />
              <Route path="/register" element={<Register isDarkMode={isDarkMode} />} />
              <Route path="/forgot-password" element={<ForgotPassword isDarkMode={isDarkMode} />} />
              
              {/* New Pages */}
              <Route path="/explore-quizzes" element={<ExploreQuizzes isDarkMode={isDarkMode} />} />
              <Route path="/quiz-tournament" element={<QuizTournament isDarkMode={isDarkMode} />} />
              <Route path="/leaderboard" element={<Leaderboard isDarkMode={isDarkMode} />} />
              
              {/* Placeholder routes for remaining pages */}
              <Route path="/quiz-creator-tips" element={<div className="text-center py-20"><h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Quiz Creator Tips - Coming Soon</h1></div>} />
              <Route path="/quiz-discussions" element={<div className="text-center py-20"><h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Quiz Discussions - Coming Soon</h1></div>} />
              <Route path="/create-quiz" element={<div className="text-center py-20"><h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Create Quiz - Coming Soon</h1></div>} />
              <Route path="/ai-quiz-generator" element={<div className="text-center py-20"><h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>AI Quiz Generator - Coming Soon</h1></div>} />
              <Route path="/affiliate-page" element={<div className="text-center py-20"><h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Affiliate Page - Coming Soon</h1></div>} />
              <Route path="/pricing-plan" element={<div className="text-center py-20"><h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Pricing Plan - Coming Soon</h1></div>} />
              <Route path="/support" element={<div className="text-center py-20"><h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Support - Coming Soon</h1></div>} />
              <Route path="/logout" element={<div className="text-center py-20"><h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Logout - Coming Soon</h1></div>} />
            </Routes>
          </main>
        </div>
        <Footer isDarkMode={isDarkMode} />
      </div>
    </Router>
  );
}

export default App;