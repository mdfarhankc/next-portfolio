'use client';

import CountUp from "react-countup";

const Badge = ({containerStyle, icon, endCountNum, endCountText, badgeText}) => {
  return (
    <div className={`badge ${containerStyle}`}>
        <div className="text-3xl text-primary">{icon}</div>
        <div className="flex items-center gap-x-2">
          <div className="text-4xl leading-none text-primary font-bold">
            <CountUp end={endCountNum} delay={1} duration={4} />
            {endCountText}
          </div>
          <div className="max-w-[70px] leading-none text-[15px] text-black font-medium">{badgeText}</div>
        </div>
    </div>
  )
}

export default Badge