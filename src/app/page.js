import Hero from "@/components/home/Hero";
import { Button } from "@/components/ui/button";
import PopularDesh from "@/components/home/PopularDesh";
import Offer from "@/components/home/Offer";
import Menu from "@/components/home/Menu";

export default function Home() {
  return (
    <div >
      
    <Hero/>
    <Offer/>
    <PopularDesh/>
    <Menu/>


       <Button>Click me</Button>
      
    
    
    </div>
  );
}
