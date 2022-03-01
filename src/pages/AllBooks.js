import { useState, useEffect } from 'react';
import BookList from '../components/books/BookList';

function AllBooks() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedBooks, setLoadedBooks] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://books-57138-default-rtdb.firebaseio.com/books.json')
            .then(response => {
                return response.json();
            })
            .then(data => {
                const books = [];

                for (const key in data) {
                    const book = {
                        id: key,
                        ...data[key]
                    };
                    books.push(book);
                }
                setIsLoading(false);
                setLoadedBooks(books);
            });
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    }
    return (
        <section>
            <BookList books={loadedBooks} />
        </section>
    );
}
export default AllBooks;