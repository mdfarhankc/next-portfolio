import Form from '@/components/Form';
import { MailIcon, HomeIcon, PhoneCall } from 'lucide-react';

const Contact = () => {
    return (
        <section id='contact'>
            <div className="container mx-auto">
                <div className='grid md:grid-cols-2 pt-12 md:h-[480px] mb-6 md:mb-24'>
                    <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
                            <span className="w-[30px] h-[2px] bg-primary"></span>
                            Hello, Future Collaborators!
                        </div>
                        <h1 className='h1 max-w-md mb-8'>Let's Work Together</h1>
                        <p className='subtitle max-w-[400px]'>
                            Unlock Innovation: I'm a passionate coder ready to elevate your projects or contribute to your team. Let's build success together. Whether you're a client with a vision or a company seeking talent, let's connect and turn ideas into impactful realities. Your next chapter starts here – let's create something extraordinary
                        </p>
                    </div>
                    <div className='hidden md:flex w-full bg-contact_image_light dark:bg-contact_image_dark bg-contain bg-top bg-no-repeat'>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 mb-24 md:mb-32'>
                    <div className='flex flex-col gap-y-4 md:gap-y-14 mb-12 md:mb-24 text-base md:text-lg'>
                        <div className='flex items-center gap-x-8 text-base md:text-lg'>
                            <MailIcon size={18} className='text-primary' />
                            <div>kcfarhan123@gmail.com</div>
                        </div>
                        <div className='flex items-center gap-x-8 text-base md:text-lg'>
                            <HomeIcon size={18} className='text-primary' />
                            <div>Kannur, Kerala, India</div>
                        </div>
                        <div className='flex items-center gap-x-8 text-base md:text-lg'>
                            <PhoneCall size={18} className='text-primary' />
                            <div>+91 9895237989</div>
                        </div>
                    </div>
                    <Form />
                </div>
            </div>
        </section>
    )
}

export default Contact