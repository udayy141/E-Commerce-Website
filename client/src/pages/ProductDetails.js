import React,{useState,useEffect} from 'react'
import Layout from '../components/Layout/Layout'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const params=useParams()
    const [product,setProduct]=useState({})

    //inital details

    useEffect(()=>{
       if (params?.slug) getProduct() 
    },[params?.slug])
    //get product 
    const getProduct=async( )=>{
        try{
            const {data}=await axios.get(`http://localhost:8080/api/product/get-product/${params.slug}`)
            setProduct(data?.product)
        }
        catch(err){
            console.log(err)
        }
    }
  return (
    <Layout>
       <h1>Product Details</h1>
       {JSON.stringify(product,null,4) }
    </Layout>
  )
}

export default ProductDetails