import React from "react";

import ReactDOM from "react-dom"

import {image} from "faker";

const App = ()=> {
    return ( <div className ="ui container comments">
        <a href="/"> className="avatar"
            <img alt= "avatar" src={image.avatar()}/>
        </a>
        <div className="content">
            <a className="author">Jenny Hess</a>
            <a href="/">Alex</a>
            <div className = "metadata">
                <span className="date">Just now</span>
                <div className="text">Eliot </div>
            </div>
        </div>
    </div>
    );
};