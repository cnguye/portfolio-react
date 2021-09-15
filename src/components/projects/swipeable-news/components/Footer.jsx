import React from 'react';

function Footer() {
    /* footer */
    return (
        // Footer
        <footer className='footer'>
            <a
                href='mailto:ngyn.christopher@gmail.com'
                className='footer__link'
            >
                ngyn.christopher@gmail.com
            </a>
            <ul className='social-list'>
                <li className='social-list__item'>
                    <a
                        className='social-list__link'
                        href='https://www.linkedin.com/in/cnguye/'
                    >
                        <i className='fab fa-linkedin'></i>
                    </a>
                </li>
                <li className='social-list__item'>
                    <a
                        className='social-list__link'
                        href='https://open.spotify.com/artist/2wQ9uTWhu9Lkokc2DByKcQ?si=N5qI0I7sSPCBFMN55CBpzA'
                    >
                        <i className='fab fa-spotify'></i>
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
