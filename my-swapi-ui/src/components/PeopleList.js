import React from 'react';
import PersonCard from './PersonCard';

function PeopleList() {
    const people = [
        { name: 'Luke Skywalker', gender: 'male', birth_year: '19BBY' },
        { name: 'Leia Organa', gender: 'female', birth_year: '19BBY' },
        { name: 'Darth Vader', gender: 'male', birth_year: '41.9BBY' },
    ];

    return (
        <div className="row">
            {people.map((person, index) => (
                <div className="col-md-4 mb-4" key={index}>
                    <PersonCard person={person} />
                </div>
            ))}
        </div>
    );
}

export default PeopleList;
