import React from 'react';
import styles from './Cart.module.css';

const Cart = ({title, poster}) => {
    console.log(title,poster)
    return (
        <li className={styles.cart}>
           {poster !== 'N/A' ? 
           <img className={styles.image} src={poster} alt={title} />
            :
            <h3>No poster available</h3>
            }
           <h4>{title}</h4>
        </li>
    )
}

export default Cart;
