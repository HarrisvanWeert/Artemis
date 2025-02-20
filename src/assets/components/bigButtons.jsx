import React from 'react';
// Import images (update paths as needed)
import dog from './dog.png';
import cat from './cat.png';
import bird from './bird.png';

const BigButtons = () => {
  return (
    <div className="absolute inset-x-0 top-3/4 transform -translate-y-1/3 flex justify-center">
      <div className="flex space-x-12 p-8  shadow-lg border-2 border-transparent bg-transparent">
        <div
          className="group text-center transition-all duration-300 hover:border-blue-500 border-2 p-4 bg-white"
          style={{
            borderRadius: '43px 0px 43px 0px',
            WebkitBorderRadius: '43px 0px 43px 0px',
            MozBorderRadius: '43px 0px 43px 0px'
          }}
        >
          <img src={dog} alt="Dog" className="w-24 h-24 mx-auto  " />
          <p className="mt-2">Dogs</p>
        </div>
        <div
          className="group text-center transition-all duration-300 hover:border-green-500 border-2 p-4 bg-white"
          style={{
            borderRadius: '43px 0px 43px 0px',
            WebkitBorderRadius: '43px 0px 43px 0px',
            MozBorderRadius: '43px 0px 43px 0px'
          }}
        >
          <img src={cat} alt="Cat" className="w-24 h-24 mx-auto " />
          <p className="mt-2">Cats</p>
        </div>
        <div
          className="group text-center transition-all duration-300 hover:border-yellow-500 border-2 p-4 bg-white"
          style={{
            borderRadius: '43px 0px 43px 0px',
            WebkitBorderRadius: '43px 0px 43px 0px',
            MozBorderRadius: '43px 0px 43px 0px'
          }}
        >
          <img src={bird} alt="Bird" className="w-24 h-24 mx-auto " />
          <p className="mt-2">Other Animals</p>
        </div>
      </div>
    </div>
  );
};

export default BigButtons;