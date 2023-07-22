import '../styles/Project.css';
import '../styles/Zoom.css';
import Zoom from 'react-medium-image-zoom';

export default function Sbs() {

    return (
        <div className='content'>
            <div className='projectHeadline'>
                <h2 className='gradientText'>Street Business School.</h2>
                <div className='projectIntro'>
                    <div className='innerProjectIntro'>
                        <p className='overline'>timeline</p>
                        <p className='small'>2023 Mar - 2023 May</p>
                    </div>
                    <div className='innerProjectIntro'>
                        <p className='overline'>team</p>
                        <ul className='small'>
                            <li>Mirna Masai</li>
                            <li>Rodrigo Moleiro</li>
                        </ul>
                    </div>
                    <div className='innerProjectIntro'>
                        <p className='overline'>role</p>
                        <ul className='small'>
                            <li>UX Research</li>
                            <li>Accessibility Research</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='projectImg'>
                <Zoom>
                    <img src="/pics/sbs/SBS_full.png" alt="Street Business School's old site" />
                </Zoom>
                <p className='caption'>Street Business School's Old Site</p>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>Overview</h4>
                <p>Street Business School(SBS) is a global nonprofit on the mission to end global poverty by empowering women to become thriving entrepreneurs. Their main service is providing their grassroots partner organizations with their livelihood training curriculum to localize and implement the training in their communities through a train-the-trainer model.
                    <br />
                    <br />
                    As SBS enters a new phase of growth, they need a new website to better reflect their organizational sophistication, improve user experiences for everyone, and refine their messaging and product offering. My team and I joined the SBS’s website revamp project to help identify the current accessibility issues and provide actionable research insights for the new design.</p>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>Research Plan</h4>
                <div className='projectImg'>
                    <Zoom>
                        <img src="/pics/sbs/SBS_researchPlan.png" alt="Street Business School's research plan" />
                    </Zoom>
                </div>
                <p>Due to the limited timeframe, we had to give up on user interviews. Instead, we came up with a strategized research plan to address the business’s goals without user interviews.</p>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>Problems</h4>
                <div className='projectImg'>
                    <Zoom>
                        <img src="/pics/sbs/SBS_problems.png" alt="Street Business School's problems" />
                    </Zoom>
                </div>
                <p>After the stakeholder interview with SBS, together we identified these four main pain points of the current website. With the initial user insights, we also agreed on prioritizing accessibility improvement and responsive mobile design since the majority of audience accesses the site on mobile devices and sometimes with poor internet connection. We chose to prioritize accessibility instead of usability not only because it allows people with situational constraints or disabilities to access to the same information and services that are available to everyone, but it also ensures usability an a bigger, more inclusive scale.</p>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>Job To Be Done</h4>
                <div className='jtbd'>
                    <h2>"</h2>
                    <p className='subtitle'>How can we clearly deliver the information about SBS’s main services to all our audiences on any devices?</p>
                    <h2>"</h2>
                </div>
                <p>I defined the “job to be done” to help the team and the designers visualize the project goals and to recognize the design aspects that need to be prioritized in this project: information structure, accessibility, and responsive design.</p>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>User Persona</h4>
                <div className='projectImg'>
                    <div className='imgGallery'>
                        {/* <a href="https://drive.google.com/file/d/10K8Ty0HjT21H_Ne-0ezWmIRxEw6n2byh/view?usp=sharing" target='blank' rel='noreferrer' title='Accessibility Heuristic Report Google Doc'> */}
                        <Zoom>
                            <img src="/pics/sbs/SBS_persona1.png" alt="Street Business School's persona 1" />
                        </Zoom>
                        {/* <a href="https://drive.google.com/file/d/10K8Ty0HjT21H_Ne-0ezWmIRxEw6n2byh/view?usp=sharing" target='blank' rel='noreferrer' title='Accessibility Heuristic Report Google Doc'> */}
                        <Zoom>
                            <img src="/pics/sbs/SBS_persona2.png" alt="Street Business School's persona 2" />
                        </Zoom>
                    </div>
                    <p className='caption'>User personas</p>
                </div>
                <p>From analyzing the initial user insights provided by SBS, we categorized the audience of SBS into two groups: Donors and Potential Partner Organizations. I created a detailed user persona for each audience to gain actionable user insights and understand user needs. To better incorporate accessibility in the design, they are both people with disabilities. Below is the definition of the two main audiences:
                    <br />
                    <ul>
                        <li>Donors: individuals, as well as foundations & institutional donors.</li>
                        <li>Potential Partner Organizations: These might be small, grassroots nonprofits, or larger international NGOs like UNESCO.</li>
                    </ul>
                </p>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>Cognitive Walkthrough</h4>
                <div className='projectImg'>

                    <Zoom>
                        <img src="/pics/sbs/SBS_cognitive.png" alt="Street Business School's cognitive walkthrough" />
                    </Zoom>
                    <p className='caption'>Cognitive walkthrough report screenshot</p>
                </div>
                <p>Based on the user personas, I created a cognitive walkthrough to help us validate the current pain points through a contextual user journey. This report was proven to be helpful as the designers often looked back on it when they ran into design dilemmas.
                    <a href="https://docs.google.com/document/d/1wr3iAKCiJXL7h3YEtCoZpBReFU4pVTzY/edit?usp=sharing&ouid=105676544771406196183&rtpof=true&sd=true" target='blank' rel='noreferrer' title='Cognitive Walkthrough Google Doc'>
                        View document in Google drive here
                    </a>.
                </p>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>Accessibility Heuristic</h4>
                <div className='projectImg'>
                    <Zoom>
                        <img src="/pics/sbs/SBS_accessibility.png" alt="Street Business School's accessibility heuristic" />
                    </Zoom>
                    <p className='caption'>Accessibility heuristic report screenshot (click to view in Google Doc)</p>
                </div>
                <p>To improve accessibility and develop cohesive messaging on the site, my team and I created an accessibility heuristic to lay out all the components that need to be redesigned and built to meet the WCAG2.0 AA standards, along with the potential approaches the designers and dev team can take to improve them.
                    <a href="https://docs.google.com/document/d/1kH-t2ZiaCzWC61xbzCZS63Tnje-lVTIT/edit?usp=sharing&ouid=105676544771406196183&rtpof=true&sd=true" target='blank' rel='noreferrer' title='Accessibility Heuristic Report Google Doc'>
                    View document in Google drive here
                    </a>.
                </p>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>Refined Site Map</h4>
                <div className='projectImg'>
                        {/* <a href="https://drive.google.com/file/d/10K8Ty0HjT21H_Ne-0ezWmIRxEw6n2byh/view?usp=sharing" target='blank' rel='noreferrer' title='Accessibility Heuristic Report Google Doc'> */}
                        <Zoom>
                            <img src="/pics/sbs/SBS_sitemaps.png" alt="Street Business School's old site map and new site map" />
                        </Zoom>
                    <p className='caption'>Old site map vs new site map</p>
                </div>
                <p>Leveraging the research findings, I proposed a new site map to reduce unintentional friction in the current user journey and to simplify the information architecture of the new website.</p>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>Takeaways</h4>
                <p>Unfortunately, the website revamp project was put ahold due to lack of budget. However, these research findings have been proven necessary in the beginning stage of design as the designers often referred to our synthesized findings in their design process. Nevertheless, if I were to redo the project again, here are things I would like to do differently.
                    <br />
                    <br />
                    <ul>
                        <li>Share our research findings with more visuals; such as diagrams, images, and tables.</li>
                        <li>Include competitor analysis in the beginning to understand why SBS stands out from other nonprofits.</li>
                    </ul>
                </p>
            </div>
        </div>
    )
}