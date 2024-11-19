import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div className="landing">
            <h1>Welcome to Houseplant Store</h1>
            <p>We offer the best houseplants to beautify your home.</p>
            <Link to="/products">
                <button>Get Started</button>
            </Link>
        </div>
    );
}

export default LandingPage;
