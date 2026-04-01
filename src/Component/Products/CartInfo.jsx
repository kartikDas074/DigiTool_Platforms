import { ShoppingCart } from 'lucide-react';
import CartProduct from './CartProduct';
import { toast } from 'react-toastify';
const CartInfo = ({product,count,setCount,card,setCard,total, setTotal}) => {
    let AllVanish=()=>{
        setCount(0);
        setTotal(0);
        setCard([]);
        toast.info("Cart cleared! 🧹", {
        autoClose: 1500,
        theme: "dark", 
    });
    }
    return (
        <div className=' w-full max-w-[90vw]  mx-auto '>
           <div className={`w-full shadow-sm  flex-col justify-center items-center px-2.5 md:px-10 py-2.5 md:py-10 ${count==0?'flex':'hidden'}`}>
              <ShoppingCart className='w-[60%] h-[300px] text-[110px]'></ShoppingCart>
              <div>
                <h1 className='text-[24px] md:text-[40px] font-extrabold text-[#101727] tracking-tight text-center'>Your cart is empty 🥺🛒.</h1>
                <p className='text-[16px] md:text-[16px] font-medium text-[#627382] tracking-tight text-center'>Looks like you haven't made your choice yet. Explore our latest collection and find something you love!</p>
              </div>
              <button onClick={()=>{product(true)}} className="btn btn-neutral mt-8 px-10 rounded-full">Explore Products</button>
           </div>

           {/* When there is atleast one product exist in cart*/}
           <div className={`w-full ${count==0?'hidden':'flex flex-col'} justify-center items-start space-y-4 `}>
            <div className='w-full flex flex-col '>
                <h1 className='text-[24px] md:text-[30px] text-[#220327] font-bold'>Your Cart</h1>
            </div>
            <div className='grid grid-cols-1 space-y-2 w-full '>
                {
                    card.map(Cart=><CartProduct count={count} setCount={setCount} all={card} setAll={setCard} total={total} setTot={setTotal} key={Cart.id} cart={Cart}></CartProduct>)
                }
            </div>
            <div className='w-full   flex justify-between items-center my-[16px]'>
              <div className='text-[16px] font-bold text-[black]'>Total :</div>
              <div className='text-[24px] font-bold text-[black]'>  {total}$</div>
            </div>
            
            <div className='flex justify-center items-center w-full'>
                <button className='btn w-[60%] btn-primary rounded-[30px]' onClick={AllVanish}>Proceed To Checkout</button>
            </div>
           </div>
        </div>
    );
};

export default CartInfo;