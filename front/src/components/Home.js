
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <Header />
            <div className="hero">
                <div className="hero-content">
                    <p>
                        GenQuiz is an application where you can read interesting content on various topics and test your knowledge
                        with related quizzes. Explore our wide range of content and challenge yourself with quizzes!
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
