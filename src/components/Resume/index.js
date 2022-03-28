import React from "react";
import resumeWdi from "../../assets/pdf/resumeWdi.pdf"

function Resume() {
    return (
        <div>
            <div>
                <h3>Download my Resume!</h3>
                <div>
                    Languages and FrameWorks:
                    <ul className="flex-wrap justify-content-around list-unstyled">
                        <li>
                            HTML
                        </li>
                        <li>
                            CSS
                        </li>
                        <li>
                            JavaScript
                        </li>
                        <li>
                            Node.js
                        </li>
                        <li>
                            Express
                        </li>
                        <li>
                            MongoDB
                        </li>
                        <li>
                            React
                        </li>
                        <li>
                            HandleBars
                        </li>
                        <li>
                            BootStrap
                        </li>
                        <li>
                            SQL
                        </li>
                        <li>
                            NoSQL
                        </li>
                        <li>
                            Thank You for taking a look at my React Portfolio
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bottom">
                <a className="text-warning" href={resumeWdi}>Download</a>
            </div>
        </div>
    )
}

export default Resume;