import Banner from '../../components/Banner/index'
import BannerImage from '../../assets/images/a-propos-banner.jpg'
import React from 'react'
import Data from '../../utils/data/apropos.json'
import { useState } from 'react'
import Accordion from '../../components/Accordion/index'

function Apropos() {

  const [myData, setMyData] = useState(Data)

  let BannerTitle = ''


  return (
    <React.StrictMode>
      <Banner title={BannerTitle} picture={BannerImage}></Banner>
      <section className='container accord-container'>
        <div className='row accord-row'>
            {myData.map(({title, content}, index)=>(
              <React.StrictMode>
                <div className='col-2'></div>
                <div className='col-8 accord-col'>
                  <Accordion key={index} title={title} content={content} startState='closed'></Accordion>
                </div>
                <div className='col-2'></div>
              </React.StrictMode>
            ))}
        </div>
      </section>
    </React.StrictMode>
  )
}

export default Apropos;