import Container from "../Container";
import { Button } from "../ui/button";


const Working = () => {
    return (
        <div className="mt-[30px]">
            <Container>
                <div className="bg-[url('/wor.jpeg')] bg-cover bg-center bg-no-repeat p-4 flex flex-col md:flex-row rounded-sm relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                    <div className="flex  justify-between w-full relative h-[350px] md:items-center">
                        <div className="flex-1">
                            <h4></h4>
                            <h2 className="text-[36px] text-white capitalize">Working hours</h2>
                            <p className="text-white text-sm">Rolorem, beatae dolorum, praesentium itaque et quam quaerat</p>
                          <div className="flex gap-3 mt-6">
                          <Button className="capitalize text-[16px] bg-orange-400 hover:bg-orange-400 hover:scale-105 rounded-sm text-white transition-all duration-500">reservation</Button>  <Button className="capitalize text-orange-400 hover:text-white hover:bg-orange-400 hover:scale-105 rounded-sm bg-white transition-all duration-500 text-[16px]">contact us</Button>
                            </div>  
                           
                        </div>
                        <div className="bg-white p-9 text-[#142F33] absolute w-[354px] md:static bottom-0 translate-y-1/2 md:translate-y-0 left-1/2 -translate-x-1/2 md:translate-x-0">
                            <h2 className="text-[36px] capitalize">opaning-closed </h2>
                            <div className="flex flex-col justify-center items-center">
                                <p className="text-sm font-bold mt-[20px]">Sunday to Tuesday </p>
                                <p className="text-2xl font-extrabold mt-2">10 am <span className="text-orange-400">:</span> 10 pm</p>
                                <p className="text-sm font-bold mt-2">Friday to Saturday </p>
                                <p className="text-2xl font-extrabold mt-2">08 am <span className="text-orange-400">:</span> 08 pm</p>

                            </div>


                        </div>
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default Working;