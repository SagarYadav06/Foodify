 const Home = () => {
  return (
       <main className="min-h-screen bg-linear-to-br from-indigo-600 to-purple-700 flex items-center">
        <div className="max-w-6xl mx-auto px-6 text-white">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            
            
            <div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Build Your <span className="text-yellow-300">Dream App</span>
              </h1>
              <p className="mt-6 text-lg text-indigo-100">
                Modern, fast & responsive web applications using React and Tailwind CSS.
              </p>

              <div className="mt-8 flex gap-4">
                <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
                  Get Started
                </button>
                <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
                  Learn More
                </button>
              </div>
            </div>

            
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3 text-indigo-100">
                  <li>⚡ Fast Performance</li>
                  <li>🎨 Beautiful UI</li>
                  <li>📱 Fully Responsive</li>
                  <li>🛠 Easy to Customize</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </main>    
     )
    }
export default Home
