import React, { useRef, useState } from 'react';
import { Icon } from '@iconify-icon/react';


interface Link {
  site: string;
  url: string;
}

interface Project {
  highlight: Boolean;
  solo?: Boolean;
  name: string;
  src: string;
  type?: string;
  tools: Array<string>;
  ready: Boolean;
  links: Array<Link>;
  description: string;
}
const small = '122w';
const medium = '255w';
const large = '541w';

export default function ProjectGallery() {
  let scrl = useRef(null) as any;
  // let scrollScale: number = scrl.current.clientWidth*0.6/2+20;
  const [scrollX, setscrollX] = useState(0);
  const [scrollEnd, setscrollEnd] = useState(false);

  const slide = (shift: number) => {
    scrl.current.scrollLeft += shift;

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <= scrl.current.offsetWidth) {
      setscrollEnd(true);
    }
    else {
      setscrollEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrollEnd(true);
    } else {
      setscrollEnd(false);
    }
  };
  const tabTypes = ['All', 'Design', 'Design + Dev'];
  const [value, setValue] = useState(1);
  const [active, setActive] = useState(tabTypes[0]);

  return (
    <>
      <div className='projects-container'>
        <div className='projects'>
          <div className='project-type'>
            <h2>Product Design</h2><div className='hl'></div>
          </div>
          <div className="Project-highlights">
            <ProjectCard name="Craigslist Redesign"
              highlight={true}
              tools={["Figma"]}
              src="/pics/cr.png"
              ready={true}
              links={
                [{ site: "web", url: "https://www.behance.net/gallery/164272405/Craigslist-Redesign" }
                ]}
              description="Elevating the Craigslist experience and creating a sense of trust with a refined design system, clearer information hierarchy, and thoughtful safety features while keeping Craigslist's simplicity and minimalism." />
          </div>
          <div className="Project-highlights">
            <ProjectCard name="VoteAlly"
              highlight={true}
              tools={["Figma"]}
              solo={true}
              src="/pics/va.png"
              ready={true}
              links={
                [{ site: "web", url: "https://www.behance.net/gallery/163967077/VoteAlly" }
                ]}
              description="Streamlining the voting preparation process for voters who wish to cast smarter votes with less efforts and time." />
            <ProjectCard name='The Future of Contact Tracing'
              highlight={true}
              tools={["Figma"]}
              src="/pics/ct.png"
              ready={true}
              links={
                [{ site: "web", url: "https://www.behance.net/gallery/167001077/The-Future-of-Contact-Tracing?" },
                ]}
              description="Crafting the future of contact tracing for future pandemics that addresses ethical conerns by prioritizing users' preferences." />
          </div>
        </div>
        <div className='projects'>
          <div className='project-type'>
            <h2>Design + Development</h2><div className='hl'></div>
          </div>
          <div className="Project-highlights">
            <ProjectCard name='Sounds of Taipei'
              highlight={true}
              tools={["ReactJS", "Typescript", "CSS", "HTML", "Figma"]}
              src="/pics/st.gif"
              ready={true}
              type="design + development"
              links={
                [{ site: "web", url: "https://sounds-of-taipei.sandylee.site/" },
                { site: "github", url: "https://github.com/sl30724/fwd-project2" },
                ]}
              description="Crafting a delightful virtual experience that brings visitors to the city of Taipei with mesmerizing audio and visual effects." />
            <ProjectCard name='Museum of Rudeness'
              highlight={true}
              tools={["ReactJS", "Typescript", "WebGL", "CSS", "HTML", "Figma"]}
              src="/pics/mr.gif"
              ready={true}
              links={
                [{ site: "web", url: "" },
                ]}
              description="Reimagining virtual 3D museum experiences with just the right amount of fun, knowledge, and interaction." />
          </div>
        </div>
      </div>
    </>
  );
};

function ProjectCard(props: Project) {
  const ref = useRef(null) as any;

  // tools
  const tools = props.tools;
  const toolItems = tools.map((tool, index) =>
    <li key={index} className={"tool-item"}>{tool}</li>
  );

  // links
  const links = props.links;
  const linkItems = links.map((link, index) =>
    <li key={index} className="link-item">
      <a href={link.url} target="_blank" rel="noreferrer"><Icon icon={`${link.site === "web" ? "mdi:web" : "carbon:logo-github"}`} className={`project-icon`} /></a>
    </li>
  );

  return (
    <div className={`project-card${props.highlight ? "-highlight" : ""} ${props.solo ? "solo-card" : ""}`} ref={ref}>
      <div className="project-img">
        {props.ready ?
          <a href={props.links[0].url} target="_blank" rel="noreferrer">
            <img
              src={`${props.src}`}
              alt={"Preview of " + props.name}
            />
          </a>
          :
          <img
            src={`${props.src}.gif`}
            alt={"Preview of " + props.name}
          />
        }
      </div>
      <div className='project-header'>
        {props.highlight ?
          <p className='semi-bold'>{props.name}</p>
          :
          <p className='subtitle'>{props.name}</p>}
        {props.highlight ?
          <p className='small project-desc'>{props.description}</p>
          :
          <p className="caption">{props.description}</p>}
        {props.highlight && props.ready &&
          <a href={props.links[0].url} target="_blank" rel="noreferrer" className='button view-but-text'>View Details<Icon icon="radix-icons:open-in-new-window" className='view-icon' /></a>
        }
      </div>
    </div>
  );
}