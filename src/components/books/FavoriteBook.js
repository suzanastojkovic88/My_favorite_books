import React from 'react';
import classes from './FavoriteBook.module.css';

function FavoriteBook(props) {

    return (
        <ul>
            {
                <form>
                    <div className={classes.wrap}>
                            <div className={classes.item_inner}>
                                <span>
                                    <div className={classes.title_label}>Title</div>
                                    <div className={classes.title_input}>{props.title}</div>
                                </span>
                                <span>
                                    <div className={classes.author_label}>Author</div>
                                    <div className={classes.author_input}>{props.author}</div>
                                </span>
                                <span>
                                    <button className={classes.remove} onClick={props.remove}>remove</button>
                                </span>
                            </div>
                        </div>
                </form>
            }
        </ul >
    );
}
export default FavoriteBook;