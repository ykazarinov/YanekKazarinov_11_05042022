import { useParams } from 'react-router-dom'
import { useState } from 'react'
import Data from '../../utils/data/logements.json'
import Slider from '../../components/Slider/index'
import Rating from '../../components/Rating/index'
import React from 'react'
import Accordion from '../../components/Accordion'
import Tag from '../../components/Tag'
import {Navigate} from 'react-router-dom'

function Logement(){

    const { logementId } = useParams()
    const [myData, setMyData] = useState(Data)

    //поставить условие: если аппортемент = 0
    
    let appartement = myData.find(app => app.id === logementId)

    if(!appartement){
        return <Navigate to='*' />
        
    }
    const accordionTitle1 = 'Description'
    const accordionTitle2 = 'Équipements'

    return(
        <React.StrictMode>
            <Slider pictures={appartement.pictures} title={appartement.title}></Slider>
            <section className='container'>
                <div className='row options_row'>
                    <div className='col-lg-8 col-sm-12 options_cont'>
                        <h1>{appartement.title}</h1>
                        <div className='location'>{appartement.location}</div>
                        <div className='tags'>
                            {
                                appartement.tags && appartement.tags.map((tag, index) => (
                                   
                                    <Tag tag={tag} key={index}>{tag}</Tag>
                                ))
                            }
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-12 right_content'>
                        <div className='host'>
                            <div className='host-name'>{appartement.host.name}</div>
                            <img src={appartement.host.picture} alt={appartement.host.name} className='host-image' />
                        </div>
                        <Rating rating={appartement.rating}></Rating>
                        
                    </div>
                </div>

            </section>
            <section className='container accord-container'>
                <div className='row accord-row'>
                    <div className='col-lg-6 col-sm-12 accord-col'>
                        <Accordion 
                            title={accordionTitle1} 
                            content={appartement.description}
                            startState='opened'>

                        </Accordion>
                    </div>
                    <div className='col-lg-6 col-sm-12 accord-col'>
                        <Accordion 
                            title={accordionTitle2} 
                            content={appartement.equipments}
                            startState='opened'>

                        </Accordion>
                    </div>
                </div>

            </section>
        </React.StrictMode>
    )

}

export default Logement