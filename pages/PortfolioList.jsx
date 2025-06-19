import React, { useState } from 'react';
import PortfolioModal from '../components/PortfolioModal';

const PortfolioList = ({ portfolios }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedPortfolio, setSelectedPortfolio] = useState(null);

    const handleViewDetails = (portfolio) => {
        setSelectedPortfolio(portfolio);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedPortfolio(null);
    };

    return (
        <div>
            {portfolios.map((portfolio) => (
                <div key={portfolio.id}>
                    {/* ...existing portfolio summary... */}
                    <button onClick={() => handleViewDetails(portfolio)}>
                        View Details
                    </button>
                </div>
            ))}
            <PortfolioModal
                isOpen={modalOpen}
                onClose={handleCloseModal}
                details={selectedPortfolio || {}}
            />
        </div>
    );
};

export default PortfolioList;