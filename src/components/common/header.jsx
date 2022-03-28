import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="bg-primary">
                <div className="header-top">
                    <div className="container">
                        <div className="header-left">
                            <p className="text-white">
                                add a line of text here
                            </p>
                        </div>

                        <div className="header-right text-white">
                            <ul className="main-nav d-flex">
                                <li>
                                    <Link to="/" className="text-white"><i className="fa-brands fa-twitter"></i></Link>
                                </li>

                                <li>
                                    <Link to="/" className="text-white"><i className="fa-brands fa-instagram"></i></Link>
                                </li>

                                <li>
                                    <Link to="/" className="text-white"><i className="fa-solid fa-telescope"></i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-bottom">
                <div className="container">
                    <div className="header-left d-flex">
                        <Link to="/" className="logo">Logo</Link>

                        <ul className="main-nav d-flex">
                            <li className="nav-item">
                                <Link to="/about">about</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/about">traits</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/about">team</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="header-right">
                        <ul className="main-nav d-flex align-items-center">
                            <li className="nav-item">
                                <button className="btn btn-primary">
                                    <span>connect wallet</span>
                                </button>
                            </li>

                            <li className="nav-item">
                                <Link to="/" title="Go to wishlist">
                                    <i className="fa-solid fa-heart" />
                                </Link>
                            </li>

                            <li className="nav-item" title="Go to cartlist">
                                <Link to="/">
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header;