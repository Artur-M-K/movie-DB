import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='centered'>
            <p>Page not found!</p>
            <Link to='/'>Back</Link>
        </div>
    )
}

export default NotFound;
