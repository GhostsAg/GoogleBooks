import React from "react";
import "./style.css";

export function Input(props) {
    return (
        <div className={"form-group " + props.addClasses}>
            <input className="form-control" { ...props } />
        </div>
    );
}

export function FormBtn(props) {
    return (
        <button id="search" { ...props } style={{ float: "right", margin: 15 }} className={"btn btn-success " + props.addClasses} >
            {props.children}
        </button>
    );
}