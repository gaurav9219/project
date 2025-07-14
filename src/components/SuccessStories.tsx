import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const SuccessStories = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Quiz Creator',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
      quote: "I've created over 50 quizzes and earned more than $2,000 in just three months. The platform makes it incredibly easy to monetize my knowledge!",
      earnings: '$2,000+',
      quizzes: '50',
      followers: '1.2k',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Quiz Player',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
      quote: "Playing quizzes here has not only been fun but also rewarding. I've won over $500 in prizes while learning new things every day!",
      earnings: '$500+',
      quizzes: '120',
      followers: '890',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Educator',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
      quote: "As an educator, this platform has revolutionized how I engage with my students. The interactive quizzes make learning so much more enjoyable!",
      earnings: '$1,500+',
      quizzes: '35',
      followers: '2.1k',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play functionality
  React.useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 7000); // Change testimonial every 7 seconds

      return () => clearInterval(interval);
    }
  }, [testimonials.length, isPaused]);

  const current = testimonials[currentTestimonial];

  return (
    <section className="mb-8 sm:mb-12 py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl sm:rounded-2xl">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Success Stories</h2>
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
          Hear from our community of quiz creators and players who are earning rewards and building their audience
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="flex items-center justify-between"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Button - Left */}
          <button className="hidden sm:block p-3 bg-slate-700 hover:bg-slate-600 text-white rounded-full transition-colors z-10">
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Testimonial Content */}
          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 flex-1 mx-0 sm:mx-4 lg:mx-8">
            {/* Quote Icon */}
            <div className="hidden xl:block">
              <Quote className="w-24 h-24 text-blue-500 opacity-60" />
            </div>

            {/* User Avatar */}
            <div className="relative">
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl">
                <img 
                  src={current.avatar} 
                  alt={current.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold">
                  {current.role}
                </span>
              </div>
            </div>

            {/* Testimonial Text and Stats */}
            <div className="flex-1 max-w-2xl text-center lg:text-left">
              {/* Star Rating */}
              <div className="flex items-center justify-center lg:justify-start mb-3 sm:mb-4">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-white text-base sm:text-lg lg:text-xl italic leading-relaxed mb-4 sm:mb-6">
                "{current.quote}"
              </blockquote>

              {/* User Info */}
              <div className="mb-4 sm:mb-6">
                <h4 className="text-white text-xl sm:text-2xl font-bold">{current.name}</h4>
                <p className="text-slate-400 text-sm sm:text-base">{current.role}</p>
              </div>

              {/* Stats */}
              <div className="flex justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8">
                <div className="text-center">
                  <div className="text-blue-400 text-lg sm:text-xl lg:text-2xl font-bold">{current.earnings}</div>
                  <div className="text-slate-400 text-xs sm:text-sm">Earnings</div>
                </div>
                <div className="text-center">
                  <div className="text-green-400 text-lg sm:text-xl lg:text-2xl font-bold">{current.quizzes}</div>
                  <div className="text-slate-400 text-xs sm:text-sm">Quizzes</div>
                </div>
                <div className="text-center">
                  <div className="text-purple-400 text-lg sm:text-xl lg:text-2xl font-bold">{current.followers}</div>
                  <div className="text-slate-400 text-xs sm:text-sm">Followers</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Button - Right */}
          <button className="hidden sm:block p-3 bg-slate-700 hover:bg-slate-600 text-white rounded-full transition-colors z-10">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex sm:hidden justify-center gap-4 mt-6">
          <button
            onClick={prevTestimonial}
            className="p-2 bg-slate-700 hover:bg-slate-600 text-white rounded-full transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className="p-2 bg-slate-700 hover:bg-slate-600 text-white rounded-full transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 sm:mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentTestimonial ? 'bg-blue-500' : 'bg-slate-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;