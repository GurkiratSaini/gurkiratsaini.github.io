import React, { useEffect } from 'react';

const Navigation = (props) => {

    const {
        tabs,
        currentTab,
        setCurrentTab
    } = props.props;

    useEffect(() => {
        document.title = currentTab;
    }, [currentTab]);

    return (
        <nav className="flex-row justify-space-between-lg justify-center align-center">
            <button className="btn" onClick={() => { setCurrentTab("about") }} id="about">About Me</button>
            <button className="btn" onClick={() => { setCurrentTab("portfolio") }} id="portfolio">Portfolio</button>
            <button className="btn" onClick={() => { setCurrentTab("contact") }} id="contact">Contact</button>
            <button className="btn" onClick={() => { setCurrentTab("resume") }} id="resume">Resume</button>
        </nav >
    )
}

export default Navigation;