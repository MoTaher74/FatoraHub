import Link from "next/link";
import Image from "next/image";
import logo from '../public/logo.gif'

export function Navbar(){

    return(
        <div className="flex items-center justify-between">
            <Link href={"/"} className="flex items-center md:gap-2">
            <Image src={logo} alt={"logo"} className="size-12 md:size-14"/>
            <p className="font-bold text-xl md:text-3xl">Fatora<span className="text-teal-500">Hub</span></p>
            </Link>
            <Link href={"/login"} className="bg-teal-500 text-white px-2 py-1 md:px-4 md:py-2 rounded-md hover:bg-teal-600 transition ">Get Started</Link>
       

        </div>
    )
}