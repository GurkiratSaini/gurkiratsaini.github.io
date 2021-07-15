import React from 'react';
import Navigation from '../Navigation';

const Header = () => {
    return (
        <header className="bg-secondary mb-4 py-2 flex-row align-center">
            <div className="container flex-row justify-space-between-lg justify-center align-center">
                <a href="/"><h1>Gurkirat Saini</h1></a>
            <Navigation />
            </div>
        </header>
    )
}

export default Header;