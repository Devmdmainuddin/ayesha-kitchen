import Image from "next/image";
import Container from "../Container";

const About = () => {
    return (
        <div
            className="mt-[120px] relative py-[50px] bg-cover bg-center bg-no-repeat overflow-hidden "
            style={{
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url('/abg.jpeg')"
            }}
        >
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div>
                        <h4 className="text-white text-sm">Why people choose us?</h4>
                        <h2 className="text-white text-3xl mt-2 font-semibold">our restaurant</h2>
                    </div>
                    <div className="flex flex-col justify-center gap-2">
                    <div className="flex gap-2">
                        <div className="w-[268px]  p-2 rounded-sm border border-white bg-white text-[#142F33] hover:bg-red-100 flex flex-col justify-between transition ease-in-out duration-500">
                            <Image src='/h2.jpg' alt='image' width={500} height={500} className="w-[60px]  h-[60px] rounded-full mx-auto" />
                            <div>
                                <h2 className="text-center text-xl ">100% FRESH PRODUCTS</h2>
                                <p className="text-center mt-3">All your Fresh favorites are now available for takeout or delivery! Booking to order for pick up or get delivery straight to your door.</p>
                            </div>
                        </div>
                        <div className="w-[268px]  p-2 rounded-sm border border-white bg-white text-[#142F33] hover:bg-lime-200 flex flex-col justify-between transition ease-in-out duration-500">
                            <Image src='/h2.jpg' alt='image' width={500} height={500} className="w-[60px]  h-[60px] rounded-full mx-auto" />
                            <div>
                                <h2 className="text-center text-xl ">DELICIOUS FOOD</h2>
                                <p className="text-center mt-3">Food that is delicious has a very pleasant taste. There’s always a wide selection of delicious meals to choose from.</p>
                            </div>
                        </div>

                    </div>
                    <div className="flex gap-2">
                        <div className="w-[268px]  p-2 rounded-sm border border-white bg-white text-[#142F33] hover:bg-pink-200 flex flex-col justify-between transition ease-in-out duration-500">
                            <Image src='/h2.jpg' alt='image' width={500} height={500} className="w-[60px]  h-[60px] rounded-full mx-auto" />
                            <div>
                                <h2 className="text-center text-xl ">FRIENDLY STAFF</h2>
                                <p className="text-center mt-3">If someone is friendly, they behave in a pleasant, kind way, and like to be with other people.</p>
                            </div>
                        </div>
                        <div className="w-[268px]  p-2 rounded-sm border border-white bg-white text-[#142F33]  hover:bg-green-200  flex flex-col justify-between transition ease-in-out duration-500">
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