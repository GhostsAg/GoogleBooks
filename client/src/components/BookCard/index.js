import React from "react";
import "./style.css";

// props: bookName, author, link, img, info, apiHref.
function BookCard(props) {
    return (
        <div className="card">
            <div className="row">
                <div className="card-content">
                    <span id="bookName" className="col s6 card-title grey-text text-darken-4"><a href={props.apiHref}>{props.bookName}</a></span>
                    <button className="waves-effect waves-light btn" type="button"><i className="fas fa-times right"></i></button>{" "}
                    <button className="waves-effect waves-light btn" type="button"><i className="fas fa-eye right"></i></button>
                    <div className="row">{props.author}</div>  
                </div>
            </div>
            <div className="row"><p><a href={props.link} target="_blank">More Info</a></p></div>
            <div className="row">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="col s2 l4" src={props.img} />
                    <p className="col s10 l8">{props.info}</p>
                </div>
            </div>
        </div>
    );
}

export default BookCard;