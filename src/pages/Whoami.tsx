import '../styles/Project.css';
import '../styles/Zoom.css';
import Zoom from 'react-medium-image-zoom';
import { Icon } from '@iconify-icon/react';
import { Link } from "react-router-dom";

export default function Whoami() {

    return (
        <div className='content'>
            <div className='projectHeadline'>
                <h2 className='gradientText'>WhoAmi Today.</h2>
                <p className='subtitle projectHmw'>How might we create a social media that encourages teenagers to forge deeper friendships with their authentic selves?</p>
                <div className='projectIntro'>
                    <div className='innerProjectIntro'>
                        <p className='overline'>timeline</p>
                        <p className='small'>2023 May – current</p>
                    </div>
                    <div className='innerProjectIntro'>
                        <p className='overline'>team</p>
                        <ul className='small'>
                            <li>Jaewon Kim</li>
                            <li>Kyungji Nam</li>
                            <li>Ramya Subramanian</li>
                            <li>...</li>
                        </ul>
                    </div>
                    <div className='innerProjectIntro'>
                        <p className='overline'>role</p>
                        <ul className='small'>
                            <li>Product Design</li>
                            <li>UX Research</li>
                            <li>UX Design</li>
                            <li>Interaction Design</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>Overview</h4>
                <p>WhoAmi Today is a social media app designed to promote adolescent self-disclosure and wellbeing.
                    Inspired by a research project at DUB lab, University of Washington, WhoAmi believes that being able to self-disclose instead of self-present is the key for adolescents to improve relationship quality between peers, allows for identity exploration and development, and improves well-being of adolescents.
                    <br />
                    <br />
                    I joined WhoAmi Today as the second designer on the design team. I work closely with seven developers and two product managers. My job includes establishing and expanding desgin systems, defining features based on research insights, making lofi and hifi wireframes, improving the user flow, and creating interaction design. We're aiming to launch the first version of Whoami by the end of August. Please come back then to check out more project details.
                </p>
            </div>
            <div className='projectImg' id='whoami_cover'>
                <Zoom>
                    <img src="/pics/who/Who_cover.png" alt="Whoami cover" />
                </Zoom>
            </div>
            <div className='prevNext'>
            <Link className='subtitle' role="button" to="/work/Sbs"><Icon icon='icon-park-outline:left' style={{ fontSize: '26px' }}/>Accessibility for SBS</Link>
            <Link className='subtitle' role="button" to="/work/craigslist">Craigslist <Icon icon='icon-park-outline:right' style={{ fontSize: '26px' }}/></Link>
            </div>
        </div>
    )
}