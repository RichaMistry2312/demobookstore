import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">
            <h2>BookStreet ! one Step ahead</h2>
            <p className="m-4"
             >Dive into Stories that Inspire, Entertain, and  Ignite Your Imagination!</p>
            <Link className="btn" to="/books">View All Books</Link>
        </section>
    )
}

export default Hero
