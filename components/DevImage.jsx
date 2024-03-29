import Image from "next/image";

const DevImage = ({containerStyles, imgSrc}) => {
  return (
    <div className={`${containerStyles}`}>
        <Image src={imgSrc} fill priority alt="" />
    </div>
  )
}

export default DevImage