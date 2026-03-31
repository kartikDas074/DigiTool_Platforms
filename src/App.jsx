import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'
import Nav from './Component/Navbar/Nav';
import { useState } from 'react';
import Banner from './Component/Banner/Banner';
import Rating from './Component/Banner/Rating';
import Product from './Component/Products/Product';
import Starts from './Component/GetStart/Starts';
function App() {
  const [count,setCount]=useState(0);
  let [card,setCard]=useState([]);
  return (
    <>
    {/* Header section */}
    <header>
      <nav className='w-full flex shadow-sm py-4 md:py-5'>
        <Nav count={count}></Nav>
      </nav>
    </header>
    <main>
      {/* Creat Banner section */}
      <section id='banner'>
           <Banner></Banner>
           <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-7.5 md:py-10 shadow-2xl'>
              <Rating></Rating>
           </div>
           
      </section>

      {/* Products Section */}
      <section>
         <Product count={count} setCount={setCount} card={card} setCard={setCard}></Product>
      </section>
      <section className='bg-[#F9FAFC]'>
        <Starts></Starts>
      </section>
    </main>  

    {/* To use React Toastify */}
    <ToastContainer></ToastContainer>
    </>
  )
}

export default App
