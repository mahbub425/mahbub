import React from 'react';

const PortfolioModal = ({ isOpen, onClose, details }) => {
    if (!isOpen) return null;
    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
        }}>
            <div style={{
                background: '#fff', padding: 24, borderRadius: 8, minWidth: 300, maxWidth: 600, position: 'relative'
            }}>
                <button onClick={onClose} style={{
                    position: 'absolute', top: 8, right: 8, background: 'transparent', border: 'none', fontSize: 20, cursor: 'pointer'
                }}>×</button>
                {/* Render portfolio details here */}
                <h2>{details.title}</h2>
                <p>{details.description}</p>
                {/* Add more fields as needed */}
            </div>
        </div>
    );
};

export default PortfolioModal;
