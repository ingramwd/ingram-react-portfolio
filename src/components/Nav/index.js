import React from "react";

function Nav() {
    return (
        <header className="flex-row px-1 bg-secondary">
            <h2>
                <a className="text-dark text-decoration-none" href="/">
                    William Ingram
                </a>
            </h2>
            <nav>
                <ul className="d-flex justify-content-around">
                    <li className="mx-1">
                        <a className="text-dark text-decoration-none" href="#about" >
                            About Me
                        </a>
                    </li>
                    <li className="mx-1">
                        <a className="text-dark text-decoration-none" href="#about" >
                            About Me
                        </a>
                    </li>
                    <li className="mx-1">
                        <a className="text-dark text-decoration-none" href="#about" >
                            About Me
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;