import { useState } from 'react';

const DonationModal = ({ open, onClose, onDonate, donors, donationCount, donationTotal }) => {
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  if(!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const donationAmount = parseFloat(amount);
    if(!donationAmount || !name || !email) return;
    onDonate(donationAmount, name, email);
    setAmount('');
    setName('');
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center">
      <div className="bg-[#5457a6] text-[#f1e6d1] p-6 rounded shadow-md w-80">
        <h2 className="text-xl mb-4">Doneer</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input 
            type="number"
            placeholder="Bedrag"
            className="w-full border px-2 py-1"
            value={amount}
            onChange={(e)=> setAmount(e.target.value)}
          />
          <input 
            type="text"
            placeholder="Naam"
            className="w-full border px-2 py-1"
            value={name}
            onChange={(e)=> setName(e.target.value)}
          />
          <input 
            type="email"
            placeholder="Emailadres"
            className="w-full border px-2 py-1"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="px-3 py-1 border rounded">
              Cancel
            </button>
            <button type="submit" className="px-3 py-1 bg-blue-600 text-white rounded">
              Doneren
            </button>
          </div>
        </form>
        <div className="mt-4 border-t pt-2 text-sm">
          <p>Totaal gedoneerd: €{donationTotal.toFixed(2)}</p>
          <p>Aantal donaties: {donationCount}</p>
          <p>Donateurs: {donors.join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

export default DonationModal;
