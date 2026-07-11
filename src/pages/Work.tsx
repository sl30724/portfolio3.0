import ProjectCard from '../components/ProjectCard';
import { Link } from "react-router-dom";

export default function Work() {
    return (
        <>
            <div className="background">
            </div>
            <div className='content'>
                <div className='headline'>
                    <p className='overline gradientText'><b>Currently based in Taipei · 中文 / English · Open to senior product & UX roles</b></p>
                    <h1 className='gradientText'>Sandy makes complex products feel simple.</h1>
                    <p>I'm a Product Designer who's led end-to-end design across 6+ platforms — blending UX, research, and product thinking to turn messy, complex, and data-heavy problems into tools people actually understand, use, and love.
                    </p>

                    <div className='buttons'>
                        <Link className='primaryBut small' role="button" to="/about">Learn About Me</Link>
                    </div>
                </div>

                <div className='projects' id='workProjects'>
                    <div className='headline' id='center'>
                        <h2 className='gradientText'>Featured Projects</h2>
                        <p>End-to-end product and UX work — from research and strategy through shipped, measurable outcomes.</p>
                    </div>
                    <ProjectCard
                        id='PAT'
                        type='UX Research & Product Design • Web • 2024'
                        name="Scaling a legacy tool into a sustainable and user-friendly platform"
                        description="Led UX strategy, MUI design system adoption, and delivery planning under tight budget and timeline constraints."
                        pic='/pics/PAT.png'
                        link='/work/PAT'
                        background='grey' />
                    <ProjectCard
                        id='Connector'
                        type='UX Research & Product Design • Web • 2025'
                        name="Improving usability for a multi-sided, policy-driven platform"
                        description="Led UX research and design across states, local agencies, and solar developers to prepare a community solar platform for scale."
                        pic='/pics/connector/Cover.png'
                        link='/work/Connector'
                        background='green' />
                    <ProjectCard
                        id='project3'
                        type='UX Design   •   Website   •   2020'
                        name="Transforming Inna Organic's E-commerce Website"
                        description="As the sole in-house UX Designer within the marketing team, I was tasked with reimagining their e-commerce platform as this thriving Asian organic skincare brand expanded its footprint in the North American market. How might we enhance brand communication across cultural boundaries?"
                        pic='/pics/Innaorganic.png'
                        link='/work/innaorganic'
                        background='green' />
                    {/* <ProjectCard
                        id='project3'
                        type='Product Design • Mobile App • 2023'
                        name="Elevating Teens' Experiences on Social Media: WhoAmI Today (In Progress)"
                        description="How might we create a social media that encourages teenagers to forge deeper friendships with their authentic selves? What are some cutting-edge design approaches we unveil from over 200 user surveys and interviews?"
                        pic='/pics/Whoami.png'
                        link='/work/whoami'
                        background='grey' /> */}

                </div>
                <div className='projects'>
                    <div className='headline' id='center'>
                        <h2 className='gradientText'>Additional Work</h2>
                        <p>Personal projects and coursework exploring design beyond client work.</p>
                    </div>
                    <div className='additional'>
                        <ProjectCard
                            id='additional1'
                            type='UX Research / UX Design   •   Mobile App   •   2022'
                            name='Designing Safety and Trust on Craigslist'
                            pic='/pics/Craigslist.png'
                            link='/work/craigslist'
                            background='blue' />
                        <ProjectCard
                            id='additional2'
                            type='UX Research / UX Design   •   Mobile App   •   2022 Mar – May'
                            name='Empowering Voters with VoteAlly'
                            pic='/pics/Voteally.png'
                            link='/work/voteally'
                            background='pink' />
                        <ProjectCard
                            id='additional3'
                            type='UX Research / Accessibility Research   •   Website   •   2022 Oct'
                            name='Accessibility for Street Business School'
                            pic='/pics/Sbs.png'
                            link='/work/sbs'
                            background='orange' />
                    </div>
                </div>
            </div>
        </>
    )
}