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
            title: "Australian undercut beef carpaccio",
            description: "Fresh Parmesan Cheese, Garlic, Olive oil, Balsamic Vinegar, arugula",
            price: 480,
            authorImage: "",
            autherName: "md.mainuddin",
            creatrAt: "14 Aug"
        },
        {
            image: "/h2.jpg",
            category: "Dessert",
            title: "seared yellow fin tuna tataki",
            description: "Sesame Seed Crusted with Avocado Salsa and Teriyaki Sauce",
            price: 550,
            authorImage: "",
            autherName: "md.mainuddin",
            creatrAt: "14 Aug"
        },
        {
            image: "/h3.jpg",
            category: "Appetizer",
            title: "authentic swiss cheese fondu ",
            description: "Swiss Cheese & Emmental Cheese with Garlic Bread Cotton and Crispy Fried Chicken",
            price: 450,
            authorImage: "",
            autherName: "md.mainuddin",
            creatrAt: "14 Aug"
        },
        {
            image: "/h4.jpg",
            category: "Mutton Biriyani",
            title: "Fried calamari with truffle ",
            description: "Rocket leafs, Truffle Oil, Tartar Sauce",
            authorImage: "",
            autherName: "md.mainuddin",
            creatrAt: "14 Aug"
        },
        {
            image: "/h5.jpg",
            category: "Appetizer",
            title: "fried bell pepper and tomato chili",
            description: "Bell Peppers, Onions, Tomatoes, Garlic, Cumin, Oregano, Salt & Pepper",
            price: 350,
            authorImage: "",
            autherName: "md.mainuddin",
            creatrAt: "14 Aug"
        },
        {
            image: "/h6.jpg",
            category: "Mutton Biriyani",
            title: "Creamy Wild Mushroom Truffle Soup",
            description: "Chopped Onions, Green Beans, Carrots, Peas, Cabbage, Fresh Tomatoes, Cilantro",
            price: 400,
            authorImage: "",
            autherName: "md.mainuddin",
            creatrAt: "14 Aug"
        },
        {
            image: "/h7.jpg",
            category: "Appetizer",
            title: "fried mixed vegetable",
            description: "Chopped Onions, Green Beans, Carrots, Peas, Cabbage, Fresh Tomatoes, Cilantro",
            price: 400,
            authorImage: "",
            autherName: "md.mainuddin",
            creatrAt: "14 Aug"
        }
    ];

    return (
        <div className='mt-[86px]'>
            <Container>
                <div className="border-b pb-3 flex justify-between items-center">
                    <div>
                    <h2 className="text-2xl capitalize">menu items </h2>
                        
                    </div>
                    
                    <button className='capitalize py-2 px-4 bg-[#25bb4a] text-white '>show more</button>
                </div>
                <div className='grid grid-col md:grid-cols-2 lg:grid-cols-3 mt-9'>
                    <div className=''>
                        <h3 className='text-xl'>Breakfast</h3>
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
                                className=" mt-6">
                                <CarouselContent className="-ml-6 mt-0 w-full h-[375px]  p-2">

                                    {items.map((item, idx) => <CarouselItem key={idx} className="pt-0  basis-3  h-[375px]">
                                        <MenuCard item={item}></MenuCard>
                                    </CarouselItem>)}
                                </CarouselContent>
                                <CarouselPrevious className='-top-2.5 hover:bg-[#25bb4a] hover:text-white transition-all duration-500' />
                                <CarouselNext className='-bottom-5 hover:bg-[#25bb4a] hover:text-white transition-all duration-500' />
                            </Carousel>
                        </div>
                    </div>
                    <div className=''>
                        <h3 className='text-xl'>Dinner</h3>
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
                                className=" mt-6">
                                <CarouselContent className="-ml-6 mt-0 w-full h-[375px]  p-2">

                                    {items.map((item, idx) => <CarouselItem key={idx} className="pt-0  basis-3  h-[375px]">
                                        <MenuCard item={item}></MenuCard>
                                    </CarouselItem>)}
                                </CarouselContent>
                                <CarouselPrevious className='-top-2.5 hover:bg-[#25bb4a] hover:text-white transition-all duration-500' />
                                <CarouselNext className='-bottom-5 hover:bg-[#25bb4a] hover:text-white transition-all duration-500' />
                            </Carousel>
                        </div>
                    </div>

                    <div className=''>
                        <h3 className='text-xl'>Drinks</h3>
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
                                className=" mt-6">
                                <CarouselContent className="-ml-6 mt-0 w-full h-[375px]  p-2">

                                    {items.map((item, idx) => <CarouselItem key={idx} className="pt-0  basis-3  h-[375px]">
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