import React from 'react';

const ProjectDetailsPopup = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 1000
        }}>
            <div style={{
                background: '#fff',
                padding: '24px',
                borderRadius: '8px',
                minWidth: '300px',
                maxWidth: '90vw'
            }}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                {/* Add more project details as needed */}
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default ProjectDetailsPopup;
