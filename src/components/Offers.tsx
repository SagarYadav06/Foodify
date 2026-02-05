 

const Offers = () => {
  return (
    <div className="px-6 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        🔥 Today’s Offers
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        
        {/* Offer Card 1 */}
        <div className="rounded-xl p-6 text-white bg-linear-to-r from-orange-400 to-red-500 shadow-lg hover:scale-105 transition-transform">
          <h2 className="text-xl font-semibold">50% OFF</h2>
          <p className="mt-2 text-sm">
            On your first food order
          </p>
          <button className="mt-4 bg-white text-red-500 px-4 py-2 rounded-lg font-semibold">
            Order Now
          </button>
        </div>

        {/* Offer Card 2 */}
        <div className="rounded-xl p-6 text-white bg-linear-to-r from-green-400 to-emerald-500 shadow-lg hover:scale-105 transition-transform">
          <h2 className="text-xl font-semibold">FREE DELIVERY</h2>
          <p className="mt-2 text-sm">
            Orders above ₹299
          </p>
          <button className="mt-4 bg-white text-green-600 px-4 py-2 rounded-lg font-semibold">
            Grab Deal
          </button>
        </div>

        {/* Offer Card 3 */}
        <div className="rounded-xl p-6 text-white bg-linear-to-r from-purple-400 to-pink-500 shadow-lg hover:scale-105 transition-transform">
          <h2 className="text-xl font-semibold">Buy 1 Get 1</h2>
          <p className="mt-2 text-sm">
            On selected restaurants
          </p>
          <button className="mt-4 bg-white text-pink-600 px-4 py-2 rounded-lg font-semibold">
            Explore
          </button>
        </div>

      </div>
    </div>
  );
};

export default Offers;
