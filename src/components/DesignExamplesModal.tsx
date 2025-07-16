import React, { useState } from 'react';
import { X, Calendar, User, ArrowRight, Heart, MessageCircle, Share2, ChevronLeft, ChevronRight, Triangle, Waves, Square, Clock, Sparkles, Zap, Briefcase, Camera, BookOpen, Palette } from 'lucide-react';

interface DesignExamplesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onChooseStyle: (styleId: string) => void;
  styleId: string;
  styleName: string;
}

const designStyles = [
  {
    id: 'minimal',
    name: 'Minimal & Clean',
    icon: <Sparkles className="w-5 h-5" />,
    description: 'Clean lines, plenty of white space, focus on content'
  },
  {
    id: 'modern',
    name: 'Modern & Bold',
    icon: <Zap className="w-5 h-5" />,
    description: 'Vibrant colors, dynamic layouts, eye-catching design'
  },
  {
    id: 'elegant',
    name: 'Elegant & Sophisticated',
    icon: <Palette className="w-5 h-5" />,
    description: 'Premium feel with refined aesthetics and smooth transitions'
  },
  {
    id: 'professional',
    name: 'Professional & Corporate',
    icon: <Briefcase className="w-5 h-5" />,
    description: 'Business-focused design with trust-building elements'
  },
  {
    id: 'creative',
    name: 'Creative & Artistic',
    icon: <Camera className="w-5 h-5" />,
    description: 'Unique layouts with artistic flair and creative elements'
  },
  {
    id: 'magazine',
    name: 'Magazine Style',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Editorial layout with focus on readability and content'
  },
  {
    id: 'geometric',
    name: 'Geometric & Structured',
    icon: <Triangle className="w-5 h-5" />,
    description: 'Bold geometric shapes, primary colors, and clean functional design'
  },
  {
    id: 'playful',
    name: 'Playful & Vibrant',
    icon: <Waves className="w-5 h-5" />,
    description: 'Wild patterns, bright clashing colors, and creative chaos'
  },
  {
    id: 'bold-contrast',
    name: 'Bold & Edgy',
    icon: <Square className="w-5 h-5" />,
    description: 'High contrast, unconventional layouts, and rebellious design'
  },
  {
    id: 'retro',
    name: 'Retro & Nostalgic',
    icon: <Clock className="w-5 h-5" />,
    description: 'Vintage vibes with saturated colors, gradients, and nostalgic elements'
  }
];

const samplePosts = [
  {
    title: "The Future of Web Design: Trends to Watch in 2024",
    excerpt: "Discover the latest trends shaping the future of web design, from AI-powered layouts to immersive user experiences.",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Design",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Building Sustainable Digital Products",
    excerpt: "Learn how to create environmentally conscious digital products that reduce carbon footprint while maintaining performance.",
    author: "Mike Chen",
    date: "March 12, 2024",
    readTime: "8 min read",
    category: "Technology",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "The Art of Minimalist Photography",
    excerpt: "Explore the principles of minimalist photography and how less can truly be more in visual storytelling.",
    author: "Emma Davis",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "Photography",
    image: "https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

const getStyleClasses = (styleId: string) => {
  switch (styleId) {
    case 'minimal':
      return {
        container: 'bg-white',
        header: 'bg-white border-b border-gray-100',
        title: 'text-gray-900 font-light text-2xl',
        nav: 'text-gray-600 hover:text-gray-900',
        card: 'bg-white border border-gray-100 hover:shadow-sm',
        cardTitle: 'text-gray-900 font-medium',
        cardText: 'text-gray-600',
        button: 'text-gray-700 hover:text-gray-900'
      };
    case 'modern':
      return {
        container: 'bg-gradient-to-br from-purple-900 to-blue-900 text-white',
        header: 'bg-black/20 backdrop-blur-md border-b border-white/10',
        title: 'text-white font-bold text-3xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent',
        nav: 'text-purple-200 hover:text-white',
        card: 'bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20',
        cardTitle: 'text-white font-bold',
        cardText: 'text-purple-100',
        button: 'text-purple-300 hover:text-white'
      };
    case 'elegant':
      return {
        container: 'bg-gradient-to-br from-rose-50 to-orange-50',
        header: 'bg-white/80 backdrop-blur-md border-b border-rose-100',
        title: 'text-rose-900 font-serif text-3xl',
        nav: 'text-rose-600 hover:text-rose-800',
        card: 'bg-white/60 backdrop-blur-sm border border-rose-200 hover:shadow-lg hover:shadow-rose-500/10',
        cardTitle: 'text-rose-900 font-serif',
        cardText: 'text-rose-700',
        button: 'text-rose-600 hover:text-rose-800'
      };
    case 'professional':
      return {
        container: 'bg-slate-50',
        header: 'bg-slate-900 text-white',
        title: 'text-white font-semibold text-2xl',
        nav: 'text-slate-300 hover:text-white',
        card: 'bg-white border border-slate-200 hover:shadow-md',
        cardTitle: 'text-slate-900 font-semibold',
        cardText: 'text-slate-600',
        button: 'text-blue-600 hover:text-blue-800'
      };
    case 'creative':
      return {
        container: 'bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100',
        header: 'bg-gradient-to-r from-pink-500 to-purple-600 text-white',
        title: 'text-white font-bold text-3xl transform -rotate-1',
        nav: 'text-pink-100 hover:text-white',
        card: 'bg-white border-2 border-pink-300 hover:border-purple-400 transform hover:rotate-1 hover:scale-105',
        cardTitle: 'text-purple-900 font-bold',
        cardText: 'text-pink-700',
        button: 'text-purple-600 hover:text-pink-600'
      };
    case 'magazine':
      return {
        container: 'bg-white',
        header: 'bg-yellow-400 text-black border-b-4 border-black',
        title: 'text-black font-bold text-4xl font-serif',
        nav: 'text-black hover:text-yellow-800 font-semibold',
        card: 'bg-white border-l-4 border-yellow-400 hover:border-black pl-4',
        cardTitle: 'text-black font-bold font-serif text-xl',
        cardText: 'text-gray-800',
        button: 'text-yellow-600 hover:text-black font-semibold'
      };
    case 'geometric':
      return {
        container: 'bg-white',
        header: 'bg-red-500 text-white',
        title: 'text-white font-bold text-3xl font-mono',
        nav: 'text-red-100 hover:text-white font-bold',
        card: 'bg-white border-4 border-blue-500 hover:border-yellow-400',
        cardTitle: 'text-blue-600 font-bold font-mono',
        cardText: 'text-black',
        button: 'text-red-500 hover:text-blue-600 font-bold'
      };
    case 'playful':
      return {
        container: 'bg-gradient-to-br from-pink-200 via-purple-200 to-cyan-200',
        header: 'bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white',
        title: 'text-white font-bold text-3xl transform rotate-2',
        nav: 'text-pink-100 hover:text-white font-bold',
        card: 'bg-white border-4 border-dashed border-purple-400 hover:border-pink-500 transform hover:-rotate-1',
        cardTitle: 'text-purple-600 font-bold',
        cardText: 'text-pink-700',
        button: 'text-cyan-600 hover:text-purple-600 font-bold'
      };
    case 'bold-contrast':
      return {
        container: 'bg-black text-white',
        header: 'bg-white text-black border-b-4 border-red-500',
        title: 'text-black font-bold text-4xl',
        nav: 'text-black hover:text-red-500 font-bold',
        card: 'bg-white text-black border-4 border-red-500 hover:bg-red-500 hover:text-white',
        cardTitle: 'font-bold text-xl',
        cardText: 'opacity-80',
        button: 'text-red-500 hover:text-black font-bold'
      };
    case 'retro':
      return {
        container: 'bg-gradient-to-br from-purple-300 via-pink-300 to-orange-300',
        header: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white',
        title: 'text-white font-bold text-3xl font-serif',
        nav: 'text-purple-100 hover:text-white',
        card: 'bg-white/90 backdrop-blur-sm border border-purple-300 hover:shadow-lg hover:shadow-purple-500/20',
        cardTitle: 'text-purple-800 font-bold font-serif',
        cardText: 'text-purple-700',
        button: 'text-pink-600 hover:text-purple-800'
      };
    default:
      return {
        container: 'bg-white',
        header: 'bg-white border-b border-gray-200',
        title: 'text-gray-900 font-semibold text-2xl',
        nav: 'text-gray-600 hover:text-gray-900',
        card: 'bg-white border border-gray-200 hover:shadow-md',
        cardTitle: 'text-gray-900 font-semibold',
        cardText: 'text-gray-600',
        button: 'text-blue-600 hover:text-blue-800'
      };
  }
};

export default function DesignExamplesModal({ isOpen, onClose, onChooseStyle, styleId: initialStyleId, styleName: initialStyleName }: DesignExamplesModalProps) {
  const [currentStyleId, setCurrentStyleId] = useState(initialStyleId || 'minimal');
  
  if (!isOpen) return null;

  const currentStyle = designStyles.find(s => s.id === currentStyleId) || designStyles[0];
  const currentIndex = designStyles.findIndex(s => s.id === currentStyleId);
  const styles = getStyleClasses(currentStyleId);

  const nextStyle = () => {
    const nextIndex = (currentIndex + 1) % designStyles.length;
    setCurrentStyleId(designStyles[nextIndex].id);
  };

  const prevStyle = () => {
    const prevIndex = currentIndex === 0 ? designStyles.length - 1 : currentIndex - 1;
    setCurrentStyleId(designStyles[prevIndex].id);
  };

  const handleChooseStyle = () => {
    onChooseStyle(currentStyleId);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-black/50 backdrop-blur-sm" onClick={onClose} />
        
        <div className="inline-block w-full max-w-7xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-2xl rounded-2xl">
          {/* Modal Header with Style Selector */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-3">
                <div className="flex items-center space-x-2">
                  {currentStyle.icon}
                  <h3 className="text-2xl font-bold text-gray-900">{currentStyle.name}</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={prevStyle}
                    className="p-2 text-gray-400 hover:text-gray-600 hover:bg-white rounded-lg transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-sm text-gray-500 px-3 py-1 bg-white rounded-full">
                    {currentIndex + 1} of {designStyles.length}
                  </span>
                  <button
                    onClick={nextStyle}
                    className="p-2 text-gray-400 hover:text-gray-600 hover:bg-white rounded-lg transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <p className="text-gray-600">{currentStyle.description}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-white rounded-lg transition-colors ml-4"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Style Tabs */}
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <div className="flex flex-wrap gap-2">
              {designStyles.map((style) => (
                <button
                  key={style.id}
                  onClick={() => setCurrentStyleId(style.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    currentStyleId === style.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {style.icon}
                  <span className="hidden sm:inline">{style.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Preview Content */}
          <div className="p-6">
            <div className={`rounded-xl overflow-hidden border-2 border-gray-200 transition-all duration-500 ${styles.container}`}>
              {/* Mock Header */}
              <header className={`p-4 transition-all duration-500 ${styles.header}`}>
                <div className="flex items-center justify-between max-w-6xl mx-auto">
                  <h1 className={`transition-all duration-500 ${styles.title}`}>My Awesome Blog</h1>
                  <nav className="hidden md:flex space-x-6">
                    <a href="#" className={`${styles.nav} transition-all duration-300`}>Home</a>
                    <a href="#" className={`${styles.nav} transition-all duration-300`}>About</a>
                    <a href="#" className={`${styles.nav} transition-all duration-300`}>Blog</a>
                    <a href="#" className={`${styles.nav} transition-all duration-300`}>Contact</a>
                  </nav>
                </div>
              </header>

              {/* Mock Content */}
              <main className="p-6 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {samplePosts.map((post, index) => (
                    <article key={index} className={`${styles.card} rounded-lg overflow-hidden transition-all duration-500`}>
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <div className="flex items-center text-sm mb-2 opacity-75">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span className="mr-3">{post.date}</span>
                          <User className="w-4 h-4 mr-1" />
                          <span>{post.author}</span>
                        </div>
                        <h3 className={`${styles.cardTitle} text-lg mb-2 line-clamp-2 transition-all duration-500`}>
                          {post.title}
                        </h3>
                        <p className={`${styles.cardText} text-sm mb-3 line-clamp-3 transition-all duration-500`}>
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className={`${styles.cardText} text-xs transition-all duration-500`}>{post.readTime}</span>
                          <div className="flex items-center space-x-2 text-sm">
                            <button className={`${styles.button} transition-all duration-300`}>
                              <Heart className="w-4 h-4" />
                            </button>
                            <button className={`${styles.button} transition-all duration-300`}>
                              <MessageCircle className="w-4 h-4" />
                            </button>
                            <button className={`${styles.button} transition-all duration-300`}>
                              <Share2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Mock Pagination */}
                <div className="flex justify-center mt-8">
                  <div className="flex items-center space-x-2">
                    <button className={`${styles.button} px-3 py-1 rounded transition-all duration-300`}>Previous</button>
                    <span className={`${styles.cardText} px-3 py-1 transition-all duration-500`}>1 of 5</span>
                    <button className={`${styles.button} px-3 py-1 rounded transition-all duration-300 flex items-center`}>
                      Next <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </main>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
            <div className="flex items-center space-x-4">
              <p className="text-gray-600">
                Exploring <span className="font-semibold text-gray-900">{currentStyle.name}</span> style
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span>Use</span>
                <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs">←</kbd>
                <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs">→</kbd>
                <span>to navigate</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={onClose}
                className="text-gray-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Close
              </button>
              <button
                onClick={handleChooseStyle}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Choose This Style
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}