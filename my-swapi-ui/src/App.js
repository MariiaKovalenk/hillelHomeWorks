import React from 'react';
import Navbar from '../components/Navbar';
import PeopleList from '../components/PeopleList';
import './App.css';

function App() {
    return (
        <div>
            <Navbar />
            <div className="container mt-4">
                <PeopleList />
            </div>
        </div>
    );
}

export default App;
