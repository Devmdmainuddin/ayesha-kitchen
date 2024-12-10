"use client"
import React from 'react';
import Container from '../Container';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Link from 'next/link';
import MenuCard from '../card/MenuCard';
const Menu = () => {
    const items = [
        {
            image: "/h1.jpg",
            category: "sizzling",
            title: "kashmiri polao + veg korma + kola puri",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a consectetur velit, ac molestie ipsum. Donec sodales, massa et auctor.",
            price: 480,
            authorImage: "",
            autherName: "md.mainuddin",
            creatrAt: "14 Aug"
        },
        {
            image: "/h2.jpg",
            category: "Dessert",
            title: "Basmati Rice /Nan + kaju butter masala + sabzi dal",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a consectetur velit, ac molestie ipsum. Donec sodales, massa et auctor.",
            price: 550,
            authorImage: "",
            autherName: "md.mainuddin",
            creatrAt: "14 Aug"
        },
        {
            image: "/h3.jpg",
            category: "Appetizer",
            title: "basmati rice / nan + mix vegetable + yellow dal",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a consectetur velit, ac molestie ipsum. Donec sodales, massa et auctor.",
            price: 450,
            authorImage: "",
            autherName: "md.mainuddin",
            creatrAt: "14 Aug"
        },
        {
            image: "/h4.jpg",
            category: "Mutton Biriyani",
            title: "Pellentesque a consectetur velit, massa et auctor.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a consectetur velit, ac molestie ipsum. Donec sodales, massa et auctor.",
            authorImage: "",
            autherName: "md.mainuddin",
            creatrAt: "14 Aug"
        }
    ];

    return (
        <div className='mt-[86px]'>
            <Container>
            <div className="border-b pb-3 flex justify-between items-center">
                    <h2 className="text-2xl capitalize">menu items </h2>
                    <button className='capitalize py-2 px-4 bg-[#25bb4a] text-white '>show more</button>
                </div>
                <div className='grid grid-col md:grid-cols-2 lg:grid-cols-3 mt-9'>
                    <div className=''>
                        <h3>Breakfast</h3>
                        <div>
                            <Carousel
                                orientation="vertical"
                                plugins={[
                                    Autoplay({
                                        delay: 2000,
                                    }),
                                ]}
                                opts={{
                                    align: "start",
                                    loop: true
                                }}
                                className="  mx-auto mt-6">
                                <CarouselContent className="-ml-6 mt-0 w-full h-[375px]  p-2">

                                    {items.map((item, idx) => <CarouselItem key={idx} className="pt-0 px-6 basis-3  h-[375px]">
                                        <MenuCard item={item}></MenuCard>
                                    </CarouselItem>)}
                                </CarouselContent>
                                <CarouselPrevious className='-top-2.5 hover:bg-[#25bb4a] hover:text-white transition-all duration-500' />
                                <CarouselNext className='-bottom-5 hover:bg-[#25bb4a] hover:text-white transition-all duration-500' />
                            </Carousel>
                        </div>
                    </div>
                    <div className=''>
                        <h3>Dinner</h3>
                        <div>
                            <Carousel
                                orientation="vertical"
                                plugins={[
                                    Autoplay({
                                        delay: 2000,
                                    }),
                                ]}
                                opts={{
                                    align: "start",
                                    loop: true
                                }}
                                className="  mx-auto mt-6">
                                <CarouselContent className="-ml-6 mt-0 w-full h-[375px]  p-2">

                                    {items.map((item, idx) => <CarouselItem key={idx} className="pt-0 px-6 basis-3  h-[375px]">
                                        <MenuCard item={item}></MenuCard>
                                    </CarouselItem>)}
                                </CarouselContent>
                                <CarouselPrevious className='-top-2.5 hover:bg-[#25bb4a] hover:text-white transition-all duration-500' />
                                <CarouselNext className='-bottom-5 hover:bg-[#25bb4a] hover:text-white transition-all duration-500' />
                            </Carousel>
                        </div>
                    </div>

                    <div className=''>
                        <h3>Drinks</h3>
                        <div>
                            <Carousel
                                orientation="vertical"
                                plugins={[
                                    Autoplay({
                                        delay: 2000,
                                    }),
                                ]}
                                opts={{
                                    align: "start",
                                    loop: true
                                }}
                                className="  mx-auto mt-6">
                                <CarouselContent className="-ml-6 mt-0 w-full h-[375px]  p-2">

                                    {items.map((item, idx) => <CarouselItem key={idx} className="pt-0 px-6 basis-3  h-[375px]">
                                        <MenuCard item={item}></MenuCard>
                                    </CarouselItem>)}
                                </CarouselContent>
                                <CarouselPrevious className='-top-2.5 hover:bg-[#25bb4a] hover:text-white transition-all duration-500' />
                                <CarouselNext className='-bottom-1.5 hover:bg-[#25bb4a] hover:text-white transition-all duration-500' />
                            </Carousel>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Menu;