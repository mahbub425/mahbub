import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectList = ({ projects }) => {
    const navigate = useNavigate();

    const handleViewDetails = (projectId) => {
        navigate(`/projects/${projectId}`);
    };

    return (
        <div>
            {projects.map(project => (
                <div key={project.id}>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                    <button onClick={() => handleViewDetails(project.id)}>
                        View Details
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProjectList;