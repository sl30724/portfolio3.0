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
                {isExpanded ? <div className='colButContent'><p className='subtitle'>Research fan? Click to see process</p> <Icon icon='icon-park-solid:up-c' width={26} className='icon'/></div> : <div className='colButContent'><p className='subtitle'>Research fan? Click to see process</p><img src='/pics/question-box.gif' width='30px' alt="question box icon"/></div>}
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