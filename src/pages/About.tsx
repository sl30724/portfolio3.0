import { Icon } from "@iconify-icon/react";


export default function About() {

    return (
        <>
            <div className='bio'>
                <h2>Hi Again, Nice to Meet You!
                </h2>
                <div className='bio-header'>
                    <div className='bio-content'>
                        <p className="small">
                            I'm Sandy, a recent <span className='bio-highlights'>MS graduate in Creative Tech & Design</span> from CU Boulder, where I studied HCI and creative tech.

                            I think of myself as a creative problem solver and lifelong learner before designer & developer. I believe understanding "why" is the most important step in any project. I'm always curious about how things work and how to make them better. I'm a <span className='bio-highlights'>big picture thinker</span> who loves to <span className='bio-highlights'>connect the dots</span> and <span className='bio-highlights'>bridge the gap</span> between people and technology.
                        </p>
                        <p className="small">
                            I'm passionate about creating <span className='bio-highlights'>inclusive experiences</span> that are fun, engaging, and delightful. <span className='bio-highlights'>Data visualization</span>, <span className='bio-highlights'>3D</span>, and <span className='bio-highlights'>customer-facing SaaS tools</span> are some of my favorite things to work on.
                        </p>
                        <p className="small">
                            I'm also a <span className='bio-highlights'>travel enthusiast</span> (15 countries and counting), <span className='bio-highlights'>cat worshipper</span>, <span className='bio-highlights'>tea drinker</span>, and <span className='bio-highlights'>fitness lover</span>. Music and movies are essential. I explore many genres, but currently, I'm diving back in <span className='bio-highlights'>City Pop</span> as warmer days approach.
                        </p>
                        <p className="small">
                            <em><strong>Let's connect!
                                <br />
                                Drop me an email at <a href="mailto:work@sandylee.site"><span className='bio-email'>work@sandylee.site</span></a>
                            </strong></em>
                        </p>

                    </div>
                    <img src="/pics/girl-working.gif" alt="girl working animation" className='bio-gif' />
                </div>
                <div className="bio-socialmedia">
                    <a href="https://www.linkedin.com/in/meihsuan-lee/" target="_blank" rel="noopener noreferrer" title='LinkedIn Profile'><Icon icon="ri:linkedin-fill" style={{ fontSize: '26px' }} className='social-icon' label='LinkedIn icon' /></a>
                    <a href="https://www.behance.net/sandylee17" target="_blank" rel="noopener noreferrer" title='Behance Profile'><Icon icon="ion:logo-behance" style={{ fontSize: '26px' }} className='social-icon' label='Behance icon' /></a>
                    <a href="mailto:sl30724@google.com" title="Send an email"><Icon icon="material-symbols:mail" style={{ fontSize: '26px' }} className='social-icon' label='Mail icon' /></a>
                </div>
            </div>
        </>
    );
}