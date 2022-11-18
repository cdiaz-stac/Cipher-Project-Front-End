import React from 'react';
import cryptography from "../Images/cryptography.jpeg";

const Home = () => {
    return (
        <div style={{textAlign: "center", marginBottom: "25px"}}>

            <img src={cryptography}
                className="img-fluid" 
                alt="cryptography"/>

            <h2 style={{textAlign: "center", marginBottom: "25px"}}>Introduction to Cryptography</h2>

            <p>Cryptography is the study of secret messages.</p>

            <p>Cryptography has been used throughout history as a means of exchanging private correspondence such as personal letters, important military communications and financial information.</p>

            <p>This has created an ongoing race between cryptographers who design increasingly complex ciphers and the cryptanalysts who attempt to crack them.</p>

            <p>The categories ahead present a series of puzzles designed to introduce you to some of the most common ciphers, and techniques for breaking them. They are arranged roughly in order of complexity.</p>

            <p>Cryptanalysis can be a time consuming task requiring patience and focus. The puzzles ahead are largely left to your creativity to solve, but all the clues needed are present within the rooms.</p>

            <p>So open up notepad, or grab a pen and paper and good luck!</p>


        </div>
    );
};

export default Home;