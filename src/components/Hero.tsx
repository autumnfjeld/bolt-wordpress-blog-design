import React from 'react';
import { Globe, Palette, Rocket } from 'lucide-react';

interface HeroProps {
  onExamplesClick?: () => void;
  onStartClick?: () => void;
  onChooseDesignClick?: () => void;
}

export default function Hero({ onExamplesClick, onStartClick, onChooseDesignClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-40 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200">
              <Rocket className="w-4 h-4 mr-2" />
              Transform Your WordPress Blog
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Create a{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Beautiful Frontend
            </span>
            <br />
            for Your WordPress Blog
          </h1>

          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transform your existing WordPress blog into a stunning, modern website with our AI-powered design generator. 
            No coding required – just enter your URL and choose your style.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <button
              onClick={onStartClick}
              className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:shadow-lg hover:bg-white/80 hover:border-blue-300 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
            >
              <Globe className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Connect WordPress</h3>
              <p className="text-gray-600 text-sm text-center group-hover:text-gray-700">Simply enter your WordPress blog URL to get started</p>
            </button>
            <button
              onClick={onChooseDesignClick}
              className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:shadow-lg hover:bg-white/80 hover:border-purple-300 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
            >
              <Palette className="w-12 h-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">Choose Design</h3>
              <p className="text-gray-600 text-sm text-center group-hover:text-gray-700">Select from beautiful, modern design templates</p>
            </button>
            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:shadow-lg transition-all duration-300">
              <Rocket className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Go Live</h3>
              <p className="text-gray-600 text-sm text-center">Launch your new frontend in minutes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}