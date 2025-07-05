const STORAGE_KEY = 'emoji-votes';

export function getVotes(emojis) {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) {
        const initial = {};
        emojis.forEach(e => initial[e] = 0);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
        return initial;
    }
    return saved;
}

export function saveVotes(votes) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(votes));
}

export function clearVotes() {
    localStorage.removeItem(STORAGE_KEY);
}
