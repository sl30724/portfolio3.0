import { Icon } from "@iconify-icon/react";

export default function About() {

    return (
        <>
        <div className="background">
        </div>
        <div className="content">
            <div className='headline' id="center">
                <h1 className='gradientText'>I'm Sandy.</h1>
            </div>
            <div className="bio">
                <div className="bioPic">
                    <img src="/pics/Profile.png" alt="Sandy Lee" />
                </div>
                <div className="bioText">
                    <h3 className="gradientText">I’m a product designer.</h3>
                    <p>Over the past 3+ years, I’ve worked in various areas of digital design, including front-end development, marketing, web and app UI/UX, and UX research. I’m honored to have worn many hats.
                        <br />
                        <br />
                        After receiving my MS in Human-Computer Interaction, I’ve been helping <a href='https://dub.washington.edu/' target='blank' rel='noreferrer'>the DUB lab at University of Washington</a> envision the cross-cutting design approaches to facilitate adolescent well-being and identity exploration on social media as a UX Researcher & Designer.
                        <br />
                        <br />
                        Interested in learning more about my experiences?
                        <br />
                        <a href="/resume.pdf" target="_blank">Read my resume here <Icon icon="radix-icons:open-in-new-window" style={{ fontSize: '13px' }} /></a>
                    </p>
                </div>
            </div>
            <div className="innerContent">
                <div className="headline">
                    <h3 className="gradientText">My Definition of Good designs</h3>
                    <p>Designs make the world more beautiful, but good designs go beyond.</p>
                </div>
                <div className="grid" id="designGrid">
                    <div className="gridItem">
                        <div className="itemTitle">
                            <h5 className="gradientText">01</h5>
                            <h4>Find The Right Problem</h4>
                        </div>
                        <p>Research and design thinking provide me with new insights about the problem at hand. With these insights, a redefinition/reframe of the problem is often necessary. This ensures the team is not wasting time designing for the wrong problem.</p>
                    </div>
                    <div className="gridItem">
                        <div className="itemTitle">
                            <h5 className="gradientText">02</h5>
                            <h4>Solve The Problem Right</h4>
                        </div>
                        <p>Defining clear goals while considering feasibility and constraints associated with the project is crucial for an effective design process. From there, ideation and concept development can sprout with boundless creativity but with a clear direction.</p>
                    </div>
                    <div className="gridItem">
                        <div className="itemTitle">
                            <h5 className="gradientText">03</h5>
                            <h4>Execute & Collaborate</h4>
                        </div>
                        <p>I create user maps, wireframes, interaction designs, and prototypes to validate ideas, ensure usability, and yield aesthetics; but good designs should always encourage feedback in a collaborative design process that include various stakeholders.</p>
                    </div>
                    <div className="gridItem">
                        <div className="itemTitle">
                            <h5 className="gradientText">04</h5>
                            <h4>Keep Experimenting</h4>
                        </div>
                        <p>Good designs constantly change for good reasons. By evaluating the results with user tests, feedback, market insights, and data; I make necessary adjustments to current designs and collect insights for future design iterations.</p>
                    </div>
                </div>
            </div>
            <div className="innerContent">
                <div className="headline">
                    <h3 className="gradientText">What I Do Outside of Work</h3>
                    <p>I'm a travel enthusiast, cat worshipper, tea drinker, and fitness lover. Music and movies are essential to my life. I explore many music genres, from 70s Jazz to Reggaeton. Currently, I'm diving back in 80s City Pop as warmer days approach.</p>
                </div>
                <div className="grid" id="interestGrid">
                    <div className="interestPic">
                        <img src="/pics/travel.png" alt="Tokyo" />
                    </div>
                    <div className="interestPic">
                        <img src="/pics/jungle.png" alt="Panama" />
                    </div>
                    <div className="interestPic">
                        <img src="/pics/desert.png" alt="Utah" />
                    </div>
                    <div className="interestPic">
                        <img src="/pics/skiing.png" alt="Colorado" />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}