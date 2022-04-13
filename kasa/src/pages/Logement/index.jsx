import { useParams } from 'react-router-dom'
import { useState } from 'react'
import Data from '../../utils/data/logements.json'
import Slider from '../../components/Slider/index'
import Rating from '../../components/Rating/index'
import React from 'react'
import Accordion from '../../components/Accordion'
import Tag from '../../components/Tag'

function Logement(){

    const { logementId } = useParams()
    const [myData, setMyData] = useState(Data)
    let appartement = myData.find(app => app.id === logementId)

    const accordionTitle1 = 'Description'
    const accordionTitle2 = 'Équipements'

    return(
        <React.StrictMode>
            <Slider pictures={appartement.pictures} title={appartement.title}></Slider>
            <section className='container'>
                <div className='row'>
                    <div className='col-8'>
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
                    <div className='col-4 right_content'>
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
                    <div className='col-6 accord-col'>
                        <Accordion 
                            title={accordionTitle1} 
                            content={appartement.description}
                            startState='opened'>

                        </Accordion>
                    </div>
                    <div className='col-6 accord-col'>
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