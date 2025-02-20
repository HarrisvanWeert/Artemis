import Petshero from './petshero.jpg';

const Hero = () => {
  return (
    <section
      className="relative w-full flex items-center justify-center text-center text-[#f1e6d1]"
      style={{
        backgroundImage: `url(${Petshero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "calc(100vh - 70px)",
        backgroundColor: "#5457a6" // fallback color
      }}
    >
      <div className="relative z-10 w-full max-w-5xl px-6 mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold animate-fade-in">
          Find Your Perfect Pet
        </h1>
        <p className="text-lg md:text-xl mt-4 animate-fade-in delay-200">
          Adopt, rescue, and give a furry friend a forever home.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center space-x-4 animate-fade-in delay-400">
          <button className="bg-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition">
            Browse Pets
          </button>
          <button className="bg-orange-500 px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition">
            Donate Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
