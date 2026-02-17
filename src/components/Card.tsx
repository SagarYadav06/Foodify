

const Card = () => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">

      <img
        className="w-full h-48 object-cover"
        src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
        alt="Food"
      />
 
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Chicken Burger
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Juicy grilled chicken with fresh veggies
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-green-600">
            ₹199
          </span>

          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
