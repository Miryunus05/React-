import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";



function SingleProduct() {
    const [product ,setProduct] = useState({});
    const { productId } = useParams();

    useEffect(() =>{
        const getData = async () => {
            try{
                const response = await axios.get(
                    `https://test-ecommerce-gamma.vercel.app/products/${productId}`
                );
                setProduct (response.data);
            }catch (err) {
                console.log("Xatolik yuz berdi", err);
            }
        };
        getData();
    },[productId]);
  return (
    <div>
      <img src={product.img} alt="" />
    </div>
  )
}

export default SingleProduct;
