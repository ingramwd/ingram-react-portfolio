import React, { useState } from "react";

function Nav() {


    const handleClick = (item) => {
        console.log(item);
        return item;
    }

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
                        <a className="text-light text-decoration-none" href="#about" >
                            About
                        </a>
                    </li>
                    <li className="mx-1">
                        <a className="text-light text-decoration-none" href="#portfolio" >
                            Portfolio
                        </a>
                    </li>
                    <li className="mx-1">
                        <a className="text-light text-decoration-none" href="#contact" >
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