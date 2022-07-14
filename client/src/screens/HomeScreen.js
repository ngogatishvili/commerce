import React,{useState,useEffect,useReducer} from 'react'
import data from "../data";
import {Link} from 'react-router-dom';
import axios from "axios";


const reducer=(state,action)=>{
    switch(action.type) {
      case 'FETCH_REQUEST':
        return {...state,loading:true}
      case "FETCH_SUCCESS":
        return {...state,products:action.payload,loading:false}
      case "FETCH_FAIL":
        return {...state,loading:false,error:action.payload}
    default:return state;
    }
}

const HomeScreen = () => {
  const [{loading,products,error},dispatch]=useReducer(reducer,{
    loading:false,
    error:"",
    products:[]
  })

  // const [products,setProducts]=useState([]);
  useEffect(()=>{
    const fetchData=async()=>{
      dispatch({type:"FETCH_REQUEST"});
      try{
        const result=await axios.get('/api/products');
        dispatch({type:"FETCH_SUCCESS",payload:result.data})

      }catch(err) {
        dispatch({type:"FETCH_FAIL",payload:err.response})
      }
      
    }
    fetchData();
  },[])
  return (
    <div>
       <h1>Featured Products</h1>
       <div className="products">
       {
         products?.map(product=>(
           <div className="product" key={product.slug}>
             <Link to={`/products/${product.slug}`}>
             <img src={product.image} alt={product.name}/>
             </Link>
             
             <div className="product-info">
             <Link to={`products/${product.slug}`}>
             <p>{product.name}</p>
             </Link>
             
             <p><strong>${product.price}</strong></p>
             <button>add to cart</button>
             </div>
            
           </div>
         ))
       }
       </div>
    </div>
  )
}

export default HomeScreen;
