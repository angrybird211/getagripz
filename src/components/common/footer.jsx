import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className="footer">
            <div className="container">
                <div className="footer-left d-flex">
                    <Link to="/" className="logo">Logo</Link>
                </div>

                <div className="footer-right">
                    <p>for all inquires, please contact gatorgripznft@gmail.com</p>
                </div>
            </div>
        </section>
    )
}

export default Footer;
