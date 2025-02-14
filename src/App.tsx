import { useState } from "react";
import { Play, X } from "lucide-react";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl ring-4 ring-purple-400/20">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/ewMksAbgdBI?si=kZUAYu-AtlMvhRw7"
              title="Featured Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Description Section */}
          <div className="space-y-6">
            {/* Clickable Button */}
            <button
              onClick={() => setIsPopupOpen(true)}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-purple-500 px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform"
            >
              <Play size={16} className="animate-pulse" />
              <span className="text-sm font-semibold">Featured Content</span>
            </button>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 text-transparent bg-clip-text">
              Davinici Artist Skool
            </h1>

            <p className="text-indigo-100 text-lg leading-relaxed">
              I will teach you advanced hand-drawn art techniques that will create stunning art pieces.
              Even complete beginners can learn how to draw like a pro with my easy-to-follow tutorials.
            </p>

            <button className="bg-gradient-to-r from-yellow-400 via-purple-500 to-yellow-400 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transition-all px-8 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 hover:shadow-xl">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Pop-up Content */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-indigo-900 text-white p-6 rounded-xl shadow-lg max-w-lg w-full relative">
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-3 right-3 text-white hover:text-gray-300"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4">Exclusive Content</h2>
            <p className="text-indigo-200">
          * What is Sketching
            </p>
            <p className="text-indigo-200">
          * How to Sketch
            </p>
            <button
              onClick={() => setIsPopupOpen(false)}
              className="mt-4 bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-2 rounded-lg font-semibold shadow-md hover:scale-105 transition-transform"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
