import React from 'react';

function PersonCard({ person }) {
    return (
        <div className="card h-100 shadow-sm">
            <div className="card-body">
                <h5 className="card-title">{person.name}</h5>
                <p className="card-text">Gender: {person.gender}</p>
                <p className="card-text">Birth Year: {person.birth_year}</p>
            </div>
        </div>
    );
}

export default PersonCard;
