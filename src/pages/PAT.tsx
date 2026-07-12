import '../styles/Project.css';
import '../styles/Zoom.css';
import Zoom from 'react-medium-image-zoom';
import { Icon } from '@iconify-icon/react';
import { Link } from "react-router-dom";

export default function PAT() {

    return (
        <div className='content'>
            <div className='projectHeadline'>
                <h2 className='gradientText'>PAT.</h2>
                <p className='subtitle projectHmw'>Scaling a legacy tool into a sustainable and user-friendly platform</p>
                <div className='projectIntro'>
                    <div className='innerProjectIntro'>
                        <p className='overline'>timeline</p>
                        <p className='small'>2024 Aug – 2025 Mar</p>
                    </div>
                    <div className='innerProjectIntro'>
                        <p className='overline'>team</p>
                        <ul className='small'>
                            <li>2 Developers</li>
                            <li>2 Data Scientists</li>
                            <li>3 Stakeholders</li>
                        </ul>
                    </div>
                    <div className='innerProjectIntro'>
                        <p className='overline'>my role</p>
                        <ul className='small'>
                            <li>Product Design</li>
                            <li>Design Systems</li>
                            <li>UX Research</li>
                            <li>Product Management</li>
                        </ul>
                    </div>
                    <div className='innerProjectIntro'>
                        <p className='overline'>deliverables</p>
                        <ul className='small'>
                            <li>UX Scope and Budget</li>
                            <li>Impact-Effort Matrix</li>
                            <li>Personas</li>
                            <li>User Flow</li>
                            <li>Hi-Fi Prototype</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='projectOverview' id='pat_overview'>
                <img src="/pics/PAT.png" alt="PAT project cover" />
            </div>
            <div className='rows'>
                <div className='projectContentRow'>
                    <h4 className='gradientText'>Overview</h4>
                    <p>
                        Procurement Analysis Tool (PAT) is the only platform that helps businesses and local governments evaluate utility-scale renewable energy procurement by comparing technology costs, locations, and emissions.
                        In 2024, the team began <span style={{ color: "var(--primary)", fontWeight: 500 }}>migrating PAT to a modern development environment</span> to reduce long-term maintenance costs and align with other lab web tools. Alongside the migration, the team also wanted to <span style={{ color: "var(--primary)", fontWeight: 500 }}>address existing usability issues</span> — which is why I was brought onto the project as the product designer.

                    </p>
                </div>
                <div className='projectContentRow'>
                    <h4 className='gradientText'>My Role</h4>
                    <p>
                        As the first and only product/UX designer on PAT, I led <span style={{ color: "var(--primary)", fontWeight: 500 }}>high-impact usability improvements</span> while establishing a <span style={{ color: "var(--primary)", fontWeight: 500 }}>Material UI–based design system</span> to improve consistency, streamline design-to-development workflows, and reduce engineering effort. My work was grounded in research — including a <span style={{ color: "var(--primary)", fontWeight: 500 }}>stakeholder interview</span> to align on scope and decision-making, and <span style={{ color: "var(--primary)", fontWeight: 500 }}>2 usability testing sessions</span> to validate design direction. Working within a tight migration timeline and budget, I owned the UX scope, prioritization, and delivery planning end-to-end.

                    </p>
                </div>
                <div className='projectContentRow'>
                    <h4 className='gradientText'>Challenge</h4>
                    <p>
                        How might we scale a legacy, high-stakes tool into a sustainable platform—improving usability and consistency—
                        while protecting existing workflows and delivering within a tight migration timeline?
                    </p>
                </div>
                <div className='projectContentRow'>
                    <h4 className='gradientText'>Results</h4>
                    <p>
                        <ul>
                            <li>
                                <span style={{ color: "var(--primary)", fontWeight: 500 }}>
                                    Launched on schedule
                                </span>{" "}
                                despite migrating to a new development environment and adopting Material UI for the first time
                            </li>
                            <li>
                                <span style={{ color: "var(--primary)", fontWeight: 500 }}>89%</span>{" "}
                                retention of existing users post migration launch
                            </li>
                            <li>
                                In post-demo feedback, <span style={{ color: "var(--primary)", fontWeight: 500 }}>80%</span>{" "}
                                of 5 prototype testers said they would start using the tool immediately after the prototype demo
                            </li>
                            <li>
                                Secured continued funding, with leadership committing to a{" "}
                                <span style={{ color: "var(--primary)", fontWeight: 500 }}>
                                    long-term budget for ongoing UX support
                                </span>{" "}
                                despite administration changes
                            </li>
                            <li>
                                <span style={{ color: "var(--primary)", fontWeight: 500 }}>
                                    Material UI design system adopted as the UX team standard
                                </span>
                                , reducing future design and development overhead across projects
                            </li></ul></p>
                </div>
            </div>
            <div className='projectImg'>
                <Zoom>
                    <img src="/pics/PAT/NewPAT.png" alt="PATafter migration" />
                </Zoom>
                <p className='imgCaption caption'>
                    <Icon icon='mdi:arrow-drop-up' style={{ fontSize: '26px' }} /> PAT after migration
                </p>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>Stakeholder alignment & UX ownership</h4>
                <p>
                    As the first product/UX person involved in the project, I focused on aligning expectations before introducing
                    design solutions. Since UX had not previously been embedded in PAT’s development process, my goal was to clarify{" "}
                    <span style={{ color: "var(--primary)", fontWeight: 500 }}>
                        how UX would contribute, where design decisions would be owned, and how collaboration would work
                    </span>
                    —reducing the risk of role confusion during a time-sensitive migration.
                    <br /><br />
                    I conducted an internal stakeholder interview with the project owner to understand:
                    <ul>
                        <li>UX’s role in project success and product decision-making</li>
                        <li>Expected level of UX input on design and direction</li>
                        <li>Risks or uncertainties around introducing UX for the first time</li>
                        <li>How user feedback would be gathered post-migration and UX’s role in iteration</li>
                    </ul>
                    <br />
                    This alignment established trust early and created clear decision-making boundaries for both migration and future product improvements.
                </p>
                <div className='projectImg'>
                    <Zoom>
                        <img src="/pics/PAT/StakeholderInterview.png" alt="Stakeholder alignment artifacts" />
                    </Zoom>
                    <p className='imgCaption caption'>
                        <Icon icon='mdi:arrow-drop-up' style={{ fontSize: '26px' }} /> Stakeholder interview FigJam
                    </p>
                </div>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>Problem framing &amp; research</h4>
                <p>
                    With ownership and collaboration expectations set, I moved into problem framing and research. I defined a clear
                    problem statement to align the team on{" "}
                    <span style={{ color: "var(--primary)", fontWeight: 500 }}>
                        primary user groups, the core problem being solved, and success criteria
                    </span>
                    .
                    <br /><br />
                    Using this framing—along with existing qualitative user feedback—I created lightweight personas and mapped current user
                    flows to identify friction points that could be addressed without disrupting established usage patterns.
                    <br /><br />
                    Given timeline constraints, we conducted a small usability study. I synthesized findings into an{" "}
                    <span style={{ color: "var(--primary)", fontWeight: 500 }}>
                        impact vs. effort matrix
                    </span>
                    , which became the primary tool for prioritizing UX work during migration and balancing usability gains with delivery risk.
                </p>
                <div className='projectImg' id='PAT-UXR'>
                    <Zoom>
                        <img src="/pics/PAT/UXR.png" alt="PAT's personas and user flow" />
                    </Zoom>
                    <p className='imgCaption caption'><Icon icon='mdi:arrow-drop-up' style={{ fontSize: '26px' }} /> Problem statement and personas</p>
                </div>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>Budget and timeline</h4>
                <p>
                    Using the impact/effort matrix, I defined a UX scope focused on improvements that would meaningfully improve usability{" "}
                    <span style={{ color: "var(--primary)", fontWeight: 500 }}>
                        without increasing delivery risk
                    </span>
                    . I translated this scope into a UX budget and timeline using a template I created, then broke the work into Jira epics,
                    stories, and tasks.
                    <br /><br />
                    I reviewed the plan with developers to validate feasibility and add buffer for risk. Despite adopting Material UI for the
                    first time, the team launched on schedule—demonstrating that upfront UX planning reduced downstream friction.
                </p>
                <div className='projectImg'>
                    <Zoom>
                        <img src="/pics/PAT/ImpactMatrix.png" alt="PAT's impact vs effort matrix" />
                    </Zoom>
                    <p className='imgCaption caption'><Icon icon='mdi:arrow-drop-up' style={{ fontSize: '26px' }} /> Impact vs Effort Matrix</p>
                </div>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>Design strategy</h4>
                <p>
                    Because PAT has an existing loyal user base, I intentionally avoided large interaction or navigation changes that could
                    disrupt existing workflows. Since users had not reported issues with primary navigation or core flows, I preserved them and
                    focused on:
                    <br /><br />
                    <ul>
                        <li>Replacing legacy UI with <span style={{ color: "var(--primary)", fontWeight: 500 }}>consistent MUI components</span></li>
                        <li>Improving <span style={{ color: "var(--primary)", fontWeight: 500 }}>information architecture</span> within pages</li>
                        <li>Addressing <span style={{ color: "var(--primary)", fontWeight: 500 }}>high-impact usability issues</span> </li>
                        <li>Clarifying <span style={{ color: "var(--primary)", fontWeight: 500 }}>content and labeling</span> to reduce cognitive load</li>
                    </ul>
                    <br />
                    This approach minimized user relearning while modernizing the interface and establishing a scalable design foundation for
                    future development.
                </p>
                <div className='projectImg' id='PAT-MUI'>
                    <Zoom>
                        <img src="/pics/PAT/MUI.png" alt="NREL-themed MUI Design System" />
                    </Zoom>
                    <p className='imgCaption caption'><Icon icon='mdi:arrow-drop-up' style={{ fontSize: '26px' }} /> NREL-themed MUI Design System</p>
                </div>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>What shipped</h4>
                <p>
                    A modernized PAT UI built on Material UI components, improved page-level information structure, reduced cognitive load through clearer
                    content and labeling, and a reusable design system foundation that scales across future enhancements.
                </p>
                <div className='projectImg' id='PAT-Home'>
                    <Zoom>
                        <img src="/pics/PAT/Home.png" alt="PAT Home Page before and after" />
                    </Zoom>
                    <p className='imgCaption caption'><Icon icon='mdi:arrow-drop-up' style={{ fontSize: '26px' }} /> Improved Filters Page</p>
                </div>
                <div className='projectImg' id='PAT-Filters'>
                    <Zoom>
                        <img src="/pics/PAT/Filters.png" alt="PAT Filters Page before and after" />
                    </Zoom>
                    <p className='imgCaption caption'><Icon icon='mdi:arrow-drop-up' style={{ fontSize: '26px' }} /> Improved Filters Page</p>
                </div>
                <div className='projectImg' id='PAT-procurement'>
                    <Zoom>
                        <img src="/pics/PAT/Procurement.png" alt="PAT Procurement Page before and after" />
                    </Zoom>
                    <p className='imgCaption caption'><Icon icon='mdi:arrow-drop-up' style={{ fontSize: '26px' }} /> Improved Procurement Page</p>
                </div>

                <div className='projectImg' id='PAT-Resource'>
                    <Zoom>
                        <img src="/pics/PAT/Resource.png" alt="PAT Resource Page before and after" />
                    </Zoom>
                    <p className='imgCaption caption'><Icon icon='mdi:arrow-drop-up' style={{ fontSize: '26px' }} /> Improved Resource Page</p>
                </div>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>Takeaways</h4>
                <div className='bulletPoints'>
                    <p className='subtitle gradientText'>Clarity first, change second</p>
                    <p>
                        When a tool has a loyal user base, “better” isn’t always “different.” Preserving core workflows while improving page-level
                        structure and content reduced relearning and protected adoption during migration.
                    </p>
                </div>

                <div className='bulletPoints'>
                    <p className='subtitle gradientText'>Upfront planning reduces downstream risk</p>
                    <p>
                        Translating research insights into an impact/effort matrix, then into a scoped timeline and Jira breakdown, kept UX work
                        realistic and made it easier for engineering to estimate, sequence, and deliver.
                    </p>
                </div>
            </div>
            <div className='prevNext'>
                <Link className='subtitle' role="button" to="/"><Icon icon='icon-park-outline:left' style={{ fontSize: '26px' }} />See other projects</Link>
                
            </div>
        </div>
    )
}