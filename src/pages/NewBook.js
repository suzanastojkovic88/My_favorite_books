import { useHistory } from 'react-router-dom';
import NewBookForm from '../components/books/NewBookForm';


function NewBook() {
    const history = useHistory();
    function addBookHandler(booksData) {
        fetch(
            'https://books-57138-default-rtdb.firebaseio.com/books.json',
            {
                method: 'POST',
                body: JSON.stringify(booksData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            history.replace('/');
        });
    }
    return (
        <section>
            <NewBookForm onAddBook={addBookHandler}/>
        </section>
    );
}
export default NewBook;