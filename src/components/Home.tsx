const Home = () => {
  return (
    <section className="min-h-screen bg-gradient  from-indigo-900 via-purple-900 to-slate-900 flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

       
          <div className="text-white">
            <span className="inline-block mb-4 px-4 py-1 text-sm font-medium rounded-full bg-white/10 text-indigo-300">
              🚀 Build Faster With Modern Stack
            </span>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Build Modern & <br />
              <span className="text-indigo-400">
                Scalable Web Apps
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-300 max-w-xl">
              We help you create fast, secure and scalable web applications
              using React, TypeScript and Tailwind CSS with clean architecture.
            </p>

            <div className="mt-10 flex gap-4">
              <button className="px-8 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition font-semibold shadow-lg">
                Get Started
              </button>

              <button className="px-8 py-3 rounded-lg border border-white/30 hover:bg-white hover:text-black transition font-semibold">
                Learn More
              </button>
            </div>
          </div>


          <div className="hidden lg:flex justify-center">
            <div className="w-full max-w-md rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Why Choose Us
              </h3>

              <ul className="space-y-4 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-indigo-400">✔</span>
                  High performance & optimized code
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-400">✔</span>
                  Professional UI/UX design
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-400">✔</span>
                  Mobile-first & responsive layout
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-400">✔</span>
                  Clean & maintainable architecture
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;
