import React from 'react';

const Contact = () => {
    return (
        <div className="container-fluid">
            <form>
                <label htmlFor="name-field" className="form-label">Your name:</label>
                <input name="name-field" type="text" className="form-input" />

                <label htmlFor="email-field" className="form-label">Your email:</label>
                <input name="email-field" type="text" className="form-input" />

                <label htmlFor="message-field" className="form-label">Your message:</label>
                <textarea name="message-field" type="text" className="form-textarea w-100" />

                <button type="submit" className="btn">Submit</button>
            </form>
        </div>
    )
}

export default Contact;