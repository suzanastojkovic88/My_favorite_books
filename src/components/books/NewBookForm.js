import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import classes from './NewBookForm.module.css';

function NewBookForm(props) {
    const unique_id = uuid();
    const titleRef = useRef();
    const authorRef = useRef();

    function submitHandler(event) {
        event.preventDefault();
        const enteredTitle = titleRef.current.value;
        const enteredAuthor = authorRef.current.value;

        const booksData = {
            id: unique_id,
            title: enteredTitle,
            author: enteredAuthor,
        };
        props.onAddBook(booksData);
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='title'>Title</label>
                <input type='text' required id='title' ref={titleRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='author'>Author</label>
                <input type='text' required id='author' ref={authorRef} />
            </div>
            <div>
                <button className={classes.button}>Create</button>
            </div>
            <Link to='/'><button className={classes.close_button}>X</button></Link>
        </form>
    );
}
export default NewBookForm;