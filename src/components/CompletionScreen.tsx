import React, { useState } from 'react';
import { CheckCircle, ExternalLink, Download, Share2, Settings, Eye } from 'lucide-react';
import PreviewModal from './PreviewModal';

interface CompletionScreenProps {
  wordpressUrl: string;
  selectedStyle: string;
}

export default function CompletionScreen({ wordpressUrl, selectedStyle }: CompletionScreenProps) {
  const [previewModalOpen, setPreviewModalOpen] = useState(false);
  const generatedUrl = `https://${new URL(wordpressUrl).hostname.replace(/\./g, '-')}-frontend.wpaiblog.com`;

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 via-white to-blue-50 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Your Frontend is Ready! 🎉
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We've successfully created a beautiful new frontend for your WordPress blog. 
            Your content is now live with a modern, fast-loading design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Preview Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Your New Frontend</h3>
              <p className="text-blue-100">Live and ready for visitors</p>
            </div>
            <div className="p-6">
              <div className="bg-gray-100 rounded-lg p-4 mb-4">
                <code className="text-sm text-gray-800 break-all">{generatedUrl}</code>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={() => window.open(generatedUrl, '_blank')}
                  className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Visit Site
                </button>
                <button 
                  onClick={() => setPreviewModalOpen(true)}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  Preview
                </button>
              </div>
            </div>
          </div>

          {/* Details Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Project Details</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Source Blog</span>
                <span className="font-medium text-gray-900">{new URL(wordpressUrl).hostname}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Design Style</span>
                <span className="font-medium text-gray-900 capitalize">{selectedStyle.replace('-', ' ')}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Status</span>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-1" />
                  Live
                </span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Created</span>
                <span className="font-medium text-gray-900">{new Date().toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <button className="bg-white border border-gray-200 text-gray-700 py-4 px-6 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 flex items-center justify-center">
            <Share2 className="w-5 h-5 mr-2" />
            Share Site
          </button>
          <button className="bg-white border border-gray-200 text-gray-700 py-4 px-6 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 flex items-center justify-center">
            <Settings className="w-5 h-5 mr-2" />
            Customize
          </button>
          <button className="bg-white border border-gray-200 text-gray-700 py-4 px-6 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 flex items-center justify-center">
            <Download className="w-5 h-5 mr-2" />
            Export Code
          </button>
        </div>

        {/* Next Steps */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200/50 p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Next?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Settings className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Customize Further</h4>
              <p className="text-sm text-gray-600">Fine-tune colors, fonts, and layouts to match your brand perfectly</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Share2 className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Share & Promote</h4>
              <p className="text-sm text-gray-600">Start driving traffic to your new, faster, more beautiful blog</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Download className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Own Your Code</h4>
              <p className="text-sm text-gray-600">Download the complete source code for self-hosting</p>
            </div>
          </div>
        </div>

        {/* Preview Modal */}
        <PreviewModal
          isOpen={previewModalOpen}
          onClose={() => setPreviewModalOpen(false)}
          wordpressUrl={wordpressUrl}
          selectedStyle={selectedStyle}
        />
      </div>
    </section>
  );
}