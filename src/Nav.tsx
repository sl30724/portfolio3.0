import { Link } from 'react-scroll';
import { Icon } from '@iconify-icon/react';
import { useState, useEffect } from 'react';
import MobileNav from './MobileNav';
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
            <header className={`header${showNav?"":"-hide"}`}>
                <Link tabIndex={1} to="Intro" spy={true} smooth={true} duration={500} aria-label='Home'><img src="/Portfolio_logo.png" alt="Personal logo" width="40" height="40" id='logo' /></Link>
                {/* <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} right width={"260px"} customBurgerIcon={<Icon icon="ic:round-menu" />} customCrossIcon={<Icon icon="ic:round-close" />} crossButtonClassName={"my-cross"}> */}
                <div className='menu'>
                    <Link tabIndex={2} className="menu-item" activeClass="active-menu-item" to='Intro' spy={true} smooth={true} duration={500}><h2 className='subtitle2'>Intro</h2></Link>
                    <Link tabIndex={3} className="menu-item" activeClass="active-menu-item" to='Projects' spy={true} smooth={true} duration={500}><h2 className='subtitle2'>Projects</h2></Link>
                    <Link tabIndex={4} className="menu-item" activeClass="active-menu-item" to='Bio' spy={true} smooth={true} duration={500}><h2 className='subtitle2'>About</h2></Link>
                    <a className="menu-item" href="/resume.pdf" target="_blank"><h2 className='subtitle2'>Resume <Icon icon="radix-icons:open-in-new-window" style={{ fontSize: '13px' }} /></h2></a>
                </div>
                <MobileNav />
                {/* <p className="caption" id='menu-footer'>Crafted by Sandy Lee @2023</p> */}
                {/* </Menu> */}
                {/* <DarkMode></DarkMode> */}
            </header>
        </div>
    );
}
