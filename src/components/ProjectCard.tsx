import { Link } from "react-router-dom";

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
        <div className={`projectCard`} id={`${props.id}`}>
            <div className={`projectLink ${props.background}`}>
                <a href={`${props.link}`}>
                    <div className='projectCardContent'>
                        <div className='projectCover'>
                            <img src={props.pic} alt={props.name} />
                        </div>
                    </div>
                </a>
            </div>
            <div className='projectTitle'>
                <div className='title'>
                <h4 className="gradientText">{props.name}</h4>
                {props.type && <p className='overline'>{props.type}</p>}
                {/* <div className="divider"></div>  */}
                </div>
                {props.description && <p className="small">{props.description}</p>}
                <Link className='primaryBut small' role="button" to={`${props.link}`}>See Project Details</Link>
            </div>
        </div>
    )
}