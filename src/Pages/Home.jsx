
// import FlashSale from '../Components/FlashSale'
import FlashSale from '../Components/CountDown'
import HomePageSlider from '../Components/HomePageSlider'
import { HomeContainerMain } from '../Ui/HomeStyle'
import Cart from './Cart'
export default function Home() {
  return (
    <>
    
    
    <HomePageSlider/>
    <HomeContainerMain>
        <FlashSale/>
         {/* <Cart/> */}
    </HomeContainerMain>
    </>
  )
}
