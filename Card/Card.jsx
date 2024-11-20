import React, { useEffect, useState } from 'react'
import styles from "./Card.module.scss"
import axios from 'axios'
import { FiShoppingCart } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";

const Card = () => {
    const[data,setData]=useState([])

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
        .then((res =>{
            setData(res.data.products)
        }))
    },[])
  return (
    <>
                 <div className={styles.container}>
            
            <div className={styles.cards}>
                {data.map((item) => (
                    <div key={item.id} className={styles.card}>
                          <img src={item.thumbnail} alt="..."/>
                            <h3>{item.title}</h3>
                            <p>${item.price}</p>
                            <div className={styles.btn}>
                            <button><a href="#"> <FiShoppingCart size={40}  color='darkblue' /></a></button>
                            <button><a href="#"> <CiHeart size={40} color='darkblue'/></a></button>
                            </div>
                            
                        
                       
                       
                    </div>
                ))};
            </div>
        </div>

    </>
  )
}

export default Card