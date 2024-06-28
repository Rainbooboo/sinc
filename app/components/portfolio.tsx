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
          imageUrl: '/stu_wok.png',
        },
        {
          name: 'REENTTY',
          imageUrl: '/reentty.png',
        },
        {
          name: 'MUSE GARAGE',
          imageUrl: '/muse_garage.png',
        },
        {
          name: 'Menzor Creative',
          imageUrl: '/menzor_creative.png',
        },
        {
          name: 'RAKAYAR.',
          imageUrl: '/rakayar.png',
        },
        {
          name: 'Terfaid',
          imageUrl: '/terfaid.png',
        },
        {
          name: 'Ullweb',
          imageUrl: '/ullweb.png',
        },
        {
          name: 'Remanno',
          imageUrl: '/remanno.png',
        },
        {
          name: 'sbo',
          imageUrl: '/sbo.png',
        },
        {
          name: 'Trontlett',
          imageUrl: '/trontlett.png',
        },
        {
          name: 'hostull',
          imageUrl: '/hostull.png',
        },
        {
          name: 'Rekriut',
          imageUrl: '/rekriut.png',
        },
        {
          name: 'MAYON IMAGES',
          imageUrl: '/mayon_images.png',
        },
        {
          name: 'Bilaaw',
          imageUrl: '/bilaaw.png',
        },
        {
          name: 'SERVICE STOCK MARKET',
          imageUrl: '/service_stock_market.png',
        },
        {
          name: 'kureen HOMES',
          imageUrl: '/kureen_homes.png',
        },
        {
          name: 'TriftPay',
          imageUrl: '/triftpay.png',
        },
        {
          name: 'skimake',
          imageUrl: '/skimake.png',
        },
        {
          name: 'Krowdback',
          imageUrl: '/krowdback.png',
        },
        {
          name: 'Simpext',
          imageUrl: '/simpext.png',
        },
        {
          name: 'Qeeki',
          imageUrl: '/qeeki.png',
        },
        {
          name: 'frendal',
          imageUrl: '/frendal.png',
        },
        {
          name: 'Knowtixed',
          imageUrl: '/knowtixed.png',
        },
        {
          name: 'Kreeca market',
          imageUrl: '/kreeca_market.png',
        },
        {
          name: 'wanodu',
          imageUrl: '/wanodu.png',
        },
        {
          name: 'WETTAA LOGISTICS',
          imageUrl: '/wettaa_logistics.png',
        },
        {
          name: 'ZIBUR',
          imageUrl: '/zibur.png',
        },
        {
          name: 'ZIMR MOBILE',
          imageUrl: '/zimr_mobile.png',
        },
        {
          name: 'Bilogos',
          imageUrl: '/bilogos.png',
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



