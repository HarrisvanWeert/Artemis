const NavBar = ({ openDonationModal, openContactModal }) => {
    return (
      <nav className="bg-[#5457a6] text-[#f1e6d1] shadow-md fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center h-16">
          {/* Left: Logo */}
          <div className="w-1/3">
            <a href="/" className="text-2xl font-bold">
              PetFinder
            </a>
          </div>
  
          {/* Center: Navigation Links (visible on md+) */}
          <div className="w-1/3 hidden md:flex justify-center space-x-6">
            <a href="#" className="hover:text-blue-300">Adopt</a>
            <a href="#" className="hover:text-blue-300">Find a Pet</a>
            <a href="#" className="hover:text-blue-300">Resources</a>
          </div>
  
          {/* Right: Buttons */}
          <div className="w-1/3 flex justify-end space-x-4">
            <button className="hidden md:block border border-blue-600 px-4 py-1 rounded-lg hover:bg-blue-100">
              Log In
            </button>
            <button 
              onClick={openDonationModal}
              className="relative bg-gradient-to-r from-red-500 to-orange-500 px-6 py-2 rounded-full font-bold text-lg shadow-lg transition-all hover:scale-105 hover:shadow-orange-500/50"
            >
              Donate ❤️
              <span className="absolute inset-0 bg-orange-500 opacity-20 rounded-full blur-lg"></span>
            </button>
            <button 
              onClick={openContactModal}
              className="relative bg-gradient-to-r from-green-500 to-teal-500 px-6 py-2 rounded-full font-bold text-lg shadow-lg transition-all hover:scale-105 hover:shadow-teal-500/50"
            >
              Contact 📞
              <span className="absolute inset-0 bg-teal-500 opacity-20 rounded-full blur-lg"></span>
            </button>
          </div>
        </div>
      </nav>
    );
};
  
export default NavBar;
