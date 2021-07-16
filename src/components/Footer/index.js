import React from 'react';
import { GoMarkGithub } from 'react-icons/go';
import {AiFillLinkedin} from 'react-icons/ai';

const Footer = () => {
    return (
    <footer className="w-100 mt-auto bg-secondary p-4">
        <div className="w-25 flex-row justify-space-around align-center m-auto h-auto">
            <a href="https://github.com/GurkiratSaini" target="_blank" rel="noreferrer"><h1><GoMarkGithub /></h1></a>
            <a href="https://www.linkedin.com/in/gurkirat-saini-39577a88/" target="_blank" rel="noreferrer"><h1><AiFillLinkedin /></h1></a>
        </div>
    </footer>
    )
}

export default Footer;