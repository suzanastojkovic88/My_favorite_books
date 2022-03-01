import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/books.jpg';
import classes from './FavoriteBooks.module.css';

function FavoriteBooks(props) {

    return (
        <header>
            <nav className={classes.book}><img className={classes.book_img} src={img} alt='' />
            <Link to='/new-book'><button className={classes.button}><b>ADD BOOK</b></button></Link>
            <div className={classes.text}>
                    <span>My favorite books</span><br /><br />
                </div>
            </nav>
        </header>
    );
}

export default FavoriteBooks;