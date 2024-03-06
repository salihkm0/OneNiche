
import { BestSelling } from '../Components/BestSelling'
// import FlashSale from '../Components/CountDown'
import Feature from '../Components/Feature'
import { FlashSale } from '../Components/FlashSale'
import HomePageSlider from '../Components/HomePageSlider'
import { LimtedTime } from '../Components/LimtedTime'
import { OurProducts } from '../Components/OurProducts'
import { HomeContainerMain } from '../UI/HomeStyle'
export default function Home() {
  return (
    <>
    
    
    <HomePageSlider/>
      <HomeContainerMain>
        
      <FlashSale/>
         {/* <Cart/> */}
      </HomeContainerMain>
      <BestSelling/>
      <LimtedTime/>
      <OurProducts/>
      <Feature/>
      
    </>
  )
}
