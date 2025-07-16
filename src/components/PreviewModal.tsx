import React from 'react';
import { X, Calendar, User, ArrowRight, Heart, MessageCircle, Share2, ExternalLink } from 'lucide-react';

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  wordpressUrl: string;
  selectedStyle: string;
}

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

// Generate mock content based on the WordPress URL
const generateMockContent = (wordpressUrl: string) => {
  const hostname = new URL(wordpressUrl).hostname;
  const siteName = hostname.replace(/\.(com|org|net|wordpress\.com)$/, '').replace(/\./g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  return {
    siteName,
    posts: [
      {
        title: `Welcome to ${siteName}: Our Journey Begins`,
        excerpt: `Discover the story behind ${siteName} and what makes our content unique. Join us as we share insights, experiences, and valuable information with our growing community.`,
        author: "Admin",
        date: "March 15, 2024",
        readTime: "3 min read",
        category: "Welcome",
        image: "https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        title: `Latest Updates from ${siteName}`,
        excerpt: `Stay up to date with the latest news, updates, and announcements from ${siteName}. We're constantly working to bring you fresh content and improved experiences.`,
        author: "Editor",
        date: "March 12, 2024",
        readTime: "5 min read",
        category: "Updates",
        image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        title: `Behind the Scenes at ${siteName}`,
        excerpt: `Take a peek behind the curtain and see how we create the content you love. From ideation to publication, here's our creative process.`,
        author: "Team",
        date: "March 10, 2024",
        readTime: "4 min read",
        category: "Behind the Scenes",
        image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        title: `Community Spotlight: ${siteName} Readers`,
        excerpt: `Celebrating our amazing community of readers and contributors. See how ${siteName} has grown and the impact we're making together.`,
        author: "Community Manager",
        date: "March 8, 2024",
        readTime: "6 min read",
        category: "Community",
        image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        title: `Tips and Tricks from ${siteName}`,
        excerpt: `Our team shares their favorite tips, tricks, and best practices. Learn from our experience and apply these insights to your own journey.`,
        author: "Expert Team",
        date: "March 5, 2024",
        readTime: "7 min read",
        category: "Tips",
        image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        title: `Future Plans for ${siteName}`,
        excerpt: `Exciting things are coming to ${siteName}! Get a sneak peek at our roadmap and upcoming features that will enhance your experience.`,
        author: "Founder",
        date: "March 1, 2024",
        readTime: "4 min read",
        category: "Future",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800"
      }
    ]
  };
};

export default function PreviewModal({ isOpen, onClose, wordpressUrl, selectedStyle }: PreviewModalProps) {
  if (!isOpen) return null;

  const styles = getStyleClasses(selectedStyle);
  const mockContent = generateMockContent(wordpressUrl);
  const generatedUrl = `https://${new URL(wordpressUrl).hostname.replace(/\./g, '-')}-frontend.wpaiblog.com`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-black/50 backdrop-blur-sm" onClick={onClose} />
        
        <div className="inline-block w-full max-w-7xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-2xl rounded-2xl">
          {/* Modal Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Live Preview</h3>
              <p className="text-gray-600">
                Preview of <span className="font-semibold text-blue-600">{mockContent.siteName}</span> with <span className="font-semibold text-purple-600">{selectedStyle.replace('-', ' ')}</span> design
              </p>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <ExternalLink className="w-4 h-4 mr-1" />
                <code className="bg-gray-100 px-2 py-1 rounded text-xs">{generatedUrl}</code>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-white rounded-lg transition-colors ml-4"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Preview Content */}
          <div className="p-6 max-h-[80vh] overflow-y-auto">
            <div className={`rounded-xl overflow-hidden border-2 border-gray-200 transition-all duration-500 ${styles.container}`}>
              {/* Mock Header */}
              <header className={`p-4 transition-all duration-500 ${styles.header}`}>
                <div className="flex items-center justify-between max-w-6xl mx-auto">
                  <h1 className={`transition-all duration-500 ${styles.title}`}>{mockContent.siteName}</h1>
                  <nav className="hidden md:flex space-x-6">
                    <a href="#" className={`${styles.nav} transition-all duration-300`}>Home</a>
                    <a href="#" className={`${styles.nav} transition-all duration-300`}>About</a>
                    <a href="#" className={`${styles.nav} transition-all duration-300`}>Blog</a>
                    <a href="#" className={`${styles.nav} transition-all duration-300`}>Contact</a>
                  </nav>
                </div>
              </header>

              {/* Hero Section */}
              <section className="p-8 max-w-6xl mx-auto">
                <div className={`${styles.card} rounded-lg p-8 mb-8`}>
                  <h2 className={`${styles.cardTitle} text-3xl mb-4`}>
                    Welcome to {mockContent.siteName}
                  </h2>
                  <p className={`${styles.cardText} text-lg mb-6`}>
                    Discover amazing content, insights, and stories from our community. 
                    Join thousands of readers who trust {mockContent.siteName} for quality content.
                  </p>
                  <button className={`${styles.button} px-6 py-3 rounded-lg font-semibold transition-all duration-300 border-2 border-current`}>
                    Explore Our Content
                  </button>
                </div>
              </section>

              {/* Blog Posts Grid */}
              <main className="p-6 max-w-6xl mx-auto">
                <h2 className={`${styles.cardTitle} text-2xl mb-6`}>Latest Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {mockContent.posts.slice(0, 6).map((post, index) => (
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
                        <div className={`${styles.cardText} text-xs mb-2 px-2 py-1 rounded-full bg-current/10 inline-block`}>
                          {post.category}
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

                {/* Newsletter Signup */}
                <div className={`${styles.card} rounded-lg p-8 text-center mb-8`}>
                  <h3 className={`${styles.cardTitle} text-2xl mb-4`}>Stay Updated</h3>
                  <p className={`${styles.cardText} mb-6`}>
                    Subscribe to {mockContent.siteName} newsletter and never miss our latest content.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input 
                      type="email" 
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 rounded-lg border border-current/20 bg-transparent"
                    />
                    <button className={`${styles.button} px-6 py-3 rounded-lg font-semibold transition-all duration-300 border-2 border-current`}>
                      Subscribe
                    </button>
                  </div>
                </div>

                {/* Mock Pagination */}
                <div className="flex justify-center mt-8">
                  <div className="flex items-center space-x-2">
                    <button className={`${styles.button} px-3 py-1 rounded transition-all duration-300`}>Previous</button>
                    <span className={`${styles.cardText} px-3 py-1 transition-all duration-500`}>1 of 12</span>
                    <button className={`${styles.button} px-3 py-1 rounded transition-all duration-300 flex items-center`}>
                      Next <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </main>

              {/* Footer */}
              <footer className={`${styles.header} p-6 mt-8`}>
                <div className="max-w-6xl mx-auto text-center">
                  <p className={`${styles.cardText} text-sm`}>
                    © 2024 {mockContent.siteName}. All rights reserved. | Powered by WP AI Blog
                  </p>
                </div>
              </footer>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
            <div className="flex items-center space-x-4">
              <p className="text-gray-600">
                This is how your blog will look with the <span className="font-semibold text-gray-900">{selectedStyle.replace('-', ' ')}</span> design
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={onClose}
                className="text-gray-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Close Preview
              </button>
              <button
                onClick={() => window.open(generatedUrl, '_blank')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Visit Live Site
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}