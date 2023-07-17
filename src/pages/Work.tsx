import ProjectCard from '../components/ProjectCard';

export default function Work() {
    return (
        <div className='content'>
            <div className='headline'>
                <h1 className='gradientText'>Hi, I'm Sandy.</h1>
                <p>As a designer and a moonlighting developer, I’m passionate about crafting experiences that are fun, human-centered, and meaningful.</p>
            </div>
            <div className='projects' id='workProjects'>
                <ProjectCard
                    id='project1'
                    highlight={false}
                    type='UX Research / Accessibile Web Design'
                    name='Street Business School'
                    pic='/pics/Sbs2.png'
                    background='blue' />
                <ProjectCard
                    id='project2'
                    highlight={false}
                    type='Product Design / Mobile App'
                    name='Empowering Voters with VoteAlly'
                    pic='/pics/Voteally.png'
                    background='pink' />
                <ProjectCard
                    id='project3'
                    highlight={true}
                    type='Product Design / Mobile App'
                    name='Designing Safety and Trust on Craigslist'
                    pic='/pics/Craigslist.png'
                    background='grey' />
            </div>
            <div className='inProcess'>
                <div className='headline'>
                    <h2 className='gradientText'>In Process.</h2>
                    <p>Ongoing research & design projects.</p>
                </div>
                <div className='projects'>
                    <ProjectCard
                        id='project4'
                        highlight={true}
                        type='Product Design / Mobile App'
                        name='Facilitating Adolescent Self-Disclosure on WhoAmI'
                        pic='/pics/Whoami.png'
                        background='orange' />
                </div>
            </div>
        </div>
    )
}