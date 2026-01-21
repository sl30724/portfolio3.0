import { Icon } from '@iconify-icon/react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [showNav, setShowNav] = useState(true);

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
            <header className={`header${showNav ? "" : "-hide"}`}>
                <nav id='nav'>
                    <NavLink to="/" className={"subtitle navLink"}>
                        Work
                    </NavLink>
                    <NavLink to="/about" className={"subtitle navLink"}>
                        About
                    </NavLink>
                    <NavLink to="/fun" className={"subtitle navLink"}>
                        Fun
                    </NavLink>
                    <a className="subtitle navLink" href="/Sandy_Lee_resume.pdf" target="_blank">Resume <Icon icon="radix-icons:open-in-new-window" style={{ fontSize: '13px' }} /></a>
                </nav>
                {/* <MobileNav /> */}
            </header>
    );
}
