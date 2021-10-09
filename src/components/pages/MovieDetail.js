import React from 'react';
import { Link } from 'react-router-dom';

const MovieDetail = (props) => {
    console.log(props.history)

    // const handleClick =() => {props.history.goBack()}

    return (
        <div>
            <Link to='/' >Back</Link>
        </div>
    )
}

export default MovieDetail;
