
// import FlashSale from '../Components/FlashSale'
import FlashSale from '../Components/CountDown'
import Feature from '../Components/Feature'
import HomePageSlider from '../Components/HomePageSlider'
import MiniButton from '../Components/MiniButton'
import { HomeContainerMain } from '../UI/HomeStyle'
import Cart from './Cart'
export default function Home() {
  return (
    <>
    
    
    <HomePageSlider/>
    <MiniButton text = "Today's"/>
      <HomeContainerMain>
        
        <FlashSale/> 
         {/* <Cart/> */}
      </HomeContainerMain>
      <Feature/>
    </>
  )
}
