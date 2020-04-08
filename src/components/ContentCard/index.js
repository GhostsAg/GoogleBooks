import React from "react";
import ElemContainer from "../ElemContainer";
import BookCard from "../BookCard";
import "./style.css";


function ContentCard() {
    return (
        <ElemContainer addClass="elemContainer col s12">
            <h4>Saved Books</h4>
            <BookCard bookName="Harry Potter"
                img="placeholder"
                info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quas facere quaerat quidem porro est dolore nam assumenda perspiciatis, nihil excepturi explicabo iusto adipisci repellat aperiam, dolores dolorem! Velit, non?" 
            />
        </ElemContainer>
    );
}

export default ContentCard;