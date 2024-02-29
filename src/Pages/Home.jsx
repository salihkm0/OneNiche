
// import FlashSale from '../Components/FlashSale'
import FlashSale from '../Components/CountDown'
import HomePageSlider from '../Components/HomePageSlider'
import { HomeContainerMain } from '../Ui/HomeStyle'
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
