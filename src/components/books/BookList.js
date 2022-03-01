import FavoriteBook from './FavoriteBook';
import classes from './BookList.module.css';

function BookList(props) {
    return (
        <div className={classes.list_wrap}>
            <ul className={classes.list}>
                {props.books.map((book) => (
                    <FavoriteBook
                        key={book.id}
                        id={book.id}
                        title={book.title}
                        author={book.author}
                    />
                ))}
            </ul>
        </div>
    );
}
export default BookList;