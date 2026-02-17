const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-8 py-12 grid gap-10 md:grid-cols-4">

        
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">☕ Cafeu</h2>
          <p className="text-sm leading-relaxed">
            Fresh food, great taste, and cozy moments. We serve happiness
            with every dish.
          </p>
        </div>

       
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-red-500 cursor-pointer">Home</li>
            <li className="hover:text-red-500 cursor-pointer">Menu</li>
            <li className="hover:text-red-500 cursor-pointer">About</li>
            <li className="hover:text-red-500 cursor-pointer">Contact</li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Online Order</li>
            <li>Table Booking</li>
            <li>Fast Delivery</li>
            <li>Custom Menu</li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 Kathmandu, Nepal</li>
            <li>📞 +977 123 456 789</li>
            <li>✉️ cafeu@email.com</li>
          </ul>

     
          <div className="flex gap-4 mt-4 text-lg">
            <span className="hover:text-red-500 cursor-pointer">🌐</span>
            <span className="hover:text-red-500 cursor-pointer">📘</span>
            <span className="hover:text-red-500 cursor-pointer">📸</span>
          </div>
        </div>

      </div>

  
      <div className="border-t border-gray-800 text-center py-4 text-sm">
        © {new Date().getFullYear()} Cafeu. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
