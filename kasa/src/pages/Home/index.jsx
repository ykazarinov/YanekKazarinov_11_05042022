import Banner from '../../components/Banner/index'
import BannerImage from '../../assets/images/index-banner.jpg'
import Data from '../../utils/data/logements.json'
import { useState } from 'react'
import Card from '../../components/Card/index'

function Home() {
  const [myData, setMyData] = useState(Data)

  let BannerTitle = 'Chez vous, partout et ailleurs'

  return (
    <div>
      <Banner title={BannerTitle} picture={BannerImage}></Banner>
      <section className='container content'>
        <div className='row'>
 
        {
          myData && myData.map(({id, title, cover}) => (
            <Card id={id} title={title} cover={cover}  key={id}>
            </Card>
          )
          )
        }
        </div>
      </section>
    </div>
    
  )
}

export default Home;