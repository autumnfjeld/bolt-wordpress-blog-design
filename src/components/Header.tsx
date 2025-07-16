import React from 'react';
import { Zap, Sparkles } from 'lucide-react';

interface HeaderProps {
  onExamplesClick?: () => void;
  onStartClick?: () => void;
  onChooseDesignClick?: () => void;
}

export default function Header({ onExamplesClick, onStartClick }: HeaderProps) {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Zap className="h-8 w-8 text-blue-600" />
              <Sparkles className="h-4 w-4 text-purple-500 absolute -top-1 -right-1" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              WP AI Blog
            </h1>
          </div>
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={onExamplesClick}
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Examples
              </button>
            </nav>
            <button
              onClick={onStartClick}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              Start Creating Now
              <div className="ml-2 w-2 h-2 bg-white rounded-full animate-pulse" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}