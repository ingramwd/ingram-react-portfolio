import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers"


function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' })
    const { name, email, message } = formState
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {

        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            //console.log(isValid);
            //isValid conditional Statement
            if (!isValid) {
                setErrorMessage('Your email is invalid')
            } else {
                setErrorMessage('');
            }
        }
        else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }

    }


    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState)
    }

    return (
        <section>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onChange={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" defaultValue={email} onBlur={handleChange} name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <input type="text" defaultValue={message} onChange={handleChange} name="message" />
                </div>

                <button type="submit">Submit</button>
                {errorMessage && (
                    <div>
                        <p className="text-danger">{errorMessage}</p>
                    </div>
                )}
            </form>
            <div className="my-2 flex-row justify-content-center">
                <ul className="list-unstyled">
                    <li>
                        <p>
                            Phone: 513-300-6401
                        </p>
                    </li>
                    <li>
                        <p>
                            email: Ingramwd01@gmail.com
                        </p>
                    </li>
                    <li>
                        <p>
                            GitHub: https://github.com/ingramwd
                        </p>
                    </li>
                </ul>
            </div>

        </section>
    );
}

export default ContactForm;