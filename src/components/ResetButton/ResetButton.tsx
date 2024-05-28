import React from 'react';

interface ResetButtonProps {
    resetGame: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({ resetGame }) => {
    return (
        <button className="reset-button" onClick={resetGame}>Reset</button>
    );
};

export default ResetButton;
