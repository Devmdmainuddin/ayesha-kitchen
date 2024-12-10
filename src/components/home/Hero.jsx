"use client"
import * as React from "react"
import Marquee from "react-fast-marquee";

import Link from "next/link";
const Hero = () => {
    const items = [
        {
            image: "/h1.jpg",
            category: "sizzling",
            title: "kashmiri polao + veg korma + kola puri",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a consectetur velit, ac molestie ipsum. Donec sodales, massa et auctor.",
            price:480,
            authorImage: "",
            autherName: "md.mainuddin",
            creatrAt: "14 Aug"
        },
        {
            image: "/h2.jpg",
            category: "Dessert",
            title: "Basmati Rice /Nan + kaju butter masala + sabzi dal",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a consectetur velit, ac molestie ipsum. Donec sodales, massa et auctor.",
            price:550,
            authorImage: "",
            autherName: "md.mainuddin",
            creatrAt: "14 Aug"
        },
        {
            image: "/h3.jpg",
            category: "Appetizer",
            title: "basmati rice / nan + mix vegetable + yellow dal",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a consectetur velit, ac molestie ipsum. Donec sodales, massa et auctor.",
            price:450,
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
        <div>
            <Marquee pauseOnHover={true} className="">
                {items.map((item, idx) => <div key={idx}
                    style={{
                        backgroundImage: `linear-gradient(180deg, hsla(0, 0%, 6%, 0) 41.54%, hsla(0, 0%, 6%, 0.621) 72.29%, #101010), url('${item.image}')`,
                    }}
                    className="relative w-[364px] bg-cover bg-center bg-no-repeat h-[400px]" >
                    <span className="absolute top-4 left-4 px-4 py-1 bg-[#25bb4a] text-white inline-flex items-center justify-center mb-2 shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px]">
                        {item.category}
                    </span>
                    <div className="p-4 absolute bottom-0 left-0 z-20">
                        <h2 className="text-2xl font-semibold text-gray-100 leading-tight">
                            {item.title}
                        </h2>
                        <p className="text-white mt-3">BDT: {item.price} Taka</p>
                        <div className="flex mt-3">
                           <Link href=''> <button className="py-2 px-4 bg-[#11b6f8df] text-white rounded-sm capitalize">view details </button> </Link>
                           
                        </div>
                    </div>
                </div>)}

            </Marquee>

        </div>
    );
};

export default Hero;