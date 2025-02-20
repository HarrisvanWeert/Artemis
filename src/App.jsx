import './App.css'
import { useState } from 'react'
import AvailableDogs from './assets/components/avalaibleDogs.jsx'
import BigButtons from './assets/components/bigButtons.jsx'
import Hero from './assets/components/hero.jsx'
import NavBar from './assets/components/nav.jsx'
import DonationModal from './assets/components/DonationModal.jsx'

function App() {
  const [donationModalOpen, setDonationModalOpen] = useState(false);
  const [donationTotal, setDonationTotal] = useState(0);
  const [donationCount, setDonationCount] = useState(0);
  const [donors, setDonors] = useState([]);

  const openDonationModal = () => setDonationModalOpen(true);
  const closeDonationModal = () => setDonationModalOpen(false);

  const handleDonate = (amount, name, email) => {
    setDonationTotal(prev => prev + amount);
    setDonationCount(prev => prev + 1);
    setDonors(prev => {
      const updated = [ ...prev, name ];
      return updated.slice(-5);
    });
    // evt. extra verwerking met email...
  };

  return (
    <div className="bg-[#5457a6] text-[#f1e6d1] min-h-screen">
      <NavBar openDonationModal={openDonationModal} />
      <Hero/>
      <AvailableDogs/>
      <BigButtons/>
      <DonationModal 
        open={donationModalOpen} 
        onClose={closeDonationModal} 
        onDonate={handleDonate} 
        donors={donors} 
        donationCount={donationCount}
        donationTotal={donationTotal}
      />
    </div>
  )
}

export default App
