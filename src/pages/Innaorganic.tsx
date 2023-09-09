import '../styles/Project.css';
import '../styles/Zoom.css';
import Zoom from 'react-medium-image-zoom';
import { Icon } from '@iconify-icon/react';
import { Link } from "react-router-dom";
import CollapseCom from '../components/CollapseCom';

export default function Innaorganic() {

    return (
        <div className='content'>
            <div className='projectHeadline'>
                <h2 className='gradientText'>Inna Organic.</h2>
                <p className='subtitle projectHmw'>How might we enhance brand communication across cultural boundaries?</p>
                <div className='projectIntro'>
                    <div className='innerProjectIntro'>
                        <p className='overline'>timeline</p>
                        <p className='small'>2020 Jan – Mar</p>
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
                            <li>UX Research</li>
                            <li>UX Design</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='projectOverview' id='io_overview'>
                <img src="/pics/Innaorganic.png" alt="Inna Organic project cover" />
            </div>
            <div className='rows'>
                <div className='projectContentRow'>
                    <h4 className='gradientText'>Overview</h4>
                    <p>Inna Organic, a prominent Asian organic skincare brand, embarked on a strategic mission to expand its presence within the competitive North American market. As the exclusive in-house UX Designer within the dynamic marketing team, I undertook a transformative project aimed at revitalizing their e-commerce platform. Over the course of a rigorous 12-week journey, the primary goal was to enhance brand communication and bridge the existing gap between the website and North American audiences.</p>
                </div>
                <div className='projectContentRow'>
                    <h4 className='gradientText'>Initial Problem</h4>
                    <p>The initial challenge lay in the evident disconnection between the current website and the diverse audiences in North America. It was clear that consumers in this region struggled to resonate with the existing online experience offered by Inna Organic.</p>
                </div>
                <div className='projectContentRow'>
                    <h4 className='gradientText'>Results</h4>
                    <p>
                        <ul>
                            <li>Witnessed a <span style={{ color: "var(--primary)", fontWeight: 500, fontStyle: "italic" }}>60%</span> increase in <span style={{ color: "var(--primary)", fontWeight: 500, fontStyle: "italic" }}>engagement rates</span>.</li>
                            <li>Realized a <span style={{ color: "var(--primary)", fontWeight: 500, fontStyle: "italic" }}>75%</span> surge in <span style={{ color: "var(--primary)", fontWeight: 500, fontStyle: "italic" }}>revenue</span>, reflecting the project's success.</li>
                            <li>Achieved a <span style={{ color: "var(--primary)", fontWeight: 500, fontStyle: "italic" }}>130%</span> growth in the North American <span style={{ color: "var(--primary)", fontWeight: 500, fontStyle: "italic" }}> audience</span>.</li>
                        </ul></p>
                </div>
            </div>
            <div className='projectImg' id='io_cover'>
                <img src="/pics/io/io_cover.png" alt="Inna Organic Web Design" />
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>Establishing Timeline</h4>
                <p>A well-structured project timeline serves as the backbone of success. First and foremost, it provides clarity for the stakeholders, ensuring everyone agrees upon the project's trajectory, tasks, and deadlines. This clarity fosters a sense of <span style={{ color: "var(--primary)", fontWeight: 500 }}>purpose, direction, and accountability</span>.</p>
                <div className='projectImg'>
                    <Zoom>
                        <img src="/pics/io/io_timeline.png" alt="Project Timeline" />
                    </Zoom>
                    {/* <p className='imgCaption caption'><Icon icon='mdi:arrow-drop-up' style={{ fontSize: '26px' }} /> Project Timeline</p> */}
                </div>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>Identifying Constraints</h4>
                <p>By identifying constraints early in the project, we gain a precise understanding of the boundaries within which I must operate. This knowledge enables me to make informed decisions and strategic trade-offs. For this project, there are two main constraints: <span style={{ color: "var(--primary)", fontWeight: 500 }}>insufficient current website data</span> & <span style={{ color: "var(--primary)", fontWeight: 500 }}>limited original audience base</span>.</p>
                <div className='projectImg'>
                    <Zoom>
                        <img src="/pics/io/io_constraints.png" alt="Project Constraints" />
                    </Zoom>
                </div>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>Research Methods</h4>
                <p>Given the project's timeline and constraints, I strategically chose research methods that would yield maximum insights while respecting our limitations. To effectively navigate this balance, I opted for a two-pronged approach: <span style={{ color: "var(--primary)", fontWeight: 500 }}>competitor analysis</span> and <span style={{ color: "var(--primary)", fontWeight: 500 }}>user interviews</span>.</p>
                <div className='projectImg'>
                    <Zoom>
                        <img src="/pics/io/io_research.png" alt="Research Methods" />
                    </Zoom>
                </div>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>Competitor Analysis</h4>
                <p>In the pursuit of valuable market insights, I conducted an extensive competitor analysis encompassing 13 prominent natural/organic skincare brands renowned for their North American cult followings. This deep-dive exploration offered a holistic view of industry dynamics, helping us <span style={{ color: "var(--primary)", fontWeight: 500 }}>assess our current performance, identify industry trends, and analyze user expectations</span>.
                    <br />
                    <br />
                    Moreover, this analysis provided a roadmap for innovation, guiding us to design solutions that not only met market expectations but surpassed them. As a result of this intensive process, I distilled <span style={{ color: "var(--primary)", fontWeight: 500 }}>four pivotal market insights</span> that would underpin our design strategy.
                </p>
                <div className='projectImg'>
                    <Zoom>
                        <img src="/pics/io/io_competitor.png" alt="Competitor Analysis Insights" />
                    </Zoom>
                    {/* <p className='imgCaption caption'><Icon icon='mdi:arrow-drop-up' style={{ fontSize: '26px' }} /> Research Methods</p> */}
                </div>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>User Interviews</h4>
                <p>Even within the constraints of a tight timeline, I placed a high premium on the power of user insights. To achieve this, I embarked on targeted user interviews with a cohort of six individuals, ranging in age from 25 to 40, each having made online purchases from at least two natural skincare brands in North America within the past year. This approach offered a direct line to our potential audience, enabling us to understand <span style={{ color: "var(--primary)", fontWeight: 500 }}>their needs, preferences, and pain points</span>.
                </p>
                <div className='projectImg'>
                    <Zoom>
                        <img src="/pics/io/io_interview.png" alt="User Interview Questions" />
                    </Zoom>
                </div>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>Defining Solutions with Insights</h4>
                <p>Drawing from the valuable insights gathered through both competitor analysis and user interviews, I crafted the foundational components, functionalities, and emotional resonance that would shape our final design solution. When delving into the user interviews, three critical themes emerged consistently: <span style={{ color: "var(--primary)", fontWeight: 500 }}>Community, Knowledge, and Trustworthiness</span>. From there, I further refined the approach to these core themes based on the strategic findings from the competitor analysis.
                    <br />
                    <br />
                    It's important to highlight that participants emphasized the significance of a seamless check-out experience. Unfortunately, due to project constraints, we were unable to address this aspect within the scope of this iteration.
                </p>
                <div className='projectImg'>
                    <Zoom>
                        <img src="/pics/io/io_insights.png" alt="Research Insights" />
                    </Zoom>
                </div>
            </div>
            <div className='projectDesign' id='io_overview'>
                <h4 className='gradientText'>Final Designs</h4>
                <div className='projectImg'>
                    <Zoom>
                        <img src="/pics/io/io_community.png" alt="Final Designs for Community" />
                    </Zoom>
                </div>
                <div className='projectImg'>
                    <Zoom>
                        <img src="/pics/io/io_knowledge.png" alt="Final Designs for Knowledge" />
                    </Zoom>
                </div>
                <div className='projectImg'>
                    <Zoom>
                        <img src="/pics/io/io_trust.png" alt="Final Designs for Trustworthiness" />
                    </Zoom>
                </div>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>Takeaways: Areas for Improvement</h4>
                <p>These takeaways reflect a commitment to continuous improvement and a dedication to refining design processes and outcomes to better serve both the brand and its diverse audience.</p>
                <div className='bulletPoints'>
                    <p className='subtitle gradientText'>Localization Efforts</p>
                    <p>Enhancing brand communication across cultural boundaries requires a nuanced understanding of local preferences and cultural sensitivities. Future iterations could delve deeper into localization efforts, tailoring content, design elements, and user experiences to align closely with the specific preferences of North American audiences.</p>
                </div>
                <div className='bulletPoints'>
                    <p className='subtitle gradientText'>Data-Driven Decision-Making</p>
                    <p>Expanding the scope of data collection and analysis could provide more robust evidence for design decisions. Incorporating tools like user analytics and A/B testing could offer quantitative insights to complement the qualitative findings from user interviews and competitor analysis.</p>
                </div>
                <div className='bulletPoints'>
                    <p className='subtitle gradientText'>Scalable Design Systems</p>
                    <p>As Inna Organic continues to grow, establishing a scalable design system can streamline design processes and ensure consistent brand communication across various touchpoints. This systematic approach can facilitate quicker design iterations and adaptations as the brand expands.</p>
                </div>
                <div className='bulletPoints'>
                    <p className='subtitle gradientText'>Continuous User Testing</p>
                    <p>Implementing an ongoing user testing and feedback mechanism post-implementation can ensure that design improvements align with evolving user needs. Regular testing cycles would allow for quick adjustments and refinements based on real-world user interactions.</p>
                </div>
            </div>
            <div className='prevNext'>
                <Link className='subtitle' role="button" to="/work/craigslist"><Icon icon='icon-park-outline:left' style={{ fontSize: '26px' }} />Craigslist</Link>
                <Link className='subtitle' role="button" to="/work/sbs">Accessibility for SBS <Icon icon='icon-park-outline:right' style={{ fontSize: '26px' }} /></Link>
            </div>
        </div>
    )
}