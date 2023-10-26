import React, { useState } from 'react';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    
    const handleInputChange = (event) => {
        setFormState({
            ...formState,
            [event.target.nameee]: event.target.value
        });
    };
    
    return (
        <div className="contact-page">
        <h1>Contact Us</h1>
        <p>
        If you have any information about revolutionary activities among the bison population, please contact us immediately.
        </p>
        <form>
        <label>
        Name:
        <input type="text" name="name" value={formState.name} onChange={handleInputChange} />
        </label>
        <label>
        Email:
        <input type="email" name="email" value={formState.email} onChange={handleInputChange} />
        </label>
        <label>
        Message:
        <textarea name="message" value={formState.message} onChange={handleInputChange} />
        </label>
        <input type="submit" value="Submit" />
        </form>
        </div>
        );
        
    };
    
    export default Contact;
    