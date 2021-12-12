import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Cart.module.css';

const Cart = ({title, poster, id}) => {
    
    const titleShort = title.length>26 ? title.substring(0, 23)+'...': title;

    return (
        <Link to={`/movie/${id}`} style={{ textDecoration: 'none' }}>
        <li className={styles.cart}>
           {poster !== 'N/A' ? 
           <img className={styles.image} src={poster} alt={title} />
            :
            <h3>No poster available</h3>
            }
           <h4>{titleShort}</h4>
        </li>
        </Link>
    )
}

export default Cart;
