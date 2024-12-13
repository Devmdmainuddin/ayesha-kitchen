import Image from 'next/image';
import React from 'react';

const MenuCard1 = ({food}) => {
    const {name,description,price,image} = food;
  
    return (
        <div>
            <article className="rounded-xl bg-white p-3 group">
                <a href="#">
                    <div className="relative flex items-end overflow-hidden rounded-xl w-full h-[268px]">
                        <Image
                            fill
                            className='object-cover group-hover:scale-125 transition-all duration-300'
                            src={image} alt="Hotel Photo" />

                    </div>

                    <div className="mt-1 p-2">
                        <h2 className="text-slate-700">{name}</h2>
                        <p className="text-slate-400 mt-1 text-sm">{description}</p>

                        <div className="mt-3 flex items-end justify-between">
                            <p>
                                <span className="text-lg font-bold text-blue-500">BDT : {price}</span>
                                <span className="text-slate-400 text-sm">/Taka</span>
                            </p>

                            <div className="group inline-flex rounded-xl bg-blue-100 p-2 hover:bg-blue-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:text-blue-500 h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </a>
            </article>
        </div>
    );
};

export default MenuCard1;