import '../styles/Project.css';
import '../styles/Zoom.css';
import Zoom from 'react-medium-image-zoom';

export default function Craigslist() {

    return (
        <div className='content'>
            <div className='projectHeadline'>
                <h2 className='gradientText'>Craigslist.</h2>
                <div className='projectIntro'>
                    <div className='innerProjectIntro'>
                        <p className='overline'>timeline</p>
                        <p className='small'>2022 Sep – 2022 Nov</p>
                    </div>
                    <div className='innerProjectIntro'>
                        <p className='overline'>team</p>
                        <ul className='small'>
                            <li>Personal Project</li>
                        </ul>
                    </div>
                    <div className='innerProjectIntro'>
                        <p className='overline'>role</p>
                        <ul className='small'>
                            <li>Product Design</li>
                            <li>Design System</li>
                            <li>UX Research</li>
                            <li>UX Design</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='projectImg'>
                <Zoom>
                    <img src="/pics/cr/Cr_cover.png" alt="Voteally mobile screens" />
                </Zoom>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>Overview</h4>
                <p>This is a personal project to redesign the Craigslist mobile app. I was drawn to the idea of redesigning Craigslist because I wanted to challenge myself on simplifying complexities while addressing users’ concerns and emotions at the same time.</p>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>Assumptions</h4>
                <div className='jtbd'>
                    <h2>"</h2>
                    <p className='subtitle'>Craigslist Is Sketchy. But It Can Change.</p>
                    <h2>"</h2>
                </div>
                <p>With all the other options to trade second-hand goods and services on the market, people don’t trade on Craigslist anymore because it feels unsafe and unreliable.
                    How can we make Craigslist safe & modern again, while keeping the same simplicity that people like and associate Craigslist with?</p>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>User Persona</h4>
                <div className='projectImg'>
                    <Zoom>
                        <img src="/pics/cr/Cr_userPersona.png" alt="Craigslist User Persona" />
                    </Zoom>
                    <p className='caption'>Craigslist's user persona</p>
                </div>
                <p>To understand Craigslist users better, I created a persona to understand their motivations, concerns, feelings, and goals when they’re using Craigslist to gain actionable insights.</p>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>User Journey</h4>
                <div className='projectImg'>
                    <Zoom>
                        <img src="/pics/cr/Cr_userMap.png" alt="Craigslist user journey map" />
                    </Zoom>
                    <p className='caption'>Craigslist's original user journey map</p>
                </div>
                <p>I decided an emotional journey map would be suitable for this project since it’s closely related to the user’s feelings. This map helped me understand where and when the frustration happens throughout the existing Craigslist experience.</p>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>Job to Be Done</h4>
                <div className='projectImg'>
                    <Zoom>
                        <img src="/pics/cr/Cr_jtbd.png" alt="Craigslist job to be done" />
                    </Zoom>
                </div>
                <p>Based on the user persona and emotional journey map, I defined the job to be done to identify the goal of this project. It also helps me plan out what features to improve or implement, and what purpose they serve.</p>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>Improved User Journey</h4>
                <div className='projectImg'>
                    <Zoom>
                        <img src="/pics/cr/Cr_improvedMap.png" alt="Craigslist improved user journey map" />
                    </Zoom>
                    <p className='caption'>Craigslist improved user journey map</p>
                </div>
                <p>I made an improved user journey map to help me envision what an ideal emotional journey would look like with the new and improved features by marking down when and how these three features would improve the original journey map.
                </p>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>Defining features</h4>
                <div className='projectImg'>
                    <Zoom>
                        <img src="/pics/cr/Cr_featureDetails.png" alt="Craigslist feature details" />
                    </Zoom>
                    <p className='caption'>Craigslist feature details</p>
                </div>
                <p>I used mental notes to look back on and connect each feature to psychology aspects. This helped me define the details of each feature I intend on designing. I chose three mental notes for each feature, and put down the design strategies I can use to achieve them.
                </p>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>Design System</h4>
                <div className='projectImg'>
                    <Zoom>
                        <img src="/pics/cr/Cr_designSystem.png" alt="Craigslist improved design system" />
                    </Zoom>
                    <p className='caption'>Craigslist improved design system</p>
                </div>
                <p>Craigslist has a familiar simplicity people already associate with. Without drastically changing the design system, users now will have a better experience exploring the world of Craigslist with an expanded font set and color system.
                </p>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>Features</h4>
                <div className='feature'>
                        <div className='projectImg'>
                            <Zoom>
                                <img src="/pics/cr/Cr_homeOldNew.png" alt="Craigslist old home vs new home" />
                            </Zoom>
                            <p className='caption'>Craigslist Old Home vs New Home</p>
                        </div>
                    <div className='featureContent'>
                        <h5 className='gradientText'>Home</h5>
                        <p>After two design iterations, I eventually decided to go with the simplest one. I highlighted the search bar, organized subcategories with better color hierarchy, and added a new “Popular in Your Area” section to provide social proof and just the right amount of fun.</p>
                    </div>
                </div>
                <div className='feature' id='reverse'>
                    <div className='projectImg'>
                        <Zoom>
                            <img src="/pics/cr/Cr_searchOld.png" alt="Craigslist original search" />
                        </Zoom>
                        <Zoom>
                            <img src="/pics/cr/Cr_searchNew.png" alt="Craigslist new search" />
                        </Zoom>
                        <p className='caption'>Craigslist Old Search vs New Search</p>
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
        </div>
    )
}