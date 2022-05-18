import React, { Component } from 'react';
import './Navbar.css';

export default class Navbar extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <header className='header'>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <a className="navbar-brand" href="#">Sorting Visualizer</a> 
                    </div>
                </nav>
            </header>
        );
    }
}