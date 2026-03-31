import React, { use } from 'react';
import ProDuctCard from './ProDuctCard';

let Products=fetch('/Products.json').then(data=>data.json());
  
const ProductList = ({count,setCount,card,setCard,total,setTotal}) => {
    let All_products=Products;
    All_products=use(All_products);
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-[20px] space-y-[30px] '>
            {
                  All_products.map(Product=><ProDuctCard key={Product.id} product={Product} count={count} setCount={setCount} card={card} setCard={setCard} total={total} setTotal={setTotal}></ProDuctCard>)
            }
        </div>
    );
};

export default ProductList;