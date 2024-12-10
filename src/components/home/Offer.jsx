"use client"
import React from 'react';
import Container from '../Container';
import {
    Carousel,
    CarouselContent,
    CarouselItem,

} from "@/components/ui/carousel"
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image';
const Offer = () => {
    const items = [
        { image: '/offer1.jpeg' },
        { image: '/offer2.jpeg' },
        { image: '/offer3.jpeg' },
        { image: '/offer4.jpeg' },
        { image: '/offer5.jpeg' },
        { image: '/offer6.jpeg' },

    ]
    return (
        <div>
            <Container>
                <Carousel
                    plugins={[
                        Autoplay({
                            delay: 2000,
                        }),
                    ]}
                    opts={{
                        align: "start",
                        loop: true
                    }}
                    className="w-full  mx-auto mt-6">
                    <CarouselContent className="-ml-6">

                        {items.map((item, idx) => <CarouselItem key={idx} className="  w-full ">

                             <Image src={item.image} alt='image' width={500} height={500} className=" w-full h-auto sm:h-[369px]"/> 

                        </CarouselItem>)}
                    </CarouselContent>

                </Carousel>
            </Container>
        </div>
    );
};

export default Offer;