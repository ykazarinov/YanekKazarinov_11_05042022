import Banner from '../../components/Banner/index'
import BannerImage from '../../assets/images/index-banner.jpg'

function Home() {

  let BannerTitle = 'Chez vous, partout et ailleurs'

  return (
    <Banner title={BannerTitle} picture={BannerImage}></Banner>
  )
}

export default Home;