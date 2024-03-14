import { MonitorDown, MonitorSmartphone, Server } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

const servicesData = [
    {
        icon: <MonitorDown size={72} strokeWidth={0.8} />,
        title: 'Full-Stack Development',
        description: 'Creating end-to-end solutions by combining powerful frontend and backend technologies for a seamless user experience.',
    },
    {
        icon: <MonitorSmartphone size={72} strokeWidth={0.8} />,
        title: 'Frontend Development',
        description: 'Designing and implementing visually appealing user interfaces with the latest frontend technologies to captivate your audience.',
    },
    {
        icon: <Server size={72} strokeWidth={0.8} />,
        title: 'Backend Development',
        description: 'Building robust server-side applications and databases to ensure the functionality and security of your web and mobile applications.',
    },
];

const Services = () => {
    return (
        <section className='mb-12 xl:mb-36'>
            <div className="container mx-auto">
                <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>My Services</h2>
                <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
                    {servicesData.map((item, index) => {
                        return <Card className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative' key={index}>
                            <CardHeader className='text-primary absolute -top-[60px]'>
                                <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>{item.icon}</div>
                            </CardHeader>
                            <CardContent className='text-center '>
                                <CardTitle className='mb-4'>{item.title}</CardTitle>
                                <CardDescription className='text-lg'>{item.description}</CardDescription>
                            </CardContent>
                        </Card>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services