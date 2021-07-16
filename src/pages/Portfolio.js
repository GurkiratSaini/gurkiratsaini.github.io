import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
    const projects = [
        {
            name: 'Deep Thoughts',
            image: '',
            github_link: 'https://github.com/GurkiratSaini/deep-thoughts',
            deployed_link: 'https://mighty-lake-44841.herokuapp.com/',
            type: 'React'
        },
        {
            name: 'Shop Shop',
            image: '',
            github_link: 'https://github.com/GurkiratSaini/shop-shop',
            deployed_link: '',
            type: 'React'
        },
        {
            name: 'Photo Port',
            image: '',
            github_link: 'https://github.com/GurkiratSaini/photo-port',
            deployed_link: 'https://gurkirat.me/photo-port',
            type: 'React'
        },
        {
            name: 'Deep Thoughts',
            image: '',
            github_link: 'https://github.com/GurkiratSaini/deep-thoughts',
            deployed_link: 'https://mighty-lake-44841.herokuapp.com/',
            type: 'React'
        },
        {
            name: 'Shop Shop',
            image: '',
            github_link: 'https://github.com/GurkiratSaini/shop-shop',
            deployed_link: '',
            type: 'React'
        },
        {
            name: 'Photo Port',
            image: '',
            github_link: 'https://github.com/GurkiratSaini/photo-port',
            deployed_link: 'https://gurkirat.me/photo-port',
            type: 'React'
        }
    ];

    return (
        <div className="container flex-row justify-space-between">
            <>
            {projects.map(project => (
                <Project props={project} key={project.name} />
            ))}
            </>
        </div>
    )
}

export default Portfolio;