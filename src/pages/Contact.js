import React from 'react';

const Contact = () => {
    return (
        <div className="contact-page">
        <h1>Contact Us</h1>
        <p>If you have any information about revolutionary activities among the bison population, please contact us immediately.</p>
        <form>
        <label>
        Name:
        <input type="text" name="name" />
        </label>
        <label>
        Email:
        <input type="email" name="email" />
        </label>
        <label>
        Message:
        <textarea name="message" />
        </label>
        <input type="submit" value="Submit" />
        </form>
        </div>
        );
    };
    
    export default Contact;