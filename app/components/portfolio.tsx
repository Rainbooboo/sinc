'use client'

import Image from 'next/image';
import { useState } from 'react';



export default function Portfolio() {
    const [portfolioItems, setPortfolioItems] = useState([
        {
          name: 'kofoundme',
          imageUrl: '/img/kofoundme.png',
        },
        {
          name: 'FOUNDERS SCHOOL',
          imageUrl: '/img/founders_school.png',
        },
        {
          name: 'BUJ NEWS',
          imageUrl: '/img/buj_news.png',
        },
        {
          name: 'Stu wok',
          imageUrl: '/img/kofoundme.png',
        },
        {
          name: 'REENTTY',
          imageUrl: '/img/kofoundme.png',
        },
        {
          name: 'MUSE GARAGE',
          imageUrl: '/img/kofoundme.png',
        },
        {
          name: 'Menzor Creative',
          imageUrl: '/img/kofoundme.png',
        },
        {
          name: 'RAKAYAR.',
          imageUrl: '/img/kofoundme.png',
        },
        {
          name: 'Terfaid',
          imageUrl: '/img/kofoundme.png',
        },
        {
          name: 'Ullweb',
          imageUrl: '/img/kofoundme.png',
        },
        {
          name: 'Remanno',
          imageUrl: '/img/kofoundme.png',
        },
        {
          name: 'sbo',
          imageUrl: '/img/kofoundme.png',
        },
        {
          name: 'Trontlett',
          imageUrl: '/img/kofoundme.png',
        },
        {
          name: 'hostull',
          imageUrl: '/img/kofoundme.png',
        },
        {
          name: 'Rekriut',
          imageUrl: '/img/kofoundme.png',
        },
        {
          name: 'MAYON IMAGES',
          imageUrl: '/img/kofoundme.png',
        },
        {
          name: 'Bilaaw',
          imageUrl: '/img/kofoundme.png',
        },
        {
          name: 'SERVICE STOCK MARKET',
          imageUrl: '/img/kofoundme.png',
        },
        {
          name: 'kureen HOMES',
          imageUrl: '/img/kofoundme.png',
        },
        {
          name: 'TriftPay',
          imageUrl: '/img/kofoundme.png',
        },
        {
          name: 'skimake',
          imageUrl: '/img/kofoundme.png',
        },
        {
          name: 'Krowdback',
          imageUrl: '/img/kofoundme.png',
        },
        {
          name: 'Simpext',
          imageUrl: '/img/kofoundme.png',
        },
        {
          name: 'Qeeki',
          imageUrl: '/img/kofoundme.png',
        },
        {
          name: 'frendal',
          imageUrl: '/img/kofoundme.png',
        },
        {
          name: 'Knowtixed',
          imageUrl: '/img/kofoundme.png',
        },
        {
          name: 'Kreeca market',
          imageUrl: '/img/kofoundme.png',
        },
        {
          name: 'wanodu',
          imageUrl: '/img/kofoundme.png',
        },
        {
          name: 'WETTAA LOGISTICS',
          imageUrl: '/img/kofoundme.png',
        },
        {
          name: 'ZIBUR',
          imageUrl: '/img/kofoundme.png',
        },
        {
          name: 'ZIMR MOBILE',
          imageUrl: '/img/kofoundme.png',
        },
        {
          name: 'Bilogos',
          imageUrl: '/img/kofoundme.png',
        },
      ]);
    
    return (
        <section className="pb-12 pt-9  md:px-170px px-20">
          <div className="text-center">
                <div className="container mx-auto">
                    <h2 className="text-4xll g-color font-medium mb-4">Our Studio Portfolio</h2>
                    <p className="g-2 mb-63px text-17px">Our 2024 Service Incubator Portfolio Companies</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-6 ">{portfolioItems.map((item) => (
                        <Image src={item.imageUrl} alt={item.name} width={120} height={100} className="rounded-xl h-60px w-118px bg-white" key={item.name}/>
                    ))}
                </div>
                <div className="text-center mt-46">
                    <a href="#" className="font-semibold text-black"><span className='underline mr-1'>View All Companies </span>  &rarr;</a>
                </div>
            </div>
      </section>
    );
  }



