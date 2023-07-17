interface Project {
    id: string;
    highlight?: Boolean;
    type?: string;
    name: string;
    description?: string;
    pic: string;
    background: string;
    link?: string;
    ready?: Boolean;
}

export default function ProjectCard(props: Project) {
    return (
        <div className={`projectCard ${props.background}`} id={`${props.id}`}>
            <a href={props.link} target='_blank' rel='noreferrer'>
                <div className='projectCardContent'>
                    <div className='projectTitle'>
                        {props.type && <p className='overline'>{props.type}</p>}
                        <h4>{props.name}</h4>
                        {props.description && <p>{props.description}</p>}
                    </div>
                    <div className='projectCover'>
                        <img src={props.pic} alt={props.name} />
                    </div>
                </div>
            </a>
        </div>
    )
}