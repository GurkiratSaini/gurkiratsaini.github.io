import React from 'react';

const Project = ({props}) => {
  
    const {name, image, github_link, deployed_link, type} = props;

    return (
        <section class="flex-row w-45 card">
            <div className="card-header">
                <h3>{name}</h3>
            </div>
            <div className="card-body">
                <p className="text-dark">Image: {image}</p>
                <p className="text-dark">GH: {github_link}</p>
                <p className="text-dark">Deployed: {deployed_link}</p>
                <p className="text-dark">Type: {type}</p>
            </div>
            
        </section>
    )
}

export default Project;