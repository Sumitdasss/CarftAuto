
import HeroBanner from "../Componant/Layout/Video"
import CoreServices from "../Componant/Layout/Someservice"
import StatsSection from "../Componant/Layout/Counterup"
import ExpertMechanics from "../Componant/Layout/Worker"
import ProductSlider from "../Componant/Layout/Carpart"


const Page = () => {
  return (
    <div>
<HeroBanner/>
<CoreServices/>
<StatsSection/>
<ExpertMechanics/>
<ProductSlider/>

    </div>
  )
}

export default Page