import React from 'react'
import Layout from '../components/Layout/Layout'
import { useCart } from '../context/cart';
import { useAuth } from '../context/auth';
import { useNavigate } from 'react-router-dom';




const CartPage = () => {
  const [auth,setAuth]=useAuth()
  const[cart,setCart] = useCart()
  const navigate = useNavigate()

//total price
const totalPrice=()=>{
  try{
    let total=0;
    cart?.map((item)=>{
      total =total + item.price
    })
    return total
  }
    catch(err){
      console.error(err)
    }
  
}


  return (
    <Layout>
        <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
          <h1 className='text-center bg-light p-2'>
            {`Hello ${auth?.token && auth?.user?.name}`}
          </h1>
          <h4 className='text-center'>
            {cart?.length >1 ? `YOU Have ${cart.length} items in your cart ${auth?.token ? "": "Please login to checkout"}` :"your cart is empty"}
          </h4>
              </div>
              </div>

          <div className='row ' >
            <div className='col-md-8'>
              {
            cart?.map(p=>(
              <div className='row mb-2 p-3 card flex-row'>
              <div className='col-md-4'>
              <img
                  src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                  width={"100px"}
                  height={"100px"}
                />
              </div>
              <div className='col-md-8'>
               <h4>{p.name}</h4>
               <p>{p.description.substring(0,30)}</p>
               <h4>Price:₹  {p.price}</h4>
               <button className='btn btn-danger'>Remove</button>
              </div>
             </div>
         ) )}  </div>
            <div className='col-md-4 text-center'>
              <h2>
                Cart Summary
              </h2>
              <p>Total   | Checkout   | Payment</p>
              <hr/>
              <h4>Total:{totalPrice()} </h4>
              <button className='btn btn-success'>Pay</button>
            </div>
            
          </div>
        </div>
        
    </Layout>
  )
}

export default CartPage