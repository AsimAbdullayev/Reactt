import React from 'react'
import styles from "./Header.module.scss"
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
const Header = () => {
  return (
    <>
            <div className={styles.freecontainer}>
                <div className={styles.free}>
                    <p>FREE SHIPPING ON ALL ORDERS OVER $75.00. <a href="">LEARN MORE!</a> </p>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <a href="#">haute</a>
                </div>
                <div className={styles.navbaricon}>
                        <ul>
                            
                            <li><a  href="#">Home </a></li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">Pages</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                        <a href=""><CiSearch size={30} /></a>
                        <a href=""><CiHeart size={30}/></a>
                        <a href=""><FiShoppingCart size={29} /> <p>1</p></a>
                </div>
            </div>

    </>
  )
}

export default Header