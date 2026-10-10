import React from 'react';

const Map = () => {
  return (
    <div className="w-full px-4 md:px-0 max-w-5xl mx-auto my-12 md:my-16">
      {/* Heading */}
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-[28px] md:text-[36px] font-bold text-gray-900 tracking-tight">
          Find <span className="text-blue-600"> <span className='text-amber-700'>US Here</span></span>
        </h2>
        <div className="w-16 h-1 bg-amber-600 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-500 mt-3 text-sm md:text-base">
          Visit our restaurant at Jaranwala Rail Bazar
        </p>
      </div>

      {/* Map */}
      <div className="w-full h-[340px] md:h-[380px] lg:h-[400px] rounded-[20px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.12)] border border-gray-100">
        <iframe
          className="w-full h-full border-0 grayscale-[20%] hover:grayscale-0 transition-all duration-300"
          title="Jaranwala Rail Bazar Map"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://maps.google.com/maps?q=Jaranwala%20Rail%20Bazar&t=&z=16&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;