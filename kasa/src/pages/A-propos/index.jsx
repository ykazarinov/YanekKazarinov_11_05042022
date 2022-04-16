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
              <React.StrictMode key={'strict' +  Math.floor(Math.random() * 100)}>
                <div className='col-lg-1 col-sm-0'></div>
                <div className='col-lg-10 col-sm-12 accord-col'>
                  <Accordion key={title.split(' ')[0] + index } title={title} content={content} startState='opened'></Accordion>
                 
                </div>
                <div className='col-lg-1 col-sm-0'></div>
              </React.StrictMode>
            ))}
        </div>
      </section>
    </React.StrictMode>
  )
}

export default Apropos;