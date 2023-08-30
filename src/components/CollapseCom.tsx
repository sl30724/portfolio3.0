import { useCollapse } from 'react-collapsed';
import { useState, FC, PropsWithChildren } from "react";
import { Icon } from '@iconify-icon/react';
import '../styles/Col.css';

interface Col {
    name?: string;
}

const CollapseCom: FC<PropsWithChildren<Col>> = ({ children, name }) => {
    const [isExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

    return (
        <div className='col' id={name}>
            <button className={`colBut`}
                {...getToggleProps({
                    onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                })}
            >
                {isExpanded ? <div className='colButContent'><p className='subtitle'>Research fan? Click to see process</p> <Icon icon='icon-park-solid:up-c' width={26} className='icon'/></div> : <div className='colButContent'><p className='subtitle'>Research fan? Click to see process</p><img src='/pics/question-box.gif' width='30px' /></div>}
            </button>
            <section {...getCollapseProps()}>
                <div className='colContent'>
                    {children}
                </div>
            </section>
        </div>
    )
}

export default CollapseCom;
// export default function CollapseCom() {
//     const [isExpanded, setExpanded] = useState(false)
//     const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

//     return (
//         <div className='col'>
//             <button className='colBut'
//                 {...getToggleProps({
//                     onClick: () => setExpanded((prevExpanded) => !prevExpanded),
//                 })}
//             >
//                 Research fan? Click to view the process {isExpanded ? <Icon icon='icon-park-solid:down-c' /> : <Icon icon='icon-park-solid:up-c' />}
//             </button>
//             <section {...getCollapseProps()} className='colContent'>
//                 <div className='projectContent'>
//                     <h4 className='gradientText'>Focusing on Users</h4>
//                     <p>Embracing a user-centered approach, I crafted a compelling User Persona and a thorough Emotional Journey Map. These strategic tools crystallized users' motivations, concerns, feelings, and goals, guiding me in identifying pain points and opportunities for transformation.</p>
//                     <div className='imgGallery'>
//                         <div className='projectImg' id='cr-persona'>
//                             <Zoom>
//                                 <img src="/pics/cr/Cr_userPersona.png" alt="Craigslist User Persona" />
//                             </Zoom>
//                             <p className='imgCaption caption'><Icon icon='mdi:arrow-drop-up' style={{ fontSize: '26px' }} /> User Persona</p>
//                         </div>
//                         <div className='projectImg' id='cr-journey'>
//                             <Zoom>
//                                 <img src="/pics/cr/Cr_userMap.png" alt="Craigslist user journey map" />
//                             </Zoom>
//                             <p className='imgCaption caption'><Icon icon='mdi:arrow-drop-up' style={{ fontSize: '26px' }} /> User Emotional Journey</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='projectContent'>
//                     <h4 className='gradientText'>Designing for Purpose</h4>
//                     <p>With a clearer view of users' experiences, I distilled the Job to Be Done, a concise guiding principle steering the project. This served as a compass, ensuring that every design decision would harmoniously align with the overarching objective.</p>
//                     <div className='projectImg'>
//                         <Zoom>
//                             <img src="/pics/cr/Cr_jtbd.png" alt="Craigslist job to be done" />
//                         </Zoom>
//                     </div>
//                 </div>
//                 <div className='projectContent'>
//                     <h4 className='gradientText'>Crafting the Solution</h4>
//                     <p>With purpose as my guide, I mapped out an enhanced User Journey. Enriched with redesigned elements and new features that aligned with users' needs, this map showcased how each innovation contributed to a more enriched and satisfying experience.
//                         <br />
//                         <br />Moreover, I crafted design strategies for each function based on psychological principles, ensuring each feature resonated on a psychological level. This not only bolstered usability but also engaged users on a deeper level.
//                     </p>
//                     <div className='imgGallery'>
//                         <div className='projectImg' id='cr-improvedMap'>
//                             <Zoom>
//                                 <img src="/pics/cr/Cr_improvedMap.png" alt="Craigslist improved user journey map" />
//                             </Zoom>
//                             <p className='imgCaption caption'><Icon icon='mdi:arrow-drop-up' style={{ fontSize: '26px' }} /> Improved Journey Map</p>
//                         </div>
//                         <div className='projectImg' id='cr-strategies'>
//                             <Zoom>
//                                 <img src="/pics/cr/Cr_featureDetails.png" alt="Craigslist feature details" />
//                             </Zoom>
//                             <p className='imgCaption caption'><Icon icon='mdi:arrow-drop-up' style={{ fontSize: '26px' }} /> Design Strategies</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     )
// }