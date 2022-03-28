import React, { useState } from "react";

function Nav({ currentPage, handlePageChange }) {
    return (
        <header className="flex-row px-1 ">
            <h2>
                <a className="text-light text-decoration-none" href="/">
                    William Ingram
                </a>
            </h2>
            <nav>
                <ul className="d-flex justify-content-between list-unstyled">
                    <li className="mx-1">
                        <a onClick={() => handlePageChange('About')} className={currentPage = 'About' ? `nav-link text-light text-decoration-none` : `nav-link text-decoration-none text-warning`} href="#about" >
                            About
                        </a>
                    </li>
                    <li className="mx-1">
                        <a onClick={() => handlePageChange('Portfolio')} className={currentPage = 'Portfolio' ? `nav-link text-light text-decoration-none` : `nav-link text-decoration-none text-warning`} href="#about" >
                            Portfolio
                        </a>
                    </li>
                    <li className="mx-1">
                        <a onClick={() => handlePageChange('ContactForm')} className={currentPage = 'ContactForm' ? `nav-link text-light text-decoration-none` : `nav-link text-decoration-none text-warning`} href="#about" >
                            Contact
                        </a>
                    </li>
                    <li className="mx-1">
                        <a className="text-light text-decoration-none" href="#resume" >
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;