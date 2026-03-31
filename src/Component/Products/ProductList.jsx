import React, { use } from 'react';
import ProDuctCard from './ProDuctCard';

let Products=fetch('../../../public/Products.json').then(data=>data.json());
  
const ProductList = ({count,setCount}) => {
    let All_products=Products;
    All_products=use(All_products);
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-[20px] space-y-[30px] '>
            {
                  All_products.map(Product=><ProDuctCard key={Product.id} product={Product} count={count} setCount={setCount}></ProDuctCard>)
            }
        </div>
    );
};

export default ProductList;