
import { BestSelling } from '../Components/BestSelling'
import { Category } from '../Components/Category'
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
      <FlashSale/>
      <Category/>
      <BestSelling/>
      {/* <LimtedTime/> */}
      <OurProducts/>
      <Feature/>
      
    </>
  )
}
