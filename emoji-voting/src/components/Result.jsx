import React from 'react';

const Result = ({ votes }) => {
    if (!votes) return null;
    const max = Math.max(...Object.values(votes));
    const winners = Object.entries(votes)
        .filter(([_, v]) => v === max)
        .map(([e]) => e);

    if (max === 0) return <p>Ще немає голосів</p>;

    return (
        <div style={{ marginTop: 20, fontSize: 24, fontWeight: 'bold' }}>
            Переможець: {winners.join(' ')} ({max} голосів)
        </div>
    );
};

export default Result;
