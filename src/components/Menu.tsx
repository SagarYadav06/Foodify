 

const Menu = () => {
  return (
    <div className="px-6 py-8">
      
      {/* Heading */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        🍴 Our Menu
      </h1>

      {/* Categories */}
      <div className="flex gap-4 mb-8 overflow-x-auto">
        {["All", "Burger", "Pizza", "Biryani", "Desserts"].map(
          (category) => (
            <button
              key={category}
              className="px-5 py-2 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-green-500 hover:text-white transition whitespace-nowrap"
            >
              {category}
            </button>
          )
        )}
      </div>

      {/* Menu Items */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        
        {/* Item 1 */}
        <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
            alt="Burger"
            className="w-full h-40 object-cover rounded-lg"
          />

          <h2 className="text-lg font-semibold mt-3 text-gray-800">
            Chicken Burger
          </h2>

          <p className="text-sm text-gray-500">
            Juicy chicken with fresh veggies
          </p>

          <div className="flex justify-between items-center mt-4">
            <span className="text-green-600 font-bold text-lg">
              ₹199
            </span>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
              Add
            </button>
          </div>
        </div>

        {/* Item 2 */}
        <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition">
          <img
            src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe"
            alt="Pizza"
            className="w-full h-40 object-cover rounded-lg"
          />

          <h2 className="text-lg font-semibold mt-3 text-gray-800">
            Cheese Pizza
          </h2>

          <p className="text-sm text-gray-500">
            Loaded with extra cheese
          </p>

          <div className="flex justify-between items-center mt-4">
            <span className="text-green-600 font-bold text-lg">
              ₹299
            </span>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
              Add
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Menu;
