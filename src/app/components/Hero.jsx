import React from "react";

const HeroBanner = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{
        background: `url('https://res.cloudinary.com/dd4np04jl/image/upload/v1754027905/Rectangle_1_utb8kf.png'), rgb(196,196,196)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#00000099] z-0"></div>

      {/* Main content */}
      <div className="relative z-10 w-full px-6 md:px-22 flex justify-between gap-6">
        {/* Left Text */}
        <div className="text-white max-w-lg space-y-4">
          <h1 className="text-7xl font-bold uppercase">Cox's Bazar</h1>
          <p className="text-lg">
            Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach...
          </p>
          <button className="btn shadow-none rounded-xl  bg-yellow-400 border-none text-black px-6">Booking <span className="text-2xl">→</span></button>
        </div>

        {/* Destination Cards */}
        <div className="mt-10 flex gap-6 overflow-x-auto pb-4">
          {/* Card 1 */}
          <div className="relative w-64 h-96  rounded-xl border-4 border-yellow-400 p-1 bg-white/10 backdrop-blur-md overflow-hidden">
            <img
              src="https://res.cloudinary.com/dd4np04jl/image/upload/v1754027905/Rectangle_1_utb8kf.png"
              alt="Cox's Bazar"
              className="rounded-lg  w-full h-full object-cover"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-transparent to-transparent rounded-lg"></div>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded text-white text-lg font-semibold">
              Cox’s Bazar
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative w-64 h-96 rounded-xl border-4 border-yellow-400 p-1 bg-white/10 backdrop-blur-md overflow-hidden">
            <img
              src="https://res.cloudinary.com/dd4np04jl/image/upload/v1754027905/Rectangle_1_utb8kf.png"
              alt="Sreemangal"
              className="rounded-lg w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-transparent to-transparent rounded-lg"></div>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded text-white text-lg font-semibold">
              Sreemangal
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative w-64 h-96 rounded-xl border-4 border-yellow-400 p-1 bg-white/10 backdrop-blur-md overflow-hidden">
            <img
              src="https://res.cloudinary.com/dd4np04jl/image/upload/v1754027905/Rectangle_1_utb8kf.png"
              alt="Sundarbans"
              className="rounded-lg w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-transparent to-transparent rounded-lg"></div>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded text-white text-lg font-semibold">
              Sundarbans
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
