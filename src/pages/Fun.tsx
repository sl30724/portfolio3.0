import ProjectCard from '../components/ProjectCard';

export default function Fun() {
    return (
        <div className='content'>
            <div className='headline'>
                <h1 className='gradientText'>Fun</h1>
                <p>I do front-end projects on the side because I love seeing my designs live and learning new things everyday.</p>
            </div>
            <div className='projects' id='funProjects'>
                <ProjectCard
                    id='fun1'
                    name='Sounds of Taipei'
                    description='A delightful virtual exploration through the beautiful Taipei City with mesmerizing audios, visuals, and scrolling effects.'
                    pic='/pics/Soundstaipei.gif'
                    link='https://sounds-of-taipei.sandylee.site/'
                    background='primary-container' />
                <ProjectCard
                    id='fun2'
                    name='The Museum of Rudeness'
                    description='An interactive web experience that showcases interesting cultural nuances of rude behaviors from around the world with 3D exhibits.'
                    pic='/pics/Museumrudeness.gif'
                    background='primary-container' />
            </div>
        </div>
    )
}