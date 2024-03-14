'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'; 

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const reviewsData = [
    {
        avatar: '/reviews/avatar-1.png',
        name: "Richard",
        job: 'Chef',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto est magnam deleniti ipsa repellendus ex maxime! Numquam saepe aspernatur, repudiandae, sit unde quo totam sint sapiente facere voluptatum, excepturi perspiciatis.',
    },
    {
        avatar: '/reviews/avatar-1.png',
        name: "Richard",
        job: 'Chef',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto est magnam deleniti ipsa repellendus ex maxime! Numquam saepe aspernatur, repudiandae, sit unde quo totam sint sapiente facere voluptatum, excepturi perspiciatis.',
    },
    {
        avatar: '/reviews/avatar-1.png',
        name: "Richard",
        job: 'Chef',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto est magnam deleniti ipsa repellendus ex maxime! Numquam saepe aspernatur, repudiandae, sit unde quo totam sint sapiente facere voluptatum, excepturi perspiciatis.',
    },
    {
        avatar: '/reviews/avatar-1.png',
        name: "Richard",
        job: 'Chef',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto est magnam deleniti ipsa repellendus ex maxime! Numquam saepe aspernatur, repudiandae, sit unde quo totam sint sapiente facere voluptatum, excepturi perspiciatis.',
    },
    {
        avatar: '/reviews/avatar-1.png',
        name: "Richard",
        job: 'Chef',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto est magnam deleniti ipsa repellendus ex maxime! Numquam saepe aspernatur, repudiandae, sit unde quo totam sint sapiente facere voluptatum, excepturi perspiciatis.',
    },
    {
        avatar: '/reviews/avatar-1.png',
        name: "Richard",
        job: 'Chef',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto est magnam deleniti ipsa repellendus ex maxime! Numquam saepe aspernatur, repudiandae, sit unde quo totam sint sapiente facere voluptatum, excepturi perspiciatis.',
    },
];

const Reviews = () => {
  return (
    <section className='mb-12 xl:mb-32'>
        <div className="container mx-auto">
            <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
            <Swiper slidesPerView={1} 
                    breakpoints={{
                        640: {slidesPerView: 2},
                        1400: {slidesPerView: 3}
                    }}
                    spaceBetween={30}
                    modules={[Pagination]}
                    pagination={{clickable: true}}
                    className='h-[350px] '
            >
                {reviewsData.map((person, index) => {
                    return <SwiperSlide key={index}>
                        <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]'>
                            <CardHeader className='p-0 mb-10'>
                                <div className='flex items-center gap-x-4 '>
                                    <Image src={person.avatar} width={70} height={70} alt='' priority />
                                    <div className='flex flex-col'>
                                        <CardTitle>{person.name}</CardTitle>
                                        <p>{person.job}</p>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardDescription className='text-lg text-muted-foreground'>
                                {person.review}
                            </CardDescription>
                        </Card>
                    </SwiperSlide>
                })}
            </Swiper>
        </div>
    </section>
  )
}

export default Reviews