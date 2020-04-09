import React, { useEffect, useState } from "react";
import ElemContainer from "../ElemContainer";
import BookCard from "../BookCard";
import { Input, FormBtn } from "../Form";
import API from "../../utils/API";
import "./style.css";

// props: subtitle, search: true or false.

function ContentCard(props) {

    const [books, setBooks] = useState([]);

    const [formObject, setFormObject] = useState({});

    const search = [];

    useEffect(() => {
        if (props.search === "false") {
            loadBooks();
        }
    })

    function loadBooks() {
        API.getBooks()
        .then( (book) => setBooks(book.data))
        .catch( (err) => console.log(err));
    }

    function handleInputChange(event) {
        const { value } = event.target;
        setFormObject({ book: value })
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        API.searchBook(formObject.book)
        .then( (books) => {
            books.data.items.forEach( (book) => {
                search.push(
                {
                    _id: book.id,
                    title: book.volumeInfo.title,
                    author: book.volumeInfo.authors[0],
                    link: book.selfLink,    
                    img: book.volumeInfo.imageLinks.smallThumbnail
                })
            });
        })
    }

    return (
        <ElemContainer addClass="elemContainer col s12">
            <h4>{props.subtitle}</h4>
            <form className={props.search}>
                <Input onChange={handleInputChange}
                    name="book"
                    placeholder="Book Title"
                />
                <FormBtn disabled={!formObject.book}
                    onClick={handleFormSubmit}
                >
                    Search
                </FormBtn>
            </form>
            {books.length ? (
                <div>
                    {books.map( (book) => {
                        return (
                            <BookCard key={book._id}
                            apiHref={"/books/" + book._id}
                            bookName={book.title}
                            author={book.author}
                            link={book.author}
                            info={book.synopsis}
                            img={book.img}
                            />
                        );
                    })}
                </div>
            ) : (<div><h3 id={props.search}>No Books Saved.</h3></div>)}
        </ElemContainer>
    );
}

export default ContentCard;