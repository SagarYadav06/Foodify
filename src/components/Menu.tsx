const Menu = () => {
  return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
       
        <div className="h-screenbg-white rounded-xl shadow-md p-4 hover:shadow-xl transition">
          <img
            src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
