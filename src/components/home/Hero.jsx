import * as React from "react"

import {
    Carousel,
    CarouselContent,
    CarouselItem,

} from "@/components/ui/carousel"


import Container from "../Container";
import Image from "next/image";

const Hero = () => {

    return (
        <div>
            <Container>
                <Carousel className="w-full  mx-auto">
                    <CarouselContent className="-ml-6">


                        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3  h-[400px]">
                            <div style={{ width: '100%', height: '400px', position: 'relative' }}>
                                <Image
                                    src="/dgt.jpeg"
                                    alt="Example Image"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3  h-[400px]">
                            <div style={{ width: '100%', height: '400px', position: 'relative' }}>
                                <Image
                                    src="/dgt.jpeg"
                                    alt="Example Image"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3  h-[400px]">
                            <div style={{ width: '100%', height: '400px', position: 'relative' }}>
                                <Image
                                    src="/dgt.jpeg"
                                    alt="Example Image"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3  h-[400px]">
                            <div style={{ width: '100%', height: '400px', position: 'relative' }}>
                                <Image
                                    src="/dgt.jpeg"
                                    alt="Example Image"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3  h-[400px]">
                            <div style={{ width: '100%', height: '400px', position: 'relative' }}>
                                <Image
                                    src="/dgt.jpeg"
                                    alt="Example Image"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3  h-[400px]">
                            <div style={{ width: '100%', height: '400px', position: 'relative' }}>
                                <Image
                                    src="/dgt.jpeg"
                                    alt="Example Image"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3  h-[400px]">
                            <div style={{ width: '100%', height: '400px', position: 'relative' }}>
                                <Image
                                    src="/dgt.jpeg"
                                    alt="Example Image"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        </CarouselItem>
                        

                    </CarouselContent>

                </Carousel>
            </Container>
        </div>
    );
};

export default Hero;