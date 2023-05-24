import { useState } from 'react';
import { Icon } from '@iconify-icon/react';
import { Link } from 'react-scroll';
import { Slant as Hamburger } from 'hamburger-react';

// navigation bar component
export default function MobileNav() {
    const [navOpen, setNavOpen] = useState<boolean>(false);
    const toggleMenu = () => {

    }

    return (
        <>
            <div className='hamburger'>
                <Hamburger
                    label="Menu toggle button"
                    rounded size={32}
                    distance="md"
                    direction="left"
                    toggled={navOpen}
                    toggle={setNavOpen}
                    />
            </div>
            <div className={`menuLayer-${navOpen ? "shown" : "hidden"}`}>
                <Link tabIndex={2} className="menu-item mobile-menu-item" activeClass="active-menu-item" to='Intro' spy={true} smooth={true} duration={500}><h2 className='subtitle2'>Intro</h2></Link>
                <Link tabIndex={3} className="menu-item mobile-menu-item" activeClass="active-menu-item" to='Projects' spy={true} smooth={true} duration={500}><h2 className='subtitle2'>Projects</h2></Link>
                <Link tabIndex={4} className="menu-item mobile-menu-item" activeClass="active-menu-item" to='Bio' spy={true} smooth={true} duration={500}><h2 className='subtitle2'>About</h2></Link>
                <a className="menu-item mobile-menu-item" href="/resume.pdf" target="_blank"><h2 className='subtitle2'>Resume <Icon icon="radix-icons:open-in-new-window" style={{ fontSize: '13px' }} /></h2></a>
            </div>
        </>
    );
}