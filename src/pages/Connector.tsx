import '../styles/Project.css';
import '../styles/Zoom.css';
import Zoom from 'react-medium-image-zoom';
import { Icon } from '@iconify-icon/react';
import { Link } from "react-router-dom";
import CollapseCom from '../components/CollapseCom';

export default function Connector() {

    return (
        <div className='content'>
            {/* Headline */}
            <div className='projectHeadline'>
                <h2 className='gradientText'>Connector.</h2>

                <p className='subtitle projectHmw'>
                    Improving usability for a multi-sided, policy-driven platform
                </p>

                <div className='projectIntro'>
                    <div className='innerProjectIntro'>
                        <p className='overline'>timeline</p>
                        <p className='small'>2025 Feb – Aug</p>
                    </div>

                    <div className='innerProjectIntro'>
                        <p className='overline'>role</p>
                        <ul className='small'>
                            <li>UX Research</li>
                            <li>Product Design</li>
                            <li>Content Design</li>
                        </ul>
                    </div>

                    <div className='innerProjectIntro'>
                        <p className='overline'>deliverables</p>
                        <ul className='small'>
                            <li>Heuristic Evaluation</li>
                            <li>Research Synthesis</li>
                            <li>Hi-fi Prototypes</li>
                            <li>Usability Roadmap</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Cover / hero */}
            <div className='projectOverview' id='connector_overview'>
                <img src="/pics/Connector/Cover.png" alt="Energy Connector project cover" />
            </div>

            {/* Overview / Challenge / Results */}
            <div className='rows'>
                <div className='projectContentRow'>
                    <h4 className='gradientText'>Overview</h4>
                    <p>
                        Energy Connector (Connector) is a platform that connects{" "}
                        <span style={{ color: "var(--primary)", fontWeight: 500 }}>
                            income-verified households
                        </span>
                        ,{" "}
                        <span style={{ color: "var(--primary)", fontWeight: 500 }}>
                            state community solar administrators
                        </span>
                        , and{" "}
                        <span style={{ color: "var(--primary)", fontWeight: 500 }}>
                            solar subscription managers
                        </span>{" "}
                        to support community solar programs with strong consumer protections and long-term cost savings.
                        <br /><br />
                        As interest from new states and partners grew, the team introduced UX research and design to ensure the platform could scale
                        without sacrificing trust, clarity, or efficiency. I joined as the product designer and UX researcher to study the needs of{" "}
                        <span style={{ color: "var(--primary)", fontWeight: 500 }}>
                            all three user groups
                        </span>{" "}
                        and translate research insights into{" "}
                        <span style={{ color: "var(--primary)", fontWeight: 500 }}>
                            high-impact usability improvements
                        </span>{" "}
                        for a regulated, multi-user system.
                    </p>
                </div>

                <div className='projectContentRow'>
                    <h4 className='gradientText'>Challenge</h4>
                    <p>
                        How might we improve usability for{" "}
                        <span style={{ color: "var(--primary)", fontWeight: 500 }}>
                            three distinct user groups with different goals
                        </span>
                        , while supporting trust, efficiency, and program scalability in a policy-driven environment?
                    </p>
                </div>

                <div className='projectContentRow'>
                    <h4 className='gradientText'>Results</h4>
                    <p>
                        <ul>
                            <li>
                                <span style={{ color: "var(--primary)", fontWeight: 500, fontStyle: "italic" }}>
                                    100%
                                </span>{" "}
                                of upcoming users reported excitement about adopting the platform after research and design walkthroughs.
                            </li>
                            <li>
                                Research findings directly informed a <span style={{ color: "var(--primary)", fontWeight: 500 }}>prioritized usability roadmap</span> for the next development phase.
                            </li>
                            <li>
                                Due to broader administration changes and shifting federal priorities, post-launch feedback and adoption signals were limited during this phase.
                            </li>
                        </ul>
                    </p>
                </div>
            </div>

            {/* Expandable behind-the-scenes */}
            <CollapseCom>
                <div className='projectContent'>
                    <h4 className='gradientText'>Users and incentives</h4>
                    <p>
                        Connector serves three primary user groups — each with distinct definitions of success. Designing for Connector meant balancing{" "}
                        <span style={{ color: "var(--primary)", fontWeight: 500 }}>
                            trust, efficiency, and accountability
                        </span>{" "}
                        across all three.
                        <br /><br />
                        However, given timeline constraints and upcoming onboarding, we focused this phase on{" "}
                        <span style={{ color: "var(--primary)", fontWeight: 500 }}>
                            state administrators and solar subscription managers
                        </span>
                        .
                    </p>

                    <div className='projectImg'>
                        <Zoom>
                            <img src="/pics/Connector/UserGoals.png" alt="Connector user goals" />
                        </Zoom>
                        <p className='imgCaption caption'>
                            <Icon icon='mdi:arrow-drop-up' style={{ fontSize: '26px' }} /> User groups &amp; primary goals
                        </p>
                    </div>
                </div>

                <div className='projectContent'>
                    <h4 className='gradientText'>Research approach</h4>
                    <p>
                        After aligning with project owners on UX goals and constraints, I defined research objectives and selected methods to balance speed and depth.
                        <br /><br />
                        I used a mix of{" "}
                        <span style={{ color: "var(--primary)", fontWeight: 500 }}>
                            generative and evaluative methods
                        </span>
                        , including:
                        <ul>
                            <li>Stakeholder interviews</li>
                            <li>Team-led heuristic evaluation (Nielsen’s heuristics)</li>
                            <li>Generative user interviews</li>
                            <li>Task-based usability testing</li>
                        </ul>
                    </p>

                    <div className='projectImg'>
                        <Zoom>
                            <img src="/pics/Connector/ResearchObjectives.png" alt="Research objectives" />
                        </Zoom>
                        <p className='imgCaption caption'>
                            <Icon icon='mdi:arrow-drop-up' style={{ fontSize: '26px' }} /> Research objectives
                        </p>
                    </div>
                </div>
            </CollapseCom>


            <div className='projectContent'>
                <h4 className='gradientText'>Research key findings</h4>
                <p>
                    Across interviews, heuristics, and usability testing, several patterns emerged:
                    <ul>
                        <li>
                            <span style={{ color: "var(--primary)", fontWeight: 500 }}>
                                Different expectations of success:
                            </span>{" "}
                            States prioritized compliance and oversight, while subscription managers focused on efficiency and lead quality.
                        </li>
                        <li>
                            <span style={{ color: "var(--primary)", fontWeight: 500 }}>
                                Trust and transparency are non-negotiable:
                            </span>{" "}
                            Users were highly sensitive to data access, eligibility verification, and visible accountability mechanisms.
                        </li>
                        <li>
                            <span style={{ color: "var(--primary)", fontWeight: 500 }}>
                                Tasks were clear, workflows were not:
                            </span>{" "}
                            Users understood what to do, but struggled with how tasks connected across the platform.
                        </li>
                        <li>
                            <span style={{ color: "var(--primary)", fontWeight: 500 }}>
                                Cognitive load was higher than expected:
                            </span>{" "}
                            Misleading labels, buried actions, and unclear hierarchy slowed task completion and increased hesitation.
                        </li>
                    </ul>
                </p>
            </div>

            <div className='projectContent'>
                <h4 className='gradientText'>Implications from key findings</h4>
                <p>
                    These findings suggested that improving usability wasn’t about adding new features—it was about{" "}
                    <span style={{ color: "var(--primary)", fontWeight: 500 }}>
                        making the platform’s structure, logic, and intent more legible
                    </span>
                    :
                    <ul>
                        <li>Customize views and success metrics by role</li>
                        <li>Surface critical data earlier to build trust</li>
                        <li>Clarify information architecture and terminology</li>
                        <li>Add in-context guidance to support complex workflows</li>
                        <li>Reduce cognitive load through simplification and prioritization</li>
                    </ul>
                </p>

                <div className='projectImg'>
                    <Zoom>
                        <img src="/pics/Connector/Implications.png" alt="Research implications artifact" />
                    </Zoom>
                    <p className='imgCaption caption'>
                        <Icon icon='mdi:arrow-drop-up' style={{ fontSize: '26px' }} /> From findings to design implications
                    </p>
                </div>
            </div>

            {/* Design 1 */}
            <div className='projectContent'>
                <h4 className='gradientText'>Final designs</h4>

                <div className='bulletPoints'>
                    <h5 className='gradientText'>Projects page</h5>
                    <div className='projectImg'>
                        <Zoom>
                            <img src="/pics/Connector/Projects.png" alt="Projects page improvements" />
                        </Zoom>
                        <p className='imgCaption caption'>
                            <Icon icon='mdi:arrow-drop-up' style={{ fontSize: '26px' }} /> Projects page
                        </p>
                    </div>
                    <p>
                        <span style={{ color: "var(--primary)", fontWeight: 500 }}>Before:</span>{" "}
                        Projects awaiting approval were not clearly visible, and project names were not clickable for deeper review.
                        <br /><br />
                        <span style={{ color: "var(--primary)", fontWeight: 500 }}>After:</span>
                        <ul>
                            <li>Consolidated “Applications” into the main <b>Projects</b> tab</li>
                            <li>Surfaced approval status more prominently</li>
                            <li>Reordered columns by decision-critical information</li>
                            <li>Made project names clickable for direct access to details</li>
                        </ul>
                        <br />
                        <span style={{ color: "var(--primary)", fontWeight: 500 }}>Impact:</span> Improved visibility into approval workflows and reduced navigation friction.
                    </p>
                </div>
            </div>

            {/* Design 2 */}
            <div className='projectContent'>
                <div className='bulletPoints'>
                    <h5 className='gradientText'>Subscription managers page</h5>
                    <div className='projectImg'>
                        <Zoom>
                            <img src="/pics/Connector/SubscriptionManagers.png" alt="Subscription managers table improvements" />
                        </Zoom>
                        <p className='imgCaption caption'>
                            <Icon icon='mdi:arrow-drop-up' style={{ fontSize: '26px' }} /> Subscription managers page
                        </p>
                    </div>
                    <br />
                    <p>
                        <span style={{ color: "var(--primary)", fontWeight: 500 }}>Before:</span>{" "}
                        Only subscription manager names were displayed, with limited contextual information for decision-making.
                        <br /><br />
                        <span style={{ color: "var(--primary)", fontWeight: 500 }}>After:</span>
                        <ul>
                            <li>Added key data columns to surface critical metrics earlier</li>
                            <li>Prioritized information aligned with user goals</li>
                        </ul>
                        <br />
                        <span style={{ color: "var(--primary)", fontWeight: 500 }}>Impact:</span> Reduced cognitive load and supported faster, more confident review.
                    </p>
                </div>
            </div>

            {/* Design 3 */}
            <div className='projectContent'>

                <div className='bulletPoints'>
                    <h5 className='gradientText'>Project details page</h5>
                    <div className='projectImg'>
                        <Zoom>
                            <img src="/pics/Connector/ProjectDetails.png" alt="Project details page improvements" />
                        </Zoom>
                        <p className='imgCaption caption'>
                            <Icon icon='mdi:arrow-drop-up' style={{ fontSize: '26px' }} /> Project details page
                        </p>
                    </div>
                    <p>
                        <span style={{ color: "var(--primary)", fontWeight: 500 }}>Before:</span>{" "}
                        Information was buried in long, visually undifferentiated content, making tasks harder to complete.
                        <br /><br />
                        <span style={{ color: "var(--primary)", fontWeight: 500 }}>After:</span>
                        <ul>
                            <li>Grouped related information into clear content blocks</li>
                            <li>Introduced visual hierarchy to guide attention</li>
                            <li>Added in-context guidance to clarify available actions</li>
                        </ul>
                        <br />
                        <span style={{ color: "var(--primary)", fontWeight: 500 }}>
                            Impact:
                        </span>{" "}
                        Improved task clarity and reduced hesitation during workflow execution.
                    </p>
                </div>
            </div>

            {/* Design 4 */}
            <div className='projectContent'>
                <div className='bulletPoints'>
                    <h5 className='gradientText'>Public pages</h5>
                    <div className='projectImg'>
                        <Zoom>
                            <img src="/pics/Connector/PublicPages.png" alt="Public pages improvements" />
                        </Zoom>
                        <p className='imgCaption caption'>
                            <Icon icon='mdi:arrow-drop-up' style={{ fontSize: '26px' }} /> Public pages
                        </p>
                    </div>
                    <p>
                        <span style={{ color: "var(--primary)", fontWeight: 500 }}>Before:</span>{" "}
                        The public site consisted of only a basic homepage and contact page, offering little guidance about who the platform was for.
                        <br /><br />
                        <span style={{ color: "var(--primary)", fontWeight: 500 }}>After:</span>
                        <ul>
                            <li>Introduced clear role-based entry points on the homepage</li>
                            <li>Created dedicated “About” pages for each user group</li>
                            <li>Clarified responsibilities and expectations before login</li>
                        </ul>
                        <br />
                        <span style={{ color: "var(--primary)", fontWeight: 500}}>
                            Impact:
                        </span>{" "}
                        Set expectations early and supported user self-selection before platform access.
                    </p>
                </div>
            </div>

            {/* Prev / Next */}
            <div className='prevNext'>
                {/* Update these routes to match your actual app */}
                <Link className='subtitle' role="button" to="/work/pat">
                    <Icon icon='icon-park-outline:left' style={{ fontSize: '26px' }} />
                    PAT
                </Link>

                <Link className='subtitle' role="button" to="/work/Craigslist">
                    Craigslist
                    <Icon icon='icon-park-outline:right' style={{ fontSize: '26px' }} />
                </Link>
            </div>
        </div>
    )
}