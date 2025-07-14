import React, { useState } from 'react';
import { Clock, Users, Star, Trophy, Play, ChevronLeft, ChevronRight } from 'lucide-react';

interface QuizzesByDifficultyProps {
  isDarkMode: boolean;
}

const QuizzesByDifficulty: React.FC<QuizzesByDifficultyProps> = ({ isDarkMode }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const difficulties = ['All', 'Easy', 'Medium', 'Hard', 'Expert'];
  
  const quizzes = [
    {
      id: 1,
      title: 'Basic Geography Quiz',
      category: 'Geography',
      difficulty: 'Easy',
      image: 'https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '5 min',
      participants: '12.5k',
      rating: 4.8,
      reward: '$2.50',
      gradient: 'from-green-400 to-green-600',
      difficultyColor: 'bg-green-500'
    },
    {
      id: 2,
      title: 'World Capitals Challenge',
      category: 'Geography',
      difficulty: 'Medium',
      image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '10 min',
      participants: '8.2k',
      rating: 4.6,
      reward: '$5.00',
      gradient: 'from-yellow-400 to-orange-500',
      difficultyColor: 'bg-yellow-500'
    },
    {
      id: 3,
      title: 'Advanced Physics Quiz',
      category: 'Science',
      difficulty: 'Hard',
      image: 'https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=400',
      duration: '15 min',
      participants: '3.1k',
      rating: 4.9,
      reward: '$10.00',
      gradient: 'from-red-500 to-red-700',
      difficultyColor: 'bg-red-500'
    },
    {
      id: 4,
      title: 'Quantum Mechanics Expert',
      category: 'Science',
      difficulty: 'Expert',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '25 min',
      participants: '892',
      rating: 4.7,
      reward: '$25.00',
      gradient: 'from-purple-600 to-purple-800',
      difficultyColor: 'bg-purple-600'
    },
    {
      id: 5,
      title: 'Simple Math Quiz',
      category: 'Mathematics',
      difficulty: 'Easy',
      image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '8 min',
      participants: '15.7k',
      rating: 4.5,
      reward: '$3.00',
      gradient: 'from-blue-400 to-blue-600',
      difficultyColor: 'bg-green-500'
    },
    {
      id: 6,
      title: 'Ancient History Deep Dive',
      category: 'History',
      difficulty: 'Hard',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '20 min',
      participants: '2.8k',
      rating: 4.8,
      reward: '$12.00',
      gradient: 'from-amber-500 to-orange-600',
      difficultyColor: 'bg-red-500'
    }
  ];

  const filteredQuizzes = selectedDifficulty === 'All' 
    ? quizzes 
    : quizzes.filter(quiz => quiz.difficulty === selectedDifficulty);

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(filteredQuizzes.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentItems = () => {
    const start = currentSlide * itemsPerSlide;
    return filteredQuizzes.slice(start, start + itemsPerSlide);
  };

  const getDifficultyStats = (difficulty: string) => {
    const count = quizzes.filter(quiz => quiz.difficulty === difficulty).length;
    return count;
  };

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>Quizzes by Difficulty</h2>
          <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Choose your challenge level and test your knowledge</p>
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={prevSlide}
            className={`p-2 ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'} rounded-lg transition-colors`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={nextSlide}
            className={`p-2 ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'} rounded-lg transition-colors`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Difficulty Filter Tabs */}
      <div className="flex flex-wrap gap-3 mb-8">
        {difficulties.map((difficulty) => (
          <button
            key={difficulty}
            onClick={() => setSelectedDifficulty(difficulty)}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center gap-2 ${
              selectedDifficulty === difficulty
                ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                : `${isDarkMode ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'}`
            }`}
          >
            {difficulty === 'Easy' && <div className="w-2 h-2 bg-green-400 rounded-full"></div>}
            {difficulty === 'Medium' && <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>}
            {difficulty === 'Hard' && <div className="w-2 h-2 bg-red-400 rounded-full"></div>}
            {difficulty === 'Expert' && <div className="w-2 h-2 bg-purple-400 rounded-full"></div>}
            
            <span>{difficulty}</span>
            
            {difficulty !== 'All' && (
              <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                {getDifficultyStats(difficulty)}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Quiz Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {getCurrentItems().map((quiz) => (
          <div key={quiz.id} className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group cursor-pointer`}>
            {/* Quiz Image */}
            <div className="relative h-48 overflow-hidden">
              <img 
                src={quiz.image} 
                alt={quiz.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${quiz.gradient} opacity-60`}></div>
              
              {/* Difficulty Badge */}
              <div className="absolute top-4 left-4">
                <span className={`${quiz.difficultyColor} text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1`}>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  {quiz.difficulty}
                </span>
              </div>

              {/* Reward Badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  {quiz.reward}
                </span>
              </div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
            </div>
            
            {/* Quiz Details */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className={`${isDarkMode ? 'text-slate-400' : 'text-gray-500'} text-sm font-medium`}>{quiz.category}</span>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-yellow-400 text-sm font-bold">{quiz.rating}</span>
                </div>
              </div>
              
              <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-lg font-bold mb-3 line-clamp-2`}>{quiz.title}</h3>
              
              {/* Quiz Stats */}
              <div className={`flex items-center justify-between text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} mb-4`}>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{quiz.duration}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  <span>{quiz.participants}</span>
                </div>
              </div>
              
              {/* Action Button */}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                <Play className="w-4 h-4" />
                Start Quiz
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide 
                ? 'bg-blue-500' 
                : isDarkMode ? 'bg-slate-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Show More Button */}
      {filteredQuizzes.length > itemsPerSlide && (
        <div className="text-center mt-8">
          <button className={`${isDarkMode ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'} px-8 py-3 rounded-lg font-medium transition-colors`}>
            Load More Quizzes
          </button>
        </div>
      )}
    </section>
  );
};

export default QuizzesByDifficulty;