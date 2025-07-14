import React from 'react';
import { Play } from 'lucide-react';

const LatestQuizzes = () => {
  const quizzes = [
    {
      id: 1,
      title: 'World Geography Challenge',
      category: 'Geography',
      difficulty: 'Medium',
      image: 'https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      id: 2,
      title: 'Science Quiz: Space Exploration',
      category: 'Science',
      difficulty: 'Hard',
      image: 'https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-blue-600 to-purple-700'
    },
    {
      id: 3,
      title: 'History: Ancient Civilizations',
      category: 'History',
      difficulty: 'Medium',
      image: 'https://images.pexels.com/photos/161815/architecture-building-palace-castle-161815.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      id: 4,
      title: 'Mathematical Puzzles',
      category: 'Mathematics',
      difficulty: 'Hard',
      image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-purple-600 to-pink-600'
    },
  ];

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl lg:text-3xl font-bold text-white">Latest Quizzes</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
        {quizzes.map((quiz) => (
          <div key={quiz.id} className="bg-slate-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group cursor-pointer">
            <div className="relative h-40 lg:h-48 overflow-hidden">
              <img 
                src={quiz.image} 
                alt={quiz.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${quiz.gradient} opacity-60`}></div>
              
              {/* Difficulty badge */}
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                  quiz.difficulty === 'Hard' ? 'bg-red-500' : 
                  quiz.difficulty === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
                }`}>
                  {quiz.difficulty}
                </span>
              </div>
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
            </div>
            
            <div className="p-4 lg:p-6">
              <h3 className="text-white text-base lg:text-lg font-bold mb-2 line-clamp-2">{quiz.title}</h3>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-xs lg:text-sm font-medium">{quiz.category}</span>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 lg:px-4 py-2 rounded-lg text-xs lg:text-sm font-medium transition-colors">
                  Play Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
          View All Quizzes
        </button>
      </div>
    </section>
  );
};

export default LatestQuizzes;