import React from 'react';
import './Homepage.css';
import HomeHeader from './HomeHeader';

function Homepage() {
    return (
        <div className="App">
            <header className="App-header">
                <p>Hello world</p>
                <HomeHeader></HomeHeader>
            </header>
        </div>
    );
}

export default Homepage;