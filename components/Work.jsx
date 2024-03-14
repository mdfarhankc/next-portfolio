'use client';

import Link from 'next/link';
import { Button } from './ui/button';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import ProjectCard from './ProjectCard';

const projectData = [
    {
        image: '/work/4.png',
        category: 'react-js',
        name: 'Nexa Website',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto est magnam deleniti ipsa repellendus ex maxime! Numquam saepe aspernatur, repudiandae, sit unde quo totam sint sapiente facere voluptatum, excepturi perspiciatis.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/3.png',
        category: 'next-js',
        name: 'Nexa Website',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto est magnam deleniti ipsa repellendus ex maxime! Numquam saepe aspernatur, repudiandae, sit unde quo totam sint sapiente facere voluptatum, excepturi perspiciatis.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/2.png',
        category: 'next-js',
        name: 'Nexa Website',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto est magnam deleniti ipsa repellendus ex maxime! Numquam saepe aspernatur, repudiandae, sit unde quo totam sint sapiente facere voluptatum, excepturi perspiciatis.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/1.png',
        category: 'react-js',
        name: 'Nexa Website',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto est magnam deleniti ipsa repellendus ex maxime! Numquam saepe aspernatur, repudiandae, sit unde quo totam sint sapiente facere voluptatum, excepturi perspiciatis.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/1.png',
        category: 'react-js',
        name: 'Nexa Website',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto est magnam deleniti ipsa repellendus ex maxime! Numquam saepe aspernatur, repudiandae, sit unde quo totam sint sapiente facere voluptatum, excepturi perspiciatis.',
        link: '/',
        github: '/',
    },
];

const Work = () => {
    return (
        <section className='relative mb-12 xl:mb-48'>
            <div className='container mx-auto'>
                <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center'>
                    <h2 className='section-title mb-4 '>Latest Projects</h2>
                    <p className='subtitle mb-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto est magnam deleniti ipsa repellendus ex maxime! Numquam saepe aspernatur, repudiandae, sit unde quo totam sint sapiente facere voluptatum, excepturi perspiciatis.</p>
                    <Link href='/projects'>
                        <Button>All Projects</Button>
                    </Link>
                </div>
                <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
                    <Swiper className='h-[480px]' slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 2
                            }
                        }} 
                        spaceBetween={30} modules={[Pagination]}
                        pagination={{ clickable: true }}
                    >
                            {projectData.map((project, index) => {
                                return <SwiperSlide key={index}>
                                    <ProjectCard project={project} />
                                </SwiperSlide>
                            })}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Work