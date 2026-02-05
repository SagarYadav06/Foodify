import Card from "./Card"
import Home from "./Home"
import Layout from "./Layout"
import Menu from "./Menu"
import Offers from "./Offers"

 

const Hero = () => {
  return (
     <>
    <Layout>
        <Home />
        <Card />
        <Offers />
        <Menu />
    </Layout>
     </>

  )
}

export default Hero