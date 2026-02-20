import ProjectCard from '../components/ProjectCard';
import { Link } from "react-router-dom";

export default function Work() {
    return (
        <>
            <div className="background">
            </div>
            <div className='content'>
                <div className='headline'>
                    <h1 className='gradientText'>Sandy crafts digital products that resonate.</h1>
                    <p>I’m a Product Designer (UI/UX) and a moonlighting UI Developer. Over the past 4+ years, I’ve helped startups and established companies create joyful, engaging, and impactful digital products & experiences that resonate with their diverse audiences.
                    </p>
                    <div className='buttons'>
                        <Link className='primaryBut small' role="button" to="/about">Learn About Me</Link>
                    </div>
                </div>

                <div className='projects' id='workProjects'>
                    <div className='headline' id='center'>
                        <h2 className='gradientText'>Featured Projects.</h2>
                        <p>A curated collection of my recent projects, featuring real-world client collaborations, personal case studies, and ongoing endeavors.</p>
                    </div>
                    <ProjectCard
                        id='PAT'
                        type='Product Design • Web • 2024'
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
                        pic='/pics/connector/cover.png'
                        link='/work/Connector'
                        background='green' />
                    <ProjectCard
                        id='project3'
                        type='Product Design • Mobile App • 2023'
                        name="Elevating Teens' Experiences on Social Media: WhoAmI Today (In Progress)"
                        description="How might we create a social media that encourages teenagers to forge deeper friendships with their authentic selves? What are some cutting-edge design approaches we unveil from over 200 user surveys and interviews?"
                        pic='/pics/Whoami.png'
                        link='/work/whoami'
                        background='grey' />
                    <ProjectCard
                        id='project3'
                        type='Product Design   •   Mobile App   •   2022'
                        name='Designing Safety and Trust on Craigslist'
                        description='How might we address users’ feelings and concerns while navigating through a complex information architecture? Could expanding the existing design system be the key to cleaner interfaces that convey the same simplicity that users already associate Craigslist with?'
                        pic='/pics/Craigslist.png'
                        link='/work/craigslist'
                        background='blue' />
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
                        type='Product Design (UI/UX)   •   Mobile App   •   2022 Mar – May'
                        name='Empowering Voters with VoteAlly'
                        description="The voters' journey expands beyond the election days. How might we help the individuals seeking to cast well-informed votes be more prepared prior to elections? Could the provision of candidate insights and personalized election reminders hold the key to a more empowering experience?"
                        pic='/pics/Voteally.png'
                        link='/work/voteally'
                        background='pink' /> */}
                    <ProjectCard
                        id='project3'
                        type='UX Research / Accessibility Research   •   Website   •   2022 Oct'
                        name='Accessibility for Street Business School'
                        description="Street Business School aims to enhance the accessibility of its website as it embarks on a new phase of growth. How can we leverage accessibility checkers, tools, and heuristic reports to identify prevailing accessibility barriers and transform them into actionable insights?"
                        pic='/pics/Sbs.png'
                        link='/work/sbs'
                        background='orange' />
                </div>
            </div>
        </>
    )
}