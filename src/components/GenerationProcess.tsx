import React, { useState, useEffect } from 'react';
import { Loader, CheckCircle, Sparkles, Code, Palette, Rocket, Globe } from 'lucide-react';

interface GenerationStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  duration: number;
}

const steps: GenerationStep[] = [
  {
    id: 'analyze',
    title: 'Analyzing Your Blog',
    description: 'Reading your WordPress content and structure',
    icon: <Globe className="w-6 h-6" />,
    duration: 3000
  },
  {
    id: 'design',
    title: 'Generating Design',
    description: 'Creating custom layouts based on your style choice',
    icon: <Palette className="w-6 h-6" />,
    duration: 4000
  },
  {
    id: 'optimize',
    title: 'Optimizing Performance',
    description: 'Ensuring fast loading and smooth interactions',
    icon: <Sparkles className="w-6 h-6" />,
    duration: 3000
  },
  {
    id: 'build',
    title: 'Building Frontend',
    description: 'Compiling your new website with modern technologies',
    icon: <Code className="w-6 h-6" />,
    duration: 5000
  },
  {
    id: 'deploy',
    title: 'Deploying Live',
    description: 'Making your new frontend available online',
    icon: <Rocket className="w-6 h-6" />,
    duration: 2000
  }
];

interface GenerationProcessProps {
  wordpressUrl: string;
  selectedStyle: string;
  onComplete: () => void;
}

export default function GenerationProcess({ wordpressUrl, selectedStyle, onComplete }: GenerationProcessProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);

  useEffect(() => {
    const processSteps = async () => {
      for (let i = 0; i < steps.length; i++) {
        setCurrentStep(i);
        
        await new Promise(resolve => setTimeout(resolve, steps[i].duration));
        
        setCompletedSteps(prev => [...prev, steps[i].id]);
      }
      
      setTimeout(onComplete, 1000);
    };

    processSteps();
  }, [onComplete]);

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen flex items-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-10 h-10 text-white animate-pulse" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Creating Your Frontend
          </h2>
          <p className="text-xl text-gray-600">
            Transforming <span className="font-semibold text-blue-600">{new URL(wordpressUrl).hostname}</span> with <span className="font-semibold text-purple-600">{selectedStyle}</span> design
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8">
          <div className="space-y-6">
            {steps.map((step, index) => {
              const isCompleted = completedSteps.includes(step.id);
              const isCurrent = currentStep === index;
              const isPending = index > currentStep;

              return (
                <div
                  key={step.id}
                  className={`flex items-center p-4 rounded-xl transition-all duration-500 ${
                    isCurrent
                      ? 'bg-blue-50 border border-blue-200'
                      : isCompleted
                      ? 'bg-green-50 border border-green-200'
                      : 'bg-gray-50 border border-gray-200'
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isCurrent
                        ? 'bg-blue-600 text-white'
                        : isCompleted
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-300 text-gray-600'
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : isCurrent ? (
                      <Loader className="w-6 h-6 animate-spin" />
                    ) : (
                      step.icon
                    )}
                  </div>
                  
                  <div className="ml-4 flex-grow">
                    <h3
                      className={`font-semibold transition-colors duration-500 ${
                        isCurrent
                          ? 'text-blue-900'
                          : isCompleted
                          ? 'text-green-900'
                          : 'text-gray-600'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-sm transition-colors duration-500 ${
                        isCurrent
                          ? 'text-blue-700'
                          : isCompleted
                          ? 'text-green-700'
                          : 'text-gray-500'
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>

                  {isCurrent && (
                    <div className="flex-shrink-0">
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8">
            <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 h-full rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: `${((completedSteps.length + (currentStep < steps.length ? 0.5 : 0)) / steps.length) * 100}%`
                }}
              />
            </div>
            <div className="flex justify-between mt-2 text-sm">
              <span className="text-gray-600">Progress</span>
              <span className="font-semibold text-gray-900">
                {Math.round(((completedSteps.length + (currentStep < steps.length ? 0.5 : 0)) / steps.length) * 100)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}