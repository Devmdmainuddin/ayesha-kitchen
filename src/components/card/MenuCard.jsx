import Image from 'next/image';
import React from 'react';

const MenuCard = ({item}) => {
    return (
        <div className='flex  justify-between items-center border mt-2 pl-5 group'>
            <div className="content flex-1">
                <h3 className="font-semibold text-[16px] uppercase text-orange-400">{item?.title}</h3>
                <p>{item?.descaption}</p>
                <span className="text-lg font-bold">${item?.price}</span>
            </div>
            <div className="image  w-[86px] h-[114px] relative overflow-hidden">
                <Image src={item?.image} fill objectFit="cover" alt={item?.title} className='group-hover:scale-125 group-hover:skew-x-6 transition-all duration-500'/>
            </div>
        </div>
    );
};

export default MenuCard;