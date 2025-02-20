import axios from 'axios';
import { useEffect, useState } from 'react';

const AvailableDogs = () => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/image/random/6')
      .then((result) => {
        setDogs(result.data.message);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-16 h-16 border-4 border-blue-300 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  );

  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="bg-[#5457a6] text-[#f1e6d1]">
      <div className="flex flex-wrap justify-center gap-8 p-8">
        {dogs.map((dog, index) => {
          const breedSegment = dog.split('breeds/')[1];
          const breed = breedSegment ? breedSegment.split('/')[0] : 'Unknown';
          const formattedBreed = breed.charAt(0).toUpperCase() + breed.slice(1);
          return (
            <div key={index} className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={dog} alt={formattedBreed} className="w-48 h-48 object-cover" />
              <div className="p-4">
                <p className="text-lg font-semibold">{formattedBreed}</p>
                <p className="text-sm text-gray-600">Age: 2 years</p>
                <p className="text-sm text-gray-600">Friendly and playful</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AvailableDogs;