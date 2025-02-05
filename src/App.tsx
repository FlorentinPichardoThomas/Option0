import React from 'react'
import { Play } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl ring-4 ring-purple-400/20">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Featured Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Description Section */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform">
              <Play size={16} className="animate-pulse" />
              <span className="text-sm font-semibold">Featured Content</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 text-transparent bg-clip-text">
              Discover Amazing Content
            </h1>
            
            <p className="text-indigo-100 text-lg leading-relaxed">
              Immerse yourself in our carefully curated content that brings you the best of entertainment and knowledge. Our featured video showcases the pinnacle of what we offer, combining creativity with meaningful insights.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 bg-white/5 p-4 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-lg">
                  <Play size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-pink-200">High Quality Content</h3>
                  <p className="text-indigo-200">Full HD videos with crystal clear audio</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-white/5 p-4 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg">
                  <Play size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-purple-200">Regular Updates</h3>
                  <p className="text-indigo-200">New content added weekly</p>
                </div>
              </div>
            </div>

            <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transition-all px-8 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 hover:shadow-xl">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App