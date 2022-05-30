import React from "react";
import { Link } from "react-router-dom";
import {
    BiBookReader,
    BiHome,
    BiArchive,
    BiBook,
    BiBookOpen,
    BiFileFind,
    BiLike,
} from "react-icons/bi";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__title">
                <BiBookReader className="sidebar__icons--main"/> 
                <h3>Gutenberg library</h3>
               
            </div>
            <p></p>
            <Link className="sidebar__links" to="/">
                <BiHome className="sidebar__icons--menu" />
                Home
            </Link>
            <Link className="sidebar__links" to="/search">
                <BiFileFind className="sidebar__icons--menu" />
                Search
            </Link>
            <Link className="sidebar__links" to="/categories">
                <BiArchive className="sidebar__icons--menu" />
                Categories
            </Link>
            <Link className="sidebar__links" to="/books">
                <BiBook className="sidebar__icons--menu" />
                Books
            </Link>
            <Link className="sidebar__links" to="/favourites">
                <BiLike className="sidebar__icons--menu" />
                My Favourites
            </Link>
            <Link className="sidebar__links" to="/myshelf">
                <BiBookOpen className="sidebar__icons--menu" />
                My shelf
            </Link>
        </div>
    );
};

export default Sidebar;
