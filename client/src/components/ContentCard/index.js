import React, { useEffect, useState } from "react";
import ElemContainer from "../ElemContainer";
import BookCard from "../BookCard";
import Wrapper from "../Wrapper";
import API from "../../utils/API";
import "./style.css";

function ContentCard() {

    const [books, setBooks] = useState([]);

    const [formObject, setFormObject] = useState({});

    useEffect(() => {
        loadBooks()
    }, []);

    function loadBooks() {
        API.getBooks()
        .then( (book) => setBooks(book.data))
        .catch( (err) => console.log(err));
    }

    return (
        <ElemContainer addClass="elemContainer col s12">
        {books.length ? (
            <div>
                <h4>Saved Books</h4>
                {books.map( (book) => {
                    console.log(book._id);
                    return (
                        <BookCard key={book._id}
                        apiHref={"/books/" + book._id}
                        bookName={book.title}
                        link={book.author}
                        info={book.synopsis}
                        />
                    );
                })}
            </div>
        ) : (<h3>No Books Saved.</h3>)}
        </ElemContainer>
    );
}

export default ContentCard;