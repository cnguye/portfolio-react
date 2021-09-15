import React from 'react';

function Header() {
    return (
        <header className='header'>
            <div className='logo'>
                <a href='https://christopherhnguyen.com/'>
                    <img
                        src={process.env.PUBLIC_URL + '/imgs/ceen-square-cs.png'}
                        alt=''
                    />
                </a>
            </div>
        </header>
    );
}

export default Header;
