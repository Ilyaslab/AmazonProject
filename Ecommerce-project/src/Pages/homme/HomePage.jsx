
import axios from 'axios';
import Header from '../../Components/Header.jsx';
import './HomePage.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProductsGrid } from './productsGrid.jsx';
function HomePage({ cart,getAppData,quantity,setQuantity }) {
  const [products,setProducts] = useState([])
  

 useEffect(()=>{
    const getHommeData= async()=>{
      const response = await axios.get('/api/products')
      setProducts(response.data);
    }
    getHommeData();
},[])

   


    return(
      <>   
          <title>Ecommerce Project</title>
          <Header cart={cart}/>


          <div className="home-page">
           <ProductsGrid products={products} getAppData={getAppData} setQuantity={setQuantity}
           quantity={quantity} />
          </div>
      </>
      
    )
} 
export default HomePage
