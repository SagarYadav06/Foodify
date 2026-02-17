import Layout from "./Layout"

const Blog = () => {
  return (
    <Layout title="Blog">
      <section className="min-h-screen bg-slate-50">

 
        <div className="h-screen bg-gradient-to from-indigo-600 to-purple-600 py-20">
          <div className="max-w-7xl mx-auto px-6 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold">
              Our Blog
            </h1>
            <p className="mt-4 text-lg text-indigo-100 max-w-2xl mx-auto">
              Insights, tutorials and best practices for modern web development
            </p>
          </div>
        </div>

  
        <div className="max-w-7xl mx-auto px-6 py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
            <div className="h-48 bg-indigo-100"></div>

            <div className="p-6">
              <span className="text-sm text-indigo-500 font-medium">
                React
              </span>

              <h3 className="mt-3 text-xl font-semibold text-gray-900">
                Building Scalable React Applications
              </h3>

              <p className="mt-3 text-gray-600 text-sm">
                Learn best practices to structure and scale your React projects
                for long-term maintainability.
              </p>

              <button className="mt-5 text-indigo-600 font-medium hover:underline">
                Read More →
              </button>
            </div>
          </div>

      
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
            <div className="h-48 bg-purple-100"></div>
            <div className="p-6">
              <span className="text-sm text-purple-500 font-medium">
                Tailwind CSS
              </span>
              <h3 className="mt-3 text-xl font-semibold text-gray-900">
                Mastering Tailwind for Clean UI
              </h3>
              <p className="mt-3 text-gray-600 text-sm">
                Design beautiful and responsive interfaces using Tailwind CSS.
              </p>
              <button className="mt-5 text-purple-600 font-medium hover:underline">
                Read More →
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
            <div className="h-48 bg-pink-100"></div>
            <div className="p-6">
              <span className="text-sm text-pink-500 font-medium">
                TypeScript
              </span>
              <h3 className="mt-3 text-xl font-semibold text-gray-900">
                Why TypeScript Matters in 2025
              </h3>
              <p className="mt-3 text-gray-600 text-sm">
                Understand how TypeScript improves code quality and scalability.
              </p>
              <button className="mt-5 text-pink-600 font-medium hover:underline">
                Read More →
              </button>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  )
}

export default Blog
