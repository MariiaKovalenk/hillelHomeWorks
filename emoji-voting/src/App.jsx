import React, { useState, useEffect } from 'react';
import EmojiCard from './components/EmojiCard';
import Result from './components/Result';
import { getVotes, saveVotes, clearVotes } from './utils/localStorageHelper';

const EMOJIS = ['😀', '😂', '😍', '😎', '😡', '🥳'];

function App() {
    const [votes, setVotes] = useState({});

    useEffect(() => {
        setVotes(getVotes(EMOJIS));
    }, []);

    const handleVote = (emoji) => {
        const updated = { ...votes, [emoji]: votes[emoji] + 1 };
        setVotes(updated);
        saveVotes(updated);
    };

    const handleClear = () => {
        clearVotes();
        const reset = {};
        EMOJIS.forEach(e => reset[e] = 0);
        setVotes(reset);
    };

    return (
        <div style={{ textAlign: 'center', padding: 20 }}>
            <h1>Проголосуй за улюблений смайлик!</h1>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                {EMOJIS.map(emoji => (
                    <EmojiCard
                        key={emoji}
                        emoji={emoji}
                        count={votes[emoji] || 0}
                        onClick={handleVote}
                    />
                ))}
            </div>
            <div style={{ marginTop: 20 }}>
                <button onClick={() => {}} disabled>Show Results (натисни нижче)</button>
                <button onClick={handleClear} style={{ marginLeft: 10 }}>Очистити результати</button>
            </div>
            <Result votes={votes} />
        </div>
    );
}

export default App;
