import React, { useState } from 'react';
import { Link, CheckCircle, AlertCircle, Loader } from 'lucide-react';

interface BlogUrlFormProps {
  onNext: (url: string) => void;
}

export default function BlogUrlForm({ onNext }: BlogUrlFormProps) {
  const [url, setUrl] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const [validationStatus, setValidationStatus] = useState<'idle' | 'valid' | 'invalid'>('idle');
  const [error, setError] = useState('');

  const validateUrl = (inputUrl: string) => {
    try {
      const urlObj = new URL(inputUrl);
      return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url.trim()) {
      setError('Please enter a WordPress URL');
      setValidationStatus('invalid');
      return;
    }

    if (!validateUrl(url)) {
      setError('Please enter a valid URL (including http:// or https://)');
      setValidationStatus('invalid');
      return;
    }

    setIsValidating(true);
    setError('');
    
    // Simulate URL validation
    setTimeout(() => {
      setIsValidating(false);
      setValidationStatus('valid');
      setTimeout(() => onNext(url), 1000);
    }, 2000);
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    setValidationStatus('idle');
    setError('');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Enter Your WordPress Blog URL
          </h2>
          <p className="text-gray-600">
            We'll analyze your existing WordPress blog to create the perfect frontend design
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="wordpress-url" className="block text-sm font-semibold text-gray-700 mb-3">
                WordPress Blog URL
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Link className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="url"
                  id="wordpress-url"
                  value={url}
                  onChange={handleUrlChange}
                  placeholder="https://yourblog.wordpress.com"
                  className={`w-full pl-12 pr-12 py-4 text-lg border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                    validationStatus === 'valid'
                      ? 'border-green-300 bg-green-50 focus:border-green-500'
                      : validationStatus === 'invalid'
                      ? 'border-red-300 bg-red-50 focus:border-red-500'
                      : 'border-gray-200 focus:border-blue-500 focus:bg-blue-50/50'
                  }`}
                  disabled={isValidating}
                />
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                  {isValidating && <Loader className="w-5 h-5 text-blue-500 animate-spin" />}
                  {validationStatus === 'valid' && <CheckCircle className="w-5 h-5 text-green-500" />}
                  {validationStatus === 'invalid' && <AlertCircle className="w-5 h-5 text-red-500" />}
                </div>
              </div>
              {error && (
                <p className="mt-2 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {error}
                </p>
              )}
              {validationStatus === 'valid' && (
                <p className="mt-2 text-sm text-green-600 flex items-center">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  WordPress blog detected! Proceeding to design selection...
                </p>
              )}
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Examples of supported URLs:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• https://yourblog.wordpress.com</li>
                <li>• https://example.com (self-hosted WordPress)</li>
                <li>• https://blog.company.com</li>
              </ul>
            </div>

            <button
              type="submit"
              disabled={isValidating || validationStatus === 'valid'}
              className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
                isValidating || validationStatus === 'valid'
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-[1.02]'
              }`}
            >
              {isValidating ? (
                <span className="flex items-center justify-center">
                  <Loader className="w-5 h-5 mr-2 animate-spin" />
                  Analyzing your WordPress blog...
                </span>
              ) : validationStatus === 'valid' ? (
                'Blog verified! Proceeding...'
              ) : (
                'Continue to Design Selection'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}