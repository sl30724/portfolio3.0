import { Icon } from '@iconify-icon/react';
import { useState, useEffect } from 'react';
// import MobileNav from './MobileNav';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
// import resume from '/resume.pdf';

export default function Nav() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [showNav, setShowNav] = useState(true);

    const navbarStyles = {
        position: 'fixed',
        height: '60px',
        width: '100%',
        backgroundColor: 'grey',
        textAlign: 'center'
    }

    // new function:
    const handleScroll = () => {
        // find current scroll position
        const currentScrollPos = window.scrollY;
        if (typeof window !== 'undefined' && window.document) {
            if (currentScrollPos > prevScrollPos && currentScrollPos - prevScrollPos > 10) {
                setShowNav(false);
            } else if ((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 10) || currentScrollPos < 10) {
                setShowNav(true);
            }
        }

        // set state to new scroll position
        setPrevScrollPos(currentScrollPos);
    };

    // // new useEffect:
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, [prevScrollPos, showNav]);

    const [screenSize, setScreenSize] = useState(getWindowWidth());

    function getWindowWidth() {
        return {
            windowWidth: window.innerWidth
        }
    }
    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getWindowWidth())
        }
        window.addEventListener('resize', updateDimension);

        if (screenSize.windowWidth >= 0) {
            document.body.style.overflow = 'unset';
        }

        return (() => {
            window.removeEventListener('resize', updateDimension);
        })
    }, [screenSize])

    return (
        <div className='header-container'>
            <header className={`header${showNav ? "" : "-hide"}`}>
                <nav id='nav'>
                    <NavLink to="/">
                        Work
                    </NavLink>
                    <NavLink to="/about">
                        About
                    </NavLink>
                    <NavLink to="/fun">
                        Fun
                    </NavLink>
                    <a className="menu-item" href="/resume.pdf" target="_blank"><h2 className='subtitle2'>Resume <Icon icon="radix-icons:open-in-new-window" style={{ fontSize: '13px' }} /></h2></a>
                </nav>
                {/* <MobileNav /> */}
            </header>
        </div >
    );
}
