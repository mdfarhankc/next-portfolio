import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    return (
        <Link href={`/`}>
            <Image src={`/logo.png`} width={60}
                height={60}
                priority
                alt="Logo" />
        </Link>
    )
}

export default Logo