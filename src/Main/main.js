import React from 'react';
import Header from './header';
import Sidebar from './sidebar';
import './main.css';

function MainPage() {
    return (
        <div>
            <Header></Header>
            <Sidebar></Sidebar>
        </div>
    );
}

export default MainPage;