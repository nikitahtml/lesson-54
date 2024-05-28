import React from 'react';

interface AttemptsProps {
    attempts: number;
}

const Attempts: React.FC<AttemptsProps> = ({ attempts }) => {
    return (
        <p>Attempts: {attempts}</p>
    );
};

export default Attempts;
