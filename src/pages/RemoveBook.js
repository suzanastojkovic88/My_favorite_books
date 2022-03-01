import React from 'react';
import FavoriteBook from '../components/books/FavoriteBook';

function RemoveBook(props) {

    const initialBooks = fetch('https://books-57138-default-rtdb.firebaseio.com/books.json')
        .then(response => {
            return response.json();
        });

    const [books, setBooks] = React.useState(initialBooks);

    function removeHandler(id) {
        const newBookList = books.filter((book) => book.id !== id);
        setBooks(newBookList);
    }
    return (
        <section>
            <FavoriteBook remove={removeHandler} />
        </section>
    );
}
export default RemoveBook;