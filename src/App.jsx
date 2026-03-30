import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import { toast } from 'react-toastify';
import { Menu } from 'lucide-react';
function App() {
   const handleme = () => {
   toast.info("Going to checkout 💳");
  };
  return (
    <>
    
     <h1 className='text-2xl text-center'>Lets Start the project. </h1>
     <button className='btn btn-primary' onClick={handleme}> ore</button>
     <ToastContainer />
     <Menu>xox</Menu>
    </>
  )
}

export default App
