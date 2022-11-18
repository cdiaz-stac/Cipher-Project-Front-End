import React, { useState } from "react";
import { Link } from "react-router-dom";

const rawHTML = `
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
* {
  box-sizing: border-box;
}

body {
  background-color: #474e5d;
  font-family: Helvetica, sans-serif;
}

/* The actual timeline (the vertical ruler) */
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: white;
  top: 0;
  bottom: 0;
  left: 74.5%;
  margin-left: -3px;
}

/* Container around content */
.container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}

/* The circles on the timeline */
.container::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  right: -17px;
  background-color: white;
  border: 4px solid #FF9F55;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

/* Place the container to the left */
.left {
  left: 0;
}

/* Place the container to the right */
.right {
  left: 50%;
}

/* Add arrows to the left container (pointing right) */
.left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid white;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent white;
}

/* Add arrows to the right container (pointing left) */
.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
}

/* Fix the circle for containers on the right side */
.right::after {
  left: -16px;
}

/* The actual content */
.content {
  padding: 20px 30px;
  background-color: white;
  position: relative;
  border-radius: 6px;
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {
  /* Place the timelime to the left */
  .timeline::after {
  left: 31px;
  }
  
  /* Full-width containers */
  .container {
  width: 100%;
  padding-left: 70px;
  padding-right: 25px;
  }
  
  /* Make sure that all arrows are pointing leftwards */
  .container::before {
  left: 60px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
  }

  /* Make sure all circles are at the same spot */
  .left::after, .right::after {
  left: 15px;
  }
  
  /* Make all right containers behave like the left ones */
  .right {
  left: 0%;
  }
}
</style>
</head>
<body>
<div class="timeline">
<div class="container left">
<div class="content">
  <h2>600 B.C.</h2>
  <p>The earliest known cryptographic device, the Scytale, is ued to perform basic transpositions on Greek military communications.</p>
</div>
</div>
<div class="container right">
<div class="content">
  <h2>50 B.C.</h2>
  <p>Julius Caesar uses a simple substitution cypher to encrypt his private and military correspondence.</p>
</div>
</div>
<div class="container left">
<div class="content">
  <h2>850 A.D.</h2>
  <p>Arab scholar Al-Kindi writes the book "On Decrypting Encrypted Correspondence", it describes a technique for deciphering monoalphabetic ciphers.</p>
</div>
</div>
<div class="container right">
<div class="content">
  <h2>1586 A.D.</h2>
  <p>Blaise de Vigenère is famously misattributed as the inventor of the first easy to use polyalphabetic cipher with strong encryption, named the Vigenère Cipher. It earns the nickname "the undecipherable cipher".</p>
</div>
</div>
<div class="container left">
<div class="content">
  <h2>1587 A.D.</h2>
  <p>Mary Queen of Scots is beheaded after a plot to assassinate Queen Elizabeth I is deciphered by her spy master Francis Walsingham.</p>
</div>
</div>
<div class="container right">
<div class="content">
  <h2>1854 A.D.</h2>
  <p>Charles Babbage achieves the impossible and discovers a method for cracking the Vigenère cipher.</p>
</div>
</div>
<div class="container left">
<div class="content">
  <h2>1917</h2>
  <p>British intelligence decrypts the Zimmerman telegram, a plot for germany to ally with Mexico. This leads to the US declaring war on Germany.
  </p>
</div>
</div>
<div class="container right">
<div class="content">
  <h2>1925 A.D.</h2>
  <p>Arthur Scherbius invents the Enigma machine. Originally a commercial product it is later adopted by the German military.</p>
</div>
</div>
<div class="container left">
<div class="content">
  <h2>1932 A.D.</h2>
  <p>Polish cryptanalysts and mathematicians crack the 1st version of Enigma with the aid of mechanical key testing devices called Bombes.</p>
</div>
</div>
<div class="container right">
<div class="content">
  <h2>1943 A.D.</h2>
  <p>British code breakers at Bletchley Park develop Colossus, a machine for complex cryptanalysis. Its re-programmable nature means it is often credited as the first modern computer.</p>
</div>
</div> 
<div class="container left">
<div class="content">
  <h2>1976 A.D.</h2>
  <p>Whitfield Diffie and Martin Hellman develop public-key cryptography, which allows for encrypted communication with the need to exchange keys privately prior to transmission.</p>
</div>
</div>
<div class="container right">
<div class="content">
  <h2>1989 A.D.</h2>
  <p>Tim Berners-Lee invents the World Wide Web.</p>
</div>
</div>
<div class="container left">
<div class="content">
  <h2>2001 A.D.</h2>
  <p>Vincent Rijmen and Joan Daemen develop the Rijndael cipher which is adopted world wide as the aDvanced Encruption Standard (AES). It has yet to be broken.</p>
</div>
</div>
</div>
</body>
</html>
`;

const History = () => {
  return <div dangerouslySetInnerHTML={{ __html: rawHTML }}></div>;
};

export default History;
