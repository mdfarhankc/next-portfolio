import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { User2, PhoneCall, HomeIcon, MailIcon, GraduationCap, Calendar, Briefcase } from "lucide-react";
import { Badge } from '@/components/ui/badge';

const infoDatas = [
    {
        icon: <User2 size={20} />,
        text: "Mohammed Farhan K C",
    },
    {
        icon: <PhoneCall size={20} />,
        text: "+91 9895237989",
    },
    {
        icon: <MailIcon size={20} />,
        text: "kcfarhan123@gmail.com",
    },
    {
        icon: <Calendar size={20} />,
        text: "Born On 22, Feb 2001",
    },
    {
        icon: <GraduationCap size={20} />,
        text: "Bachelor Of Computer Application",
    },
    {
        icon: <HomeIcon size={20} />,
        text: "Kannur",
    },
];

const qualificationDatas = [
    {
        title: 'Education',
        data: [
            {
                university: "Jamia Hamdard",
                qualification: "Bachelor Of Computer Application",
                years: "2019 - 2022"
            },
        ]
    },
    {
        title: 'Experience',
        data: [
            {
                company: "QUEST INNOVATIVE SOLUTIONS",
                position: "Python Full Stack Developer",
                years: "2022 June - 2023 January"
            },
            {
                company: "AST SOLUTIONS LLC.",
                position: "Python Developer",
                years: "2023 March - Current"
            },
        ]
    }
];

const skillData = [
    'html', 'css', 'javascript', 'reactjs', 'nextjs', 'tailwindcss', 'bootstrap', 'python', 'odoo', 'django', 'flask', 'fastapi', 'nodejs', 'expressjs', 'sql', 'postgresql', 'mysql', 'mongodb', 'git', 'powerbi'
];

const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    }

    return (
        <section className="xl:h-[860px] pb-12 xl:py-24">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About Me</h2>
                <div className="flex flex-col lg:flex-row lg:gap-x-2">
                    <div className="hidden lg:flex items-center justify-center flex-1 relative">
                        <div className='hidden lg:flex bg-about_light dark:bg-about_dark w-[500px] h-[300px] bg-contain bg-top bg-no-repeat'>
                        </div>
                    </div>
                    <div className="flex-1">
                        <Tabs defaultValue='personal'>
                            <div className="flex justify-center">
                                <TabsList className='rounded-[50px]'>
                                    <TabsTrigger value='personal'>Personal Infos</TabsTrigger>
                                    <TabsTrigger value='qualifications'>Qualifications</TabsTrigger>
                                    <TabsTrigger value='skills'>Skills</TabsTrigger>
                                </TabsList>
                            </div>
                            <div className="xl:text-lg mt-12 xl:mt-8">
                                <TabsContent value='personal'>
                                    <div className="text-center lg:text-left">
                                        <h3 className="h3 mb-4">Mastering the Art of Innovation.</h3>
                                        <p className="subtitle text-sm max-w-xl mx-auto xl:mx-0">Turning visions into reality, I specialize in crafting tailored solutions that align with your goals, ensuring your business achieves new heights with high-quality projects.</p>
                                        <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                            {infoDatas.map((item, index) => {
                                                return (<div key={index} className="flex items-center gap-x-4 mx-auto ml:mx-0">
                                                    <div className="text-primary">{item.icon}</div>
                                                    <div>{item.text}</div>
                                                </div>);
                                            })}
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value='qualifications'>
                                    <div>
                                        <h3 className="h3 mb-8 text-center xl:text-left">My Awesome Journey</h3>
                                        <div className="grid grid-cols-2 gap-x-8">
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items center text-[22px]">
                                                    <Briefcase size={28} />
                                                    <h4 className="capitalize font-medium">
                                                        {getData(qualificationDatas, 'Experience').title}
                                                    </h4>
                                                </div>
                                                <div className="flex flex-col gap-y-8">
                                                    {getData(qualificationDatas, 'Experience').data.map((item, index) => {
                                                        const { company, position, years } = item;
                                                        return (
                                                            <div className="flex gap-x-8 group" key={index}>
                                                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                    <div className="w-[11px] h-[11px] rounded-full bg-primary 
                                                                    absolute -left-[5px] group-hover:translate-y-[84px]
                                                                    transition-all duration-500"></div>
                                                                </div>
                                                                <div>
                                                                    <div className="font-semibold text-xl leading-none mb-2">{company}</div>
                                                                    <div className="text-lg leading-none text-muted-foreground mb-4">{position}</div>
                                                                    <div className="text-base font-medium">{years}</div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items center text-[22px]">
                                                    <GraduationCap size={28} />
                                                    <h4 className="capitalize font-medium">
                                                        {getData(qualificationDatas, 'Education').title}
                                                    </h4>
                                                </div>
                                                <div className="flex flex-col gap-y-8">
                                                    {getData(qualificationDatas, 'Education').data.map((item, index) => {
                                                        const { university, qualification, years } = item;
                                                        return (
                                                            <div className="flex gap-x-8 group" key={index}>
                                                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                    <div className="w-[11px] h-[11px] rounded-full bg-primary 
                                                                    absolute -left-[5px] group-hover:translate-y-[84px]
                                                                    transition-all duration-500"></div>
                                                                </div>
                                                                <div>
                                                                    <div className="font-semibold text-xl leading-none mb-2">{university}</div>
                                                                    <div className="text-lg leading-none text-muted-foreground mb-4">{qualification}</div>
                                                                    <div className="text-base font-medium">{years}</div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value='skills'>
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-8">What I Know</h3>
                                        <div className="mb-16">
                                            <h4 className="text-xl font-semibold mb-2">Skills</h4>
                                            <div className="border-b border-border mb-4"></div>
                                            <div>
                                                {skillData.map((item, index) => {
                                                    return (
                                                        <Badge key={index} className='m-1 uppercase'>
                                                            {item}
                                                        </Badge>
                                                    )
                                                })}
                                            </div>
                                            <div className="flex flex-col gap-y-2 mt-5">
                                                <div className="text-primary">Languages Known</div>
                                                <div className="border-b border-border"></div>
                                                <div>Malayalam, English, Hindi</div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About