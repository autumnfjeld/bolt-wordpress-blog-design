import React, { useState, useEffect } from 'react';
import { Palette, Eye, Check, Sparkles, Zap, Heart, Briefcase, Camera, BookOpen, Coffee, Triangle, Waves, Square, Clock } from 'lucide-react';
import DesignExamplesModal from './DesignExamplesModal';

interface DesignStyle {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  preview: string;
  features: string[];
  color: string;
}

const designStyles: DesignStyle[] = [
  {
    id: 'minimal',
    name: 'Minimal & Clean',
    description: 'Clean lines, plenty of white space, focus on content',
    icon: <Sparkles className="w-6 h-6" />,
    preview: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    features: ['Clean typography', 'Generous whitespace', 'Subtle animations'],
    color: 'blue'
  },
  {
    id: 'modern',
    name: 'Modern & Bold',
    description: 'Vibrant colors, dynamic layouts, eye-catching design',
    icon: <Zap className="w-6 h-6" />,
    preview: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    features: ['Bold typography', 'Vibrant colors', 'Modern layouts'],
    color: 'purple'
  },
  {
    id: 'elegant',
    name: 'Elegant & Sophisticated',
    description: 'Premium feel with refined aesthetics and smooth transitions',
    icon: <Heart className="w-6 h-6" />,
    preview: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    features: ['Refined aesthetics', 'Smooth transitions', 'Premium feel'],
    color: 'pink'
  },
  {
    id: 'professional',
    name: 'Professional & Corporate',
    description: 'Business-focused design with trust-building elements',
    icon: <Briefcase className="w-6 h-6" />,
    preview: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)',
    features: ['Professional layout', 'Trust elements', 'Corporate style'],
    color: 'blue'
  },
  {
    id: 'creative',
    name: 'Creative & Artistic',
    description: 'Unique layouts with artistic flair and creative elements',
    icon: <Camera className="w-6 h-6" />,
    preview: 'linear-gradient(135deg, #fa7671 0%, #ff6b6b 100%)',
    features: ['Artistic layouts', 'Creative elements', 'Unique design'],
    color: 'red'
  },
  {
    id: 'magazine',
    name: 'Magazine Style',
    description: 'Editorial layout with focus on readability and content',
    icon: <BookOpen className="w-6 h-6" />,
    preview: 'linear-gradient(135deg, #fd79a8 0%, #fdcb6e 100%)',
    features: ['Editorial layout', 'Content focus', 'Reading experience'],
    color: 'yellow'
  },
  {
    id: 'geometric',
    name: 'Geometric & Structured',
    description: 'Bold geometric shapes, primary colors, and clean functional design',
    icon: <Triangle className="w-6 h-6" />,
    preview: 'linear-gradient(45deg, #ff3333 0%, #3333ff 25%, #ffff33 50%, #ff3333 75%, #3333ff 100%)',
    features: ['Geometric shapes', 'Primary colors', 'Structured layouts'],
    color: 'red'
  },
  {
    id: 'playful',
    name: 'Playful & Vibrant',
    description: 'Wild patterns, bright clashing colors, and creative chaos',
    icon: <Waves className="w-6 h-6" />,
    preview: 'linear-gradient(135deg, #ff6b9d 0%, #c44569 25%, #f8b500 50%, #6c5ce7 75%, #00cec9 100%)',
    features: ['Wild patterns', 'Bright colors', 'Creative layouts'],
    color: 'pink'
  },
  {
    id: 'bold-contrast',
    name: 'Bold & Edgy',
    description: 'High contrast, unconventional layouts, and rebellious design',
    icon: <Square className="w-6 h-6" />,
    preview: 'linear-gradient(90deg, #000000 0%, #ffffff 25%, #ff0000 50%, #000000 75%, #ffffff 100%)',
    features: ['High contrast', 'Unconventional layouts', 'Bold statements'],
    color: 'gray'
  },
  {
    id: 'retro',
    name: 'Retro & Nostalgic',
    description: 'Vintage vibes with saturated colors, gradients, and nostalgic elements',
    icon: <Clock className="w-6 h-6" />,
    preview: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 25%, #fecfef 50%, #fad0c4 75%, #ffd1ff 100%)',
    features: ['Vintage aesthetics', 'Saturated colors', 'Nostalgic elements'],
    color: 'purple'
  }
];

interface DesignStyleSelectorProps {
  wordpressUrl: string;
  onNext: (styleId: string) => void;
  preSelectedStyle?: string;
}

export default function DesignStyleSelector({ wordpressUrl, onNext, preSelectedStyle }: DesignStyleSelectorProps) {
  const [selectedStyle, setSelectedStyle] = useState<string>(preSelectedStyle || '');
  const [hoveredStyle, setHoveredStyle] = useState<string>('');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalStyleId, setModalStyleId] = useState<string>('');

  // Set pre-selected style when component mounts
  useEffect(() => {
    if (preSelectedStyle) {
      setSelectedStyle(preSelectedStyle);
    }
  }, [preSelectedStyle]);

  const handleStyleSelect = (styleId: string) => {
    setSelectedStyle(styleId);
  };

  const handleContinue = () => {
    if (selectedStyle) {
      onNext(selectedStyle);
    }
  };

  const handlePreviewClick = (e: React.MouseEvent, styleId: string) => {
    e.stopPropagation();
    setModalStyleId(styleId);
    setModalOpen(true);
  };

  const selectedStyleData = designStyles.find(s => s.id === modalStyleId);

  return (
    <section className="py-16 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
            <Check className="w-4 h-4 mr-2" />
            Connected to {new URL(wordpressUrl).hostname}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Design Style
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the design style that best matches your brand and content. 
            Each style is carefully crafted for optimal user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {designStyles.map((style) => (
            <div
              key={style.id}
              className={`relative group cursor-pointer transition-all duration-300 ${
                selectedStyle === style.id
                  ? 'transform scale-105 z-10'
                  : hoveredStyle === style.id
                  ? 'transform scale-102'
                  : ''
              }`}
              onClick={() => handleStyleSelect(style.id)}
              onMouseEnter={() => setHoveredStyle(style.id)}
              onMouseLeave={() => setHoveredStyle('')}
            >
              <div
                className={`bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                  selectedStyle === style.id
                    ? 'border-blue-500 shadow-xl shadow-blue-500/20'
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-lg'
                }`}
              >
                {/* Preview Section */}
                <div 
                  className="h-32 relative"
                  style={{ background: style.preview }}
                >
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
                  <div className="absolute top-4 right-4">
                    {selectedStyle === style.id && (
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    {style.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {style.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {style.description}
                  </p>
                  
                  <div className="space-y-2">
                    {style.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Preview Button */}
                <div className="px-6 pb-6">
                  <button 
                    onClick={(e) => handlePreviewClick(e, style.id)}
                    className="w-full py-2 px-4 text-sm font-medium text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Preview Style
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Continue Button */}
        {selectedStyle && (
          <div className="text-center">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200/50 p-6 max-w-md mx-auto">
              <div className="mb-4">
                <Palette className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">
                  {designStyles.find(s => s.id === selectedStyle)?.name} Selected
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Ready to create your new frontend!
                </p>
              </div>
              <button
                onClick={handleContinue}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Create My Frontend
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Design Examples Modal */}
      <DesignExamplesModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onChooseStyle={(styleId) => {
          setModalOpen(false);
          setSelectedStyle(styleId);
        }}
        styleId={modalStyleId}
        styleName={selectedStyleData?.name || ''}
      />
    </section>
  );
}