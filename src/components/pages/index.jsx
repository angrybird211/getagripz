import React from 'react';
import { Link } from 'react-router-dom';

import InputCount from 'components/elements/input-count';
import BrandBar from 'components/elements/brand-bar';

const IndexPage = () => {
    return (
        <main className="main">
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <img src="./images/5.gif" alt="placeholder" width="100px" height="100px"></img>
                        </div>

                        <div className="col-lg-6 col-12 border-left-lg-0 d-flex align-items-center">
                            <div className="section-container">
                                <h3 className="title">mint your gator gripz</h3>

                                <InputCount />

                                <div className="text-center rest-count">
                                    <span>0 / 5005 available</span>
                                </div>

                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-white btn-md">mint</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <BrandBar />

            <section className="section">
                <h2 className="title text-center">about</h2>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12 d-flex align-items-center">
                            <div className="section-container text-center section-spacing-sm">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12 border-left-lg-0">
                            <img src="./images/1.jpg" alt="placeholder" width="100px" height="100px"></img>
                        </div>
                    </div>
                </div>
            </section>

            <BrandBar />

            <section className="pattern-section section">
                <h2 className="title text-center">traits</h2>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="pattern">
                                <h4 className="title">
                                    backgrounds
                                </h4>

                                <div className="pattern-media">
                                    <img src="./images/1.jpg" alt="placeholder" width="100px" height="100px"></img>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12">
                            <div className="pattern">
                                <h4 className="title">
                                    glove colors
                                </h4>

                                <div className="pattern-media">
                                    <img src="./images/2.jpg" alt="placeholder" width="100px" height="100px"></img>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12">
                            <div className="pattern">
                                <h4 className="title">
                                    fingers & rings
                                </h4>

                                <div className="pattern-media">
                                    <img src="./images/3.jpg" alt="placeholder" width="100px" height="100px"></img>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12">
                            <div className="pattern">
                                <h4 className="title">
                                    grippetz charms
                                </h4>

                                <div className="pattern-media">
                                    <img src="./images/4.jpg" alt="placeholder" width="100px" height="100px"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-primary">
                <h2 className="title text-center text-white">team</h2>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12 border-color-white">
                            <img src="./images/6.jpg" alt="placeholder" width="100px" height="100px"></img>
                        </div>

                        <div className="col-lg-6 col-12 d-flex align-items-center border-left-lg-0 border-color-white">
                            <div className="section-container text-center section-spacing-sm">
                                <p className="text-white">
                                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row online-links">

                        <Link to="/" className="text-white link-primary col-lg-6 col-12 border-color-white">follow now online</Link>

                        <ul className="main-nav d-flex justify-content-center text-white link-primary col-lg-6 col-12 border-color-white border-left-lg-0">
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
            </section>
        </main>
    )
}

export default IndexPage;