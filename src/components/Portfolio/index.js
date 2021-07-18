import React from 'react';
import Project from '../Project';

const Portfolio = () => {
    const projects = [
        {
            name: 'Deep Thoughts',
            image: './images/deep-thoughts.png',
            github_link: 'https://github.com/GurkiratSaini/deep-thoughts',
            deployed_link: 'https://mighty-lake-44841.herokuapp.com/',
            type: 'React'
        },
        {
            name: 'Pizza Hunt',
            image: './images/pizza-hunt.png',
            github_link: 'https://github.com/GurkiratSaini/pizza-hunt',
            deployed_link: 'https://cryptic-caverns-03725.herokuapp.com/',
            type: 'React'
        },
        {
            name: 'Photo Port',
            image: './images/photo-port.png',
            github_link: 'https://github.com/GurkiratSaini/photo-port',
            deployed_link: 'https://gurkirat.me/photo-port',
            type: 'React'
        },
        {
            name: 'COVacation',
            image: './images/covacation.png',
            github_link: 'https://github.com/GurkiratSaini/covacation',
            deployed_link: 'https://stevtm.github.io/COVacation/',
            type: 'React'
        },
        {
            name: 'Just Tech News',
            image: './images/just-tech-news.png',
            github_link: 'https://github.com/GurkiratSaini/just-tech-news',
            deployed_link: 'https://pacific-dawn-72541.herokuapp.com/',
            type: 'React'
        },
        {
            name: 'Zookeepr',
            image: './images/zookeepr.png',
            github_link: 'https://github.com/GurkiratSaini/zookeepr',
            deployed_link: 'https://protected-harbor-87776.herokuapp.com/',
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