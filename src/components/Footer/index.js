import React from "react";

const Footer = () => {
    return (
        <footer className="w-100 mt-auto  p-4">
            <footer className="footer">
                <div>
                    <div className="d-flex justify-content-around">
                        <a className="text-light text-decoration-none" href="https://github.com/Ingramwd">
                            GitHub
                        </a>
                        <a className="text-light text-decoration-none"
                            href="https://www.linkedin.com/in/william-ingram-26ab34224/"
                        >
                            LinkedIn
                        </a>
                        <a className="text-light text-decoration-none"
                            href="https://twitter.com/William15999168">
                            Twitter
                        </a>
                    </div>
                </div>
            </footer>
            <div className="container">&copy;2022 by William Ingram</div>
        </footer>
    );
};

export default Footer;