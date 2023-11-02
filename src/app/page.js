import NavBar from "./components/Navbar/NavBar";
import Dawa from "./components/Dawa/Dawa";
import Cards from "./components/fundamental/Cards";
import Offering from "./components/offering/Offering";
import Partner from "./components/partner/Partner";
import Curosel from "./components/curosel/Curosel";
import Incabution from "./components/Incabution/Incabution";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";


export default function Home() {
  return (
    <div>
      <NavBar />  
      <Dawa />
      <Cards/>
      <Offering />
      <Partner />
    {/* <Incabution /> */}
      <Curosel />
      <Contact />
      <Footer />
     
    </div>
  )
}
