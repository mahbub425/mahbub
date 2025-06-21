import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectList from './ProjectList';
import ProjectDetailsPage from './ProjectDetailsPage';

function App() {
    return (
        <Router>
            <Routes>
                {/* ...existing routes... */}
                <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
                {/* ...existing routes... */}
            </Routes>
        </Router>
    );
}

export default App;