import React from 'react';
import { SiHeroku, SiGithub } from 'react-icons/si';

const Project = ({ props }) => {

    const { name, image, github_link, deployed_link, type } = props;

    return (
        <section class="flex-row w-45 card">
            <div className="card-header">
                <h3>{name}</h3>
            </div>
            <div className="card-body">
                <div className="flex-row justify-space-around">
                    <a href={github_link}><SiGithub /></a>
                    <a href={deployed_link}><SiHeroku /></a>
                </div>
                <img src={image} className="project-img" />
            </div>

        </section>
    )
}

export default Project;