
// import FlashSale from '../Components/FlashSale'
import FlashSale from '../Components/CountDown'
import Feature from '../Components/Feature'
import HomePageSlider from '../Components/HomePageSlider'
import { HomeContainerMain } from '../Ui/HomeStyle'
import Cart from './Cart'
import ProductDetails from './ProductDetails'
export default function Home() {
  return (
    <>
    
    
    {/* <HomePageSlider/>
      <HomeContainerMain>
        <FlashSale/> 
      </HomeContainerMain>
      <Feature/> */}
      <ProductDetails />
    </>
  )
}
