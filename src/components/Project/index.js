import React from 'react';

const Project = ({props}) => {
  
    const {name, image, github_link, deployed_link, type} = props;

    return (
        <section>
            <p className="text-dark">Name: {name}</p>
            <p className="text-dark">Image: {image}</p>
            <p className="text-dark">GH: {github_link}</p>
            <p className="text-dark">Deployed: {deployed_link}</p>
            <p className="text-dark">Type: {type}</p>
        </section>
    )
}

export default Project;