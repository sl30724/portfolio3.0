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
            <div className='projectOverview' id='cr-overview'>
                <img src="/pics/Craigslist.png" alt="Craigslist project cover" />
            </div>
            <div className='rows'>
                <div className='projectContentRow'>
                    <h4 className='gradientText'>Overview</h4>
                    <p>As the final project for the course “Human-Centered User Experience 2”, I undertook the challenge to reshape the Craigslist mobile app. Driven by the goals of simplifying complexities and addressing users' emotional needs, this project aims to tackle the pressing issue of waning trust in Craigslist due to safety concerns, improving and revitalizing the overall trading experience and environment on the Craigslist platform.</p>
                </div>
                <div className='projectContentRow'>
                    <h4 className='gradientText'>Problem</h4>
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
                <h4 className='gradientText'>Design Iterations: Home</h4>
                <p>The evolution of the new home page unfolded through three iterations. Rooted in the quest to optimize user interactions, the redesigned home page embraced a dual purpose: simplifying the intricate information architecture and minimizing user actions to discover desired categories.
                    <br />
                    <br />
                    <ul>
                        <li><span style={{ color: "var(--primary)", fontWeight: 500}}>Version 1:</span> included images within category components, intending to leverage visual cues for users' navigation.</li>
                        <li><span style={{ color: "var(--primary)", fontWeight: 500}}>Version 2:</span> focused on text-based elements, embracing the power of simplicity.</li>
                    </ul>
                    <br />
                    Guided by invaluable insights garnered from initial user testing of the first two versions, <span style={{ color: "var(--primary)", fontWeight: 500}}>Version 3</span> emerged. Building upon the foundation of Version 2, this iteration integrated the "popular categories in your area" feature. By providing social proof, this addition was intended to increase user engagement.
                </p>
                <div className='projectImg'>
                    <Zoom>
                        <img src="/pics/cr/Cr_ideations.png" alt="Design iterations: Home" />
                    </Zoom>
                    <p className='caption imgCaption'><Icon icon='mdi:arrow-drop-up' style={{ fontSize: '26px' }} /> Design Iterations: Home</p>
                </div>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>Final Design</h4>
                <div className='feature'>
                    <div className='projectImg'>
                        <Zoom>
                            <img src="/pics/cr/Cr_home.png" alt="Craigslist new home screen" />
                        </Zoom>
                        <p className='caption'>Craigslist New Home</p>
                    </div>
                    <div className='featureContent'>
                        <h5 className='gradientText'>Home</h5>
                        <p>Based on user feedbacks from the first two design iterations, I decided to go with the simplest one. I highlighted the search bar, organized subcategories with better color hierarchy, and added a new “Popular in Your Area” section to provide social proof and just the right amount of fun.</p>
                    </div>
                </div>
                <div className='feature' id='reverse'>
                    <div className='projectImg'>
                        <Zoom>
                            <img src="/pics/cr/Cr_searchNew.png" alt="Craigslist new search" />
                        </Zoom>
                        <p className='caption'>Craigslist New Search</p>
                    </div>
                    <div className='featureContent'>
                        <h5 className='gradientText'>Search</h5>
                        <p>The original search function has a messy task flow and a confusing information structure. I removed redundant tasks and added a fixed back button and search bar, also applied new design system to improve hierarchy.</p>
                    </div>
                </div>
                <div className='feature'>
                    <div className='projectImg'>
                        <Zoom>
                            <img src="/pics/cr/Cr_safetyMode.png" alt="Craigslist safety mode" />
                        </Zoom>
                        <p className='caption'>Craigslist Safety Mode</p>
                    </div>
                    <div className='featureContent'>
                        <h5 className='gradientText'>Safety Mode</h5>
                        <p>To improve users' feeling of safety, I decided to design an always-accessible safety mode icon that can be turn on and off. If turned on, the app will apply settings that improve members’ ability to be in control of their safety.</p>
                    </div>
                </div>
                <div className='feature' id='reverse'>
                    <div className='projectImg'>
                        <Zoom>
                            <img src="/pics/cr/Cr_message.png" alt="Craigslist in-app messages" />
                        </Zoom>
                        <p className='caption'>Craigslist In-App Messages</p>
                    </div>
                    <div className='featureContent'>
                        <h5 className='gradientText'>Craigslist In-App Messages</h5>
                        <p>A well-organized messaging system providing social proof and feedbacks.
                            It helps members learn more about whom they’re connecting with, stay on top of the conversations, and ease anxiety when it comes to reaching out to a stranger.</p>
                    </div>
                </div>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>Interactive Prototype</h4>
                <div className='projectImg'>
                    <Zoom>
                        <img src="/pics/cr/Cr_prototype.gif" alt="Craigslist prototype" />
                    </Zoom>
                    <p className='caption'>Craigslist prototype</p>
                </div>
                <p>To summarize, 14+ screens and 4+ features were redesigned and made for this project:
                    <br />
                    <br />
                    <ul>
                        <li>Home page with clearer information hierarchy.</li>
                        <li>Search function with fewer tasks and a clearer user flow.</li>
                        <li>Safety mode aimed to improve users' feelings of safety.</li>
                        <li>In-app message system that provides social proof and more information on the members users are interacting with.</li>
                    </ul>
                </p>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>Takeaways</h4>
                <div className='bulletPoints'>
                    <p className='subtitle gradientText'>Information Architecture: Less is more</p>
                    <p>Throughout my design iterations, the user feedback on the first few designs was still not satisfying. At the end, I learnt that less in more when designing for complex information architecture. By applying a great design system, typography and colors alone can help differentiate different sets of information.</p>
                </div>
                <div className='bulletPoints'>
                    <p className='subtitle gradientText'>User Retention: The right amount of fun</p>
                    <p>From initial user feedback, I learn that even when it looks good, it's not "fun" for users. Therefore, I implemented two features that provide some game elements in the app: the profile badges and the popular in your area section.</p>
                </div>
            </div>
            <div className='prevNext'>
                <Link className='subtitle' role="button" to="/work/whoami"><Icon icon='icon-park-outline:left' style={{ fontSize: '26px' }} />Whoami Today</Link>
                <Link className='subtitle' role="button" to="/work/voteally">Voteally <Icon icon='icon-park-outline:right' style={{ fontSize: '26px' }} /></Link>
            </div>
        </div>
    )
}