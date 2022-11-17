import React from 'react';

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <div className='footer bg-light'>
            <div className='footertext'>Copyright @ {year}</div>
        </div>
    );
};

export default Footer;