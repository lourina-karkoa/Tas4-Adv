import './App.css'
import NavbarL from './component/Navbar/Navbar'
import {minNav,dataNav,logo,dropdown,data2Nav} from './data/DataNavbar/DataNavbar'
import {dataCarosal} from './data/DataHero/DataHero'
import {dataCardSecT} from './data/DataSec2/DataSec2'
import {dataSec4Ul} from './data/DataSec4/DataSec4'
import {dataSec5} from './data/DataSec5/DataSec5'
import {dataMapSec6} from './data/DataSec6/DataSec6'
import {dataForm1,dataForm2} from './data/DataSec8/DataSec8'
import {dataSection7Part1,dataSection7Part2} from './data/DataSec7/DataSec7'
import {dataSection9} from './data/DataSec9/DataSec9'
import {dataSec10F,dataSec10S,dataSec10TH,dataSec10E,dataSec10N} from './data/DataSec10/DataSec10'
import { MdOutlineAccessTime,} from 'react-icons/md'
import {dataSec11} from './data/DataSec11/DataSec11'
import {dataAccordion} from './data/DataAccordione/DataAccordione'
import {dataSec12F,dataSec12S,dataSec12TH,dataGallery} from './data/DataSec12/DataSec12'
import {dataSec13Card } from './data/DataSec13/DataSec13'
import {dataSectio16} from './data/DataSec16/DataSec16'
import {dataFooterF,dataFooterS,dataFooterTH} from './data/DataFooter/DataFooter'
import { CiMobile2 } from 'react-icons/ci'
import Hero from './component/Hero/Hero'
import about from './assets/imges/about.jpg'
import features from './assets/imges/features.jpg'
import CardSection2 from './component/CardSection2/CardSection2'
import Section3 from './component/Section3/Section3'
import Section4 from './component/Section4/Section4'
import { FaCirclePlay, } from 'react-icons/fa6'
import Section6 from './component/Section6/Section6'
import Section7 from './component/Section7/Section7'
import Section8 from './component/Section8/Section8'
import Section9 from './component/Section9/Section9'
import Section11 from './component/Section11/Section11'
import Section10 from './component/Section10/Section10'
import Section14 from './component/Section14/Section14'
import Section13 from './component/Section13/Section13'
import Section15 from './component/Section15/Section15'
import Section16 from './component/Section16/Section16'
import Footer from './component/Footer/Footer'
import Section12 from './component/Section12/Section12'

function App() {
  
  return (
  <>
  <NavbarL minNav={minNav} dataNav={dataNav} logo={logo} drop={dropdown} data2={data2Nav} btn={'Make an Appointment'}>
  <MdOutlineAccessTime className="fs-5"/>
  <CiMobile2 className="fs-5"/>
  </NavbarL>
  <Hero dataCarousel={dataCarosal} btnHero={'Read More'}/>
  <CardSection2 dataCardSec2={dataCardSecT} className2={'mt-2'}/>
  <Section3 dataSec3={{h2:'in an emergency? Need help now?',p:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat? nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',btn:'Make an APointment'}}/>
  <Section4 dataSec4={{img:about,icon:<FaCirclePlay className='fs-icon text-color'/>,h2:'Voluptatem dignissimos provident quasi corporis volutates sit assumenda ',textO:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos esse porro modi aliquid cum pariatur eum. Enim, ipsa!',textS:'ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat? nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}} dataSec4Ul={dataSec4Ul}/>
  <CardSection2 dataCardSec2={dataSec5} className1={'d-flex flex-row'} className3={'p-2'}/>
  <Section6 dataSec6={{img:features}} dataMapSec6={dataMapSec6}/>
  <Section7 dataSection7Part1={dataSection7Part1} dataSection7Part2={dataSection7Part2}/>
  <Section8 dataFormF={dataForm1} dataFormS={dataForm2} dataDate={{id:'formGridDate',type:'date',placeholder:'Your Date'}} dataFinaly={{placeholder:"Message (Optional)",dataButton:"Make an Appointment",rows:4}}/>
  <Section9 dataSection9={dataSection9}/>
  <Section10 dataSec10F={dataSec10F} dataSec10S={dataSec10S} dataSec10TH={dataSec10TH} dataSec10E={dataSec10E} dataSec10N={dataSec10N}/>
  <Section11 sec11={dataSec11}/>
  <Section12 dataSec12F={dataSec12F} dataSec12S={dataSec12S} dataSec12TH={dataSec12TH} dataGallery={dataGallery}/>
  <Section13 dataSec13Card={dataSec13Card}/>
  <Section14 dataAccordion={dataAccordion}/>
  <Section15/>
  <Section16 dataSectio16={dataSectio16}/>
  <Footer dataFooterF={dataFooterF} dataFooterS={dataFooterS} dataFooterTH={ dataFooterTH}/>
  
  </>
  )
}

export default App
