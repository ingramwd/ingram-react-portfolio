import React, { useState } from "react";
import Nav from "../Nav";
import About from "../About";
import ContactForm from "../Contact";

function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />
        }
        if (currentPage === 'ContactForm') {
            return <ContactForm />
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);


    return (
        <div>
            < Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}

export default PortfolioContainer;