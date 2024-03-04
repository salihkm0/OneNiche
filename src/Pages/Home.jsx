
// import FlashSale from '../Components/FlashSale'
import { BestSelling } from '../Components/BestSelling'
import FlashSale from '../Components/CountDown'
import Feature from '../Components/Feature'
import HomePageSlider from '../Components/HomePageSlider'
import { LimtedTime } from '../Components/LimtedTime'
import MiniButton from '../Components/MiniButton'
import { OurProducts } from '../Components/OurProducts'
import { HomeContainerMain } from '../UI/HomeStyle'
export default function Home() {
  return (
    <>
    
    
    <HomePageSlider/>

    <MiniButton text = "Today's"/>

      <HomeContainerMain>
        
        <FlashSale/> 
      </HomeContainerMain>

      <BestSelling/>
      <LimtedTime/>
      <OurProducts/>
      <Feature/>
      
    </>
  )
}
