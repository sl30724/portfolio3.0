import '../styles/Project.css';
import '../styles/Zoom.css';
import Zoom from 'react-medium-image-zoom';

export default function Whoami() {

    return (
        <div className='content'>
            <div className='projectHeadline'>
                <h2 className='gradientText'>WhoAmi Today.</h2>
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
            <div className='projectImg'>
                <Zoom>
                    <img src="/pics/Whoami.png" alt="Whoami cover" />
                </Zoom>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>Overview</h4>
                <p>WhoAmi Today is a social media app designed to promote adolescent self-disclosure and wellbeing.
                    Inspired by a research project at DUB lab, University of Washington, WhoAmi believes that being able to self-disclose instead of self-present is the key for adolescents to improve relationship quality between peers, allows for identity exploration and development, and improves well-being of adolescents.
                    <br />
                    <br />
                    I joined WhoAmi Today as the second designer on the design team. I work closely with seven developers and two product managers. My job includes establishing and expanding desgin systems, defining features based on research findings, making lofi and hifi wireframes, improving the user flow, and creating interaction design. We're aiming to launch the first version of Whoami by the end of August. Please come back then to check out more project details.
                </p>
            </div>
        </div>
    )
}