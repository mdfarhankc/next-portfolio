import { Card, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillCard = ({ skill }) => {

    return (
        <Card className='w-[300px]'>
            <CardHeader>
                <div className='relative w-full h-[120px] flex items-center justify-center'>
                    {skill.icon}
                </div>
            </CardHeader>
            <div className=''>
                <Badge className='uppercase absolute top-4 left-5'>
                    {skill.category}
                </Badge>
                <h6 className='text-sm text-center font-bold p-5'>{skill.title}</h6>
            </div>
        </Card>
    )
}

export default SkillCard;