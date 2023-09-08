import ProjectCard from '../components/ProjectCard';

export default function Fun() {
    return (
        <>
            <div className="background">
            </div>
            <div className='content'>
                <div className='headline' id='center'>
                    <h1 className='gradientText'>Fun</h1>
                    <p>These front-end projects encapsulate my passion for turning designs into living, breathing realities. My love for continuous learning has recently led me to delve into the realm of 3D interaction web experiences, where I've harnessed the power of Unity, Three.js, and WebGL to create awe-inspiring digital landscapes.</p>
                </div>
                <div className='projects' id='funProjects'>
                    <ProjectCard
                        id='fun2'
                        name='The Museum of Rudeness'
                        description='An interactive 3D web experience that showcases interesting cultural nuances of rude behaviors from around the world with exhibits and games.'
                        pic='/pics/Museumrudeness.gif'
                        link='https://museum-of-rudeness.sandylee.site/'
                        background='primary-container' />
                    <ProjectCard
                        id='fun1'
                        name='Sounds of Taipei'
                        description='A delightful virtual exploration through the beautiful Taipei City with mesmerizing audios, visuals, and scrolling effects.'
                        pic='/pics/Soundstaipei.gif'
                        link='https://sounds-of-taipei.sandylee.site/'
                        background='primary-container' />
                </div>
            </div>
        </>
    )
}