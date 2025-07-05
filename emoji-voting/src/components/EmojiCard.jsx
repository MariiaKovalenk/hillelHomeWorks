import React from 'react';

const EmojiCard = ({ emoji, count, onClick }) => {
    return (
        <div style={{ margin: 10, textAlign: 'center' }}>
            <div
                style={{ fontSize: 40, cursor: 'pointer' }}
                onClick={() => onClick(emoji)}
            >
                {emoji}
            </div>
            <div>Голосів: {count}</div>
        </div>
    );
};

export default EmojiCard;
