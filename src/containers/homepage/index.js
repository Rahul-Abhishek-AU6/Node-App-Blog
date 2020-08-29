import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

const Homepage = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to Blog-one!</h2>
                <div>
                    <Link className="btn btn-primary" to='/login'>Login</Link>
                    <Link className="btn btn-secondary" to='/posts'>Posts</Link>
                </div>
            </header>
        </div>
    );
}

export default Homepage;
