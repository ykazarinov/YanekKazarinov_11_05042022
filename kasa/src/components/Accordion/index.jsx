import React from "react"
import ArrowTop from '../../assets/images/arrow_top.svg'
import ArrowDown from '../../assets/images/arrow_down.svg'
import {useState} from 'react'


function Accordion(props){
    const {title, content, startState} = props
    let myStartState
    startState === 'opened' ? myStartState = 'opened': myStartState = 'closed'
    const [accord, accordIsOpen] = useState(myStartState)
    
    return(
        <div className={`${accord} accordion`}>
            <div className="accordion--title" onClick={()=>(
                    accord === 'opened' ? accordIsOpen('closed'): accordIsOpen('opened'))}>
                <span>{title}</span>
                <button className="accordion--arrow">

                </button>

            </div>
            <div className="accordion--content">
                {Array.isArray(content) ? 
                    (
                        <ul className="my-list">
                        {content.map((elem, i) => (<li key={i}>{elem}</li>))}
                    </ul>):
                    content
                }
            </div>
        </div>
    )
}

export default Accordion