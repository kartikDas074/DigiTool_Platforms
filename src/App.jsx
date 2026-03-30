import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'
import Nav from './Component/Navbar/Nav';
import { useState } from 'react';
function App() {
  const [count,seCount]=useState(0);
  return (
    <>
    <section>
      <nav className='w-full flex shadow-sm py-4 md:py-5'>
        <Nav count={count}></Nav>
      </nav>
      
    </section>


    {/* To use React Toastify */}
    <ToastContainer></ToastContainer>
    </>
  )
}

export default App
