import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import {
    RiArrowDownSLine,
} from 'react-icons/ri';
import Socials from "./Socials";

const Hero = () => {
    return (
        <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-cover bg-bottom dark:bg-none">
            <div className="container mx-auto">
                <div className="flex justify-between gap-x-8">
                    <div className="flex flex-col justify-center 
                            mx-auto text-center">
                        <div className="text-sm font-semibold mb-4 text-primary tracking-[4px]">FULL STACK DEVELOPER</div>
                        <h1 className="h1 mb-4">Hello, My Name is Farhan. </h1>
                        <p className="subtitle max-w-[490px] mx-auto">Turning Passion into Pixels: Crafting Code, Building Dreams, and Transforming Ideas into Digital Reality.</p>
                        <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto">
                            <Link href={`/contact`}>
                                <Button className='gap-x-2'>Contact me <Send size={15} /> </Button>
                            </Link>
                            <Button variant={`cv`} className='gap-x-2'>Download My CV <Download size={15} /> </Button>
                        </div>
                        <Socials containerStyles={`flex gap-x-6 my-3 mx-auto`}
                            iconStyles={`text-foreground text-[22px] hover:text-primary transition-all`} />
                    </div>
                </div>
                <div className="absolute left-2/4 bottom-44 md:bottom-12
                        animate-bounce">
                    <RiArrowDownSLine className="text-3xl text-primary" />
                </div>
            </div>
        </section>
    )
}

export default Hero