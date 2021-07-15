import React from 'react';

const Navigation = () => {
    return (
        <nav className="flex-row justify-space-between-lg justify-center align-center">
            <a className="btn mx-1" href="/about">About Me</a>
            <a className="btn mx-1" href="/portfolio">Portfolio</a>
            <a className="btn mx-1" href="/contact">Contact</a>
            <a className="btn mx-1" href="/resume">Resume</a>
        </nav>
    )
}

export default Navigation;