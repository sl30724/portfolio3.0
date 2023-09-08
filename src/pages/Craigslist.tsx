import '../styles/Project.css';
import '../styles/Zoom.css';
import Zoom from 'react-medium-image-zoom';
import { Icon } from '@iconify-icon/react';
import { Link } from "react-router-dom";
import CollapseCom from '../components/CollapseCom';

export default function Craigslist() {

    return (
        <div className='content'>
            <div className='projectHeadline'>
                <h2 className='gradientText'>Craigslist.</h2>
                <p className='subtitle projectHmw'>How might we address users’ feelings and concerns while navigating through a complex information architecture?</p>
                <div className='projectIntro'>
                    <div className='innerProjectIntro'>
                        <p className='overline'>timeline</p>
                        <p className='small'>2022 Sep – Nov</p>
                    </div>
                    <div className='innerProjectIntro'>
                        <p className='overline'>team</p>
                        <ul className='small'>
                            <li>Sandy Lee</li>
                        </ul>
                    </div>
                    <div className='innerProjectIntro'>
                        <p className='overline'>scope</p>
                        <ul className='small'>
                            <li>Product Design</li>
                            <li>Design System</li>
                            <li>UX Research</li>
                            <li>UX Design</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='projectOverview' id='cr_overview'>
                <img src="/pics/Craigslist.png" alt="Craigslist project cover" />
            </div>
            <div className='rows'>
                <div className='projectContentRow'>
                    <h4 className='gradientText'>Overview</h4>
                    <p>As the final project for the course “Human-Centered User Experience 2”, I undertook the challenge to reshape the Craigslist mobile app. Driven by the goals of simplifying complexities and addressing users' emotional needs, this project aims to tackle the pressing issue of waning trust in Craigslist due to safety concerns, improving and revitalizing the overall trading experience and environment on the Craigslist platform.</p>
                </div>
                <div className='projectContentRow'>
                    <h4 className='gradientText'>Initial Problem</h4>
                    <p>To kickstart the project, I confronted a pivotal assumption: despite Craigslist's reputation for simplicity, it has faced a decline in appeal due to safety concerns and a lack of intuitive design compared to its competitors. How can we effectively address user concerns and create an intuitive experience within the framework of a complex information architecture?</p>
                </div>
                <div className='projectContentRow'>
                    <h4 className='gradientText'>Results</h4>
                    <p>
                        <ul>
                            <li><span style={{ color: "var(--primary)", fontWeight: 500, fontStyle: "italic" }}>66%</span> of testing users said they would <span style={{ color: "var(--primary)", fontWeight: 500, fontStyle: "italic" }}>trade more</span> with the redesign.</li>
                            <li><span style={{ color: "var(--primary)", fontWeight: 500, fontStyle: "italic" }}>80%</span> of testing users <span style={{ color: "var(--primary)", fontWeight: 500, fontStyle: "italic" }}>felt safer</span> with the new functions.</li>
                            <li><span style={{ color: "var(--primary)", fontWeight: 500, fontStyle: "italic" }}>100%</span> of testing users said the redesign is <span style={{ color: "var(--primary)", fontWeight: 500, fontStyle: "italic" }}>easier</span> to navigate.</li>
                        </ul></p>
                </div>
            </div>
            <div className='projectImg'>
                <video autoPlay muted loop>
                    <source src="/vids/cr_oldNew.mp4" type="video/mp4" />
                </video>
            </div>
            <CollapseCom>
                <div className='projectContent'>
                    <h4 className='gradientText'>Focusing on Users</h4>
                    <p>Embracing a user-centered approach, I crafted a compelling User Persona and a thorough Emotional Journey Map. These strategic tools crystallized users' motivations, concerns, feelings, and goals, guiding me in identifying pain points and opportunities for transformation.</p>
                    <div className='imgGallery'>
                        <div className='projectImg' id='cr-persona'>
                            <Zoom>
                                <img src="/pics/cr/Cr_userPersona.png" alt="Craigslist User Persona" />
                            </Zoom>
                            <p className='imgCaption caption'><Icon icon='mdi:arrow-drop-up' style={{ fontSize: '26px' }} /> User Persona</p>
                        </div>
                        <div className='projectImg' id='cr-journey'>
                            <Zoom>
                                <img src="/pics/cr/Cr_userMap.png" alt="Craigslist user journey map" />
                            </Zoom>
                            <p className='imgCaption caption'><Icon icon='mdi:arrow-drop-up' style={{ fontSize: '26px' }} /> User Emotional Journey</p>
                        </div>
                    </div>
                </div>
                <div className='projectContent'>
                    <h4 className='gradientText'>Designing for Purpose</h4>
                    <p>With a clearer view of users' experiences, I distilled the Job to Be Done, a concise guiding principle steering the project. This served as a compass, ensuring that every design decision would harmoniously align with the overarching objective.</p>
                    <div className='projectImg'>
                        <Zoom>
                            <img src="/pics/cr/Cr_jtbd.png" alt="Craigslist job to be done" />
                        </Zoom>
                        <p className='imgCaption caption'><Icon icon='mdi:arrow-drop-up' style={{ fontSize: '26px' }} /> Job To Be Done</p>
                    </div>
                </div>
                <div className='projectContent'>
                    <h4 className='gradientText'>Crafting the Solution</h4>
                    <p>With purpose as my guide, I mapped out an enhanced User Journey. Enriched with redesigned elements and new features that aligned with users' needs, this map showcased how each innovation contributed to a more enriched and satisfying experience.
                        <br />
                        <br />Moreover, I crafted design strategies for each function based on psychological principles, ensuring each feature resonated on a psychological level. This not only bolstered usability but also engaged users on a deeper level.
                    </p>
                    <div className='imgGallery'>
                        <div className='projectImg' id='cr-improvedMap'>
                            <Zoom>
                                <img src="/pics/cr/Cr_improvedMap.png" alt="Craigslist improved user journey map" />
                            </Zoom>
                            <p className='imgCaption caption'><Icon icon='mdi:arrow-drop-up' style={{ fontSize: '26px' }} /> Improved Journey Map</p>
                        </div>
                        <div className='projectImg' id='cr-strategies'>
                            <Zoom>
                                <img src="/pics/cr/Cr_featureDetails.png" alt="Craigslist feature details" />
                            </Zoom>
                            <p className='imgCaption caption'><Icon icon='mdi:arrow-drop-up' style={{ fontSize: '26px' }} /> Design Strategies</p>
                        </div>
                    </div>
                </div>
            </CollapseCom>
            <div className='projectContent'>
                <h4 className='gradientText'>Evolving Design System</h4>
                <p>Respecting the familiarity of Craigslist's design identity, I carefully expanded the Design System. This gentle transformation encompassed expanding font sets and color systems, ensuring a fresh but recognizable visual narrative.
                </p>
                <div className='projectImg'>
                    <Zoom>
                        <img src="/pics/cr/Cr_designSystem.png" alt="Craigslist improved design system" />
                    </Zoom>
                    <p className='imgCaption caption'><Icon icon='mdi:arrow-drop-up' style={{ fontSize: '26px' }} /> Evolved Design System</p>
                </div>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>Ideations for Home</h4>
                <p>The evolution of the new home page unfolded through three iterations. Rooted in the quest to optimize user interactions, the redesigned home page embraced a dual purpose: simplifying the intricate information architecture and minimizing user actions to discover desired categories.
                    <br />
                    <br />
                    <ul>
                        <li><span style={{ color: "var(--primary)", fontWeight: 500 }}>Version 1:</span> included images within category components, intending to leverage visual cues for users' navigation.</li>
                        <li><span style={{ color: "var(--primary)", fontWeight: 500 }}>Version 2:</span> focused on text-based elements, embracing the power of simplicity.</li>
                    </ul>
                    <br />
                    Guided by invaluable insights garnered from initial user testing of the first two versions, <span style={{ color: "var(--primary)", fontWeight: 500 }}>Version 3</span> emerged. Building upon the foundation of Version 2, this iteration integrated the "popular categories in your area" feature. By providing social proof, this addition was intended to increase user engagement.
                </p>
                <div className='projectImg'>
                    <Zoom>
                        <img src="/pics/cr/Cr_ideations.png" alt="Ideations: Home" />
                    </Zoom>
                    <p className='caption imgCaption'><Icon icon='mdi:arrow-drop-up' style={{ fontSize: '26px' }} /> Design Iterations: Home</p>
                </div>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>User Feedback Validation</h4>
                <p>After creating the lo-fi wireframes, I conducted feedback sessions with five individuals who had actively used the Craigslist mobile app within the past year. Their insights and perspectives played a pivotal role in refining the lo-fi wireframes and ultimately shaping the final design.
                </p>
                <div className='projectImg'>
                    <Zoom>
                        <img src="/pics/cr/Cr_userFeedback.png" alt="user feedback" />
                    </Zoom>
                    <p className='caption imgCaption'><Icon icon='mdi:arrow-drop-up' style={{ fontSize: '26px' }} />Initial User Feedback</p>
                </div>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>Final Design</h4>
                <p>Based on valuable user research insights and user feedback, I designed 13+ screens for 4 key features, including the revamped Home page, streamlined Search function, innovative Safety Mode, and user-friendly In-App Messages system, crafting a seamless and resonant user experience.</p>
            </div>
            <div className='projectContent'>
                <div className='feature'>
                    <div className='projectImg'>
                        <video autoPlay muted loop>
                            <source src="/vids/cr_home.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className='featureContent'>
                        <h5 className='gradientText'>Revamped Home Page</h5>
                        <p>
                            <ul>
                                <li><span style={{ color: "var(--primary)", fontWeight: 500 }}>Highlighted Search Bar:</span> drew users' attention to the most used function in Craigslist.</li>
                                <li><span style={{ color: "var(--primary)", fontWeight: 500 }}>Two-way Scrolling Categories:</span> reduced the number of user actions needed to find the desired categories.</li>
                                <li><span style={{ color: "var(--primary)", fontWeight: 500 }}>Popular in Your Area:</span> presented social proof and just the right amount of fun.</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className='feature' id='reverse'>
                    <div className='projectImg'>
                        <video autoPlay muted loop>
                            <source src="/vids/cr_search.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className='featureContent'>
                        <h5 className='gradientText'>Streamlined Search</h5>
                        <p>
                            <ul>
                                <li><span style={{ color: "var(--primary)", fontWeight: 500 }}>Navigational Back Button:</span> provided users with the reassuarance that they can easily go back and correct errors.</li>
                                <li><span style={{ color: "var(--primary)", fontWeight: 500 }}>Constantly Visible Search Bar:</span> increased accessibility, efficiency, and consistency throughout users' search journey.</li>
                                <li><span style={{ color: "var(--primary)", fontWeight: 500 }}>Applying Design System:</span> included color depth and typography system to create a clearer information structure.</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className='feature'>
                    <div className='projectImg'>
                        <video autoPlay muted loop>
                            <source src="/vids/cr_safetyMode.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className='featureContent'>
                        <h5 className='gradientText'>Innovative Safety Mode</h5>
                        <p>
                            <ul>
                                <li><span style={{ color: "var(--primary)", fontWeight: 500 }}>Fixed Floating Button:</span> allowed users to turn on and off safety mode anytime.</li>
                                <li><span style={{ color: "var(--primary)", fontWeight: 500 }}>Safety-first Settings:</span> empowered users with system settings that prioritize safety, including on-site messages only and public meeting place suggestions.</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className='feature' id='reverse'>
                    <div className='projectImg'>
                        <video autoPlay muted loop>
                            <source src="/vids/cr_message.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className='featureContent'>
                        <h5 className='gradientText'>User-friendly Message System</h5>
                        <p>
                            <ul>
                                <li><span style={{ color: "var(--primary)", fontWeight: 500 }}>Categorized Conversations:</span> streamlined users' navigation within a complex message system with various use cases, including buying, selling, and unread.</li>
                                <li><span style={{ color: "var(--primary)", fontWeight: 500 }}>Premade message templates:</span> increased users' confidence by lowering the effort and time to compose the first message.</li>
                                <li><span style={{ color: "var(--primary)", fontWeight: 500 }}>Verified User Profile:</span> boosted trust between members with user name, verified status, badges of accomplishments, and last online time.</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
            <div className='projectImg'>
                        <img src="/pics/cr/Cr_new.png" alt="Final designs" />
                </div>
            <div className='projectContent'>
                <h4 className='gradientText'>Takeaways</h4>
                <div className='bulletPoints'>
                    <p className='subtitle gradientText'>Streamlined Information Architecture with Simplicity</p>
                    <p>Over the course of design iterations, it became evident that simplicity is key when dealing with complex information architecture. By implementing a robust design system, leveraging typography, and employing strategic color usage, it's possible to effectively distinguish various sets of information, ensuring clarity and user-friendliness.</p>
                </div>
                <div className='bulletPoints'>
                    <p className='subtitle gradientText'>Enhanced User Retention and Engagement</p>
                    <p>Initial user feedback revealed that aesthetics alone don't guarantee an enjoyable experience. Hence, I introduced two engaging elements into the app—profile badges and the "popular in your area" section—infusing elements of gamification to enhance user retention and keep the platform both visually appealing and entertaining.</p>
                </div>
            </div>
            <div className='prevNext'>
                <Link className='subtitle' role="button" to="/work/whoami"><Icon icon='icon-park-outline:left' style={{ fontSize: '26px' }} />Whoami Today</Link>
                <Link className='subtitle' role="button" to="/work/innaorganic">Inna Organic <Icon icon='icon-park-outline:right' style={{ fontSize: '26px' }} /></Link>
            </div>
        </div>
    )
}