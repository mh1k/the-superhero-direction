import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header-container text-center shadow">
            <div className="header-content pt-3">
                <h1 className="header-title">Fast &amp; Furious 10 </h1>
                <p className="header-slogan">- No One Outruns Their Past. And Yours Just Caught Up To You -</p>
            </div>
            <h2 className="movie-budget pt-1 pb-2">Total Movie Budget : 200 Million Dollar</h2>
        </div>
    );
};

export default Header;