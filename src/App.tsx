import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BlogUrlForm from './components/BlogUrlForm';
import DesignStyleSelector from './components/DesignStyleSelector';
import GenerationProcess from './components/GenerationProcess';
import CompletionScreen from './components/CompletionScreen';
import DesignExamplesModal from './components/DesignExamplesModal';

type AppStep = 'hero' | 'url-form' | 'style-selection' | 'generation' | 'completion';

function App() {
  const [currentStep, setCurrentStep] = useState<AppStep>('hero');
  const [wordpressUrl, setWordpressUrl] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('');
  const [examplesModalOpen, setExamplesModalOpen] = useState(false);
  const [examplesStyleId, setExamplesStyleId] = useState('minimal');

  const handleUrlSubmit = (url: string) => {
    setWordpressUrl(url);
    setCurrentStep('style-selection');
  };

  const handleStyleSelect = (styleId: string) => {
    setSelectedStyle(styleId);
    setCurrentStep('generation');
  };

  const handleGenerationComplete = () => {
    setCurrentStep('completion');
  };

  const handleExamplesClick = () => {
    setExamplesStyleId('minimal');
    setExamplesModalOpen(true);
  };

  const handleChooseDesignClick = () => {
    setExamplesStyleId('minimal');
    setExamplesModalOpen(true);
  };

  const handleStartClick = () => {
    setCurrentStep('url-form');
  };

  const handleChooseStyleFromModal = (styleId: string) => {
    setExamplesModalOpen(false);
    setCurrentStep('url-form');
    // Pre-select the style for when they get to style selection
    setSelectedStyle(styleId);
  };

  // Keyboard navigation for examples modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!examplesModalOpen) return;
      
      if (e.key === 'Escape') {
        setExamplesModalOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [examplesModalOpen]);

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'hero':
        return <Hero onExamplesClick={handleExamplesClick} onStartClick={handleStartClick} onChooseDesignClick={handleChooseDesignClick} />;
      case 'url-form':
        return <BlogUrlForm onNext={handleUrlSubmit} />;
      case 'style-selection':
        return <DesignStyleSelector wordpressUrl={wordpressUrl} onNext={handleStyleSelect} preSelectedStyle={selectedStyle} />;
      case 'generation':
        return (
          <GenerationProcess
            wordpressUrl={wordpressUrl}
            selectedStyle={selectedStyle}
            onComplete={handleGenerationComplete}
          />
        );
      case 'completion':
        return (
          <CompletionScreen
            wordpressUrl={wordpressUrl}
            selectedStyle={selectedStyle}
          />
        );
      default:
        return <Hero onExamplesClick={handleExamplesClick} onStartClick={handleStartClick} onChooseDesignClick={handleChooseDesignClick} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onExamplesClick={handleExamplesClick}
        onStartClick={handleStartClick}
      />
      {renderCurrentStep()}

      {/* Global Examples Modal */}
      <DesignExamplesModal
        isOpen={examplesModalOpen}
        onClose={() => setExamplesModalOpen(false)}
        onChooseStyle={handleChooseStyleFromModal}
        styleId={examplesStyleId}
        styleName="Design Examples"
      />
    </div>
  );
}

export default App;