
import Hero from "@/components/home/Hero";
import { Button } from "@/components/ui/button";
import PopularDesh from "@/components/home/PopularDesh";
import Offer from "@/components/home/Offer";
import Menu from "@/components/home/Menu";
import Newsletter from "@/components/home/Newsletter";
import Testimonal from "@/components/home/Testimonal";
import BookingTable from "@/components/home/BookingTable";
import About from "@/components/home/About";
import Cheif from "@/components/home/Cheif";
import Working from "@/components/home/Working";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div >
      
    <Hero/>
    <Offer/>
    <Working/>
    <PopularDesh/>
    <Menu/>
    <Cheif/>
    <Testimonal/>
    <BookingTable/>
    <About/>
    <Newsletter/>

    <Footer/>
    </div>
  );
}
