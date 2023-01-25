import { useState } from 'react';
import Card from './components/Card';
import Modal from './components/Modal';

function App() {
  const [open, setOpen] = useState(false);
  const handleCloseModal = () => setOpen(false);
  const handleOpenModal = () => setOpen(true);
  return (
    <>
      <div className="bg-slate-900 flex justify-center items-center h-screen">
        <Card handleOpenModal={handleOpenModal} />
        <Modal open={open} handleCloseModal={handleCloseModal} />
      </div>
    </>
  );
}

export default App;
