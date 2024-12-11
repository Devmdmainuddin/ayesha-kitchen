
import Hero from "@/components/home/Hero";
import { Button } from "@/components/ui/button";
import PopularDesh from "@/components/home/PopularDesh";
import Offer from "@/components/home/Offer";
import Menu from "@/components/home/Menu";
import Newsletter from "@/components/home/Newsletter";
import Testimonal from "@/components/home/Testimonal";
import BookingTable from "@/components/home/BookingTable";

export default function Home() {
  return (
    <div >
      
    <Hero/>
    <Offer/>
    <PopularDesh/>
    <Menu/>
    <Testimonal/>
    <BookingTable/>
    <Newsletter/>


       <Button>Click me</Button>
      
    
    
    </div>
  );
}
