import Image from "next/image";
import Container from "../Container";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const About = () => {
    return (
        <div
            className="mt-[120px] relative py-[50px] bg-cover bg-center bg-no-repeat overflow-hidden "
            style={{
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url('/abg.jpeg')"
            }}
        >
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                        <h4 className="text-white text-sm">Why people choose us?</h4>
                        <h2 className="text-white text-3xl mt-2 font-semibold">our restaurant</h2>
                        <p className="text-white mt-2">Our kitchen is rooted in an appreciation for exceptional homegrown ingredients, thoughtful-yet-simple preparations, and a passion for breathing new life into Old World recipes. Desserts borrow from treasured family recipes extending back four generations. In addition to the menus listed here, we offer a selection of daily specials. </p>
                        <div className="bg-white  p-6 rounded-sm mt-4">
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className='text-2xl'>Is it accessible?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes. It adheres to the WAI-ARIA design pattern.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className='text-2xl'>Is it accessible?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes. It adheres to the WAI-ARIA design pattern.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger className='text-2xl'>Is it accessible?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes. It adheres to the WAI-ARIA design pattern.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                        </div>

                    </div>
                    <div className="flex flex-col justify-center gap-2 items-center">
                        <div className="flex gap-2">
                            <div className="lg:w-[268px]  p-2 rounded-sm border border-white bg-white text-[#142F33] hover:bg-red-100 flex flex-col justify-between transition ease-in-out duration-500">
                                <Image src='/h2.jpg' alt='image' width={500} height={500} className="w-[60px]  h-[60px] rounded-full mx-auto" />
                                <div>
                                    <h2 className="text-center text-xl ">100% FRESH PRODUCTS</h2>
                                    <p className="text-center mt-3">All your Fresh favorites are now available for takeout or delivery! Booking to order for pick up or get delivery straight to your door.</p>
                                </div>
                            </div>
                            <div className="lg:w-[268px]  p-2 rounded-sm border border-white bg-white text-[#142F33] hover:bg-lime-200 flex flex-col justify-between transition ease-in-out duration-500">
                                <Image src='/h2.jpg' alt='image' width={500} height={500} className="w-[60px]  h-[60px] rounded-full mx-auto" />
                                <div>
                                    <h2 className="text-center text-xl ">DELICIOUS FOOD</h2>
                                    <p className="text-center mt-3">Food that is delicious has a very pleasant taste. There’s always a wide selection of delicious meals to choose from.</p>
                                </div>
                            </div>

                        </div>
                        <div className="flex gap-2">
                            <div className="lg:w-[268px]  p-2 rounded-sm border border-white bg-white text-[#142F33] hover:bg-pink-200 flex flex-col justify-between transition ease-in-out duration-500">
                                <Image src='/h2.jpg' alt='image' width={500} height={500} className="w-[60px]  h-[60px] rounded-full mx-auto" />
                                <div>
                                    <h2 className="text-center text-xl ">FRIENDLY STAFF</h2>
                                    <p className="text-center mt-3">If someone is friendly, they behave in a pleasant, kind way, and like to be with other people.</p>
                                </div>
                            </div>
                            <div className="lg:w-[268px]  p-2 rounded-sm border border-white bg-white text-[#142F33]  hover:bg-green-200  flex flex-col justify-between transition ease-in-out duration-500">
                                <Image src='/h2.jpg' alt='image' width={500} height={500} className="w-[60px]  h-[60px] rounded-full mx-auto" />
                                <div>
                                    <h2 className="text-center text-xl ">RELAXING ATMOSPHERE</h2>
                                    <p className="text-center mt-3">The atmosphere was very relaxed and fun. It’s a relaxed atmosphere although it’s businesslike.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>




            </Container>
        </div>
    );
};

export default About;