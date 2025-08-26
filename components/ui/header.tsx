'use client'

import Image from "next/image"
import { Button } from "./button"
import Link from "next/link"
import { useState } from "react"

import { Menu, X } from "lucide-react"
import MobileNavigator from "./mobile-navigator"



export default function Header() {


    const [open, setOpen] = useState(false);
 
    return (
        <header className="p-6 rounded-2xl border-gray-800 border bg-black/10  backdrop-blur-md w-[98%] h-auto mx-auto fixed z-50 top-5 left-1/2 transform -translate-x-1/2 font-bold">
            <nav className="flex justify-between items-center h-full">
                <Link href={"#hero"} className="inline-flex items-center gap-4">
                    <Image className="rounded-lg size-10" src={"/logo.png"} width={72} height={72} alt="Phantom Labs Ghost Duck" />
                    <span>Phantom Labs</span>
                </Link>
                <div className="hidden md:flex gap-5">
                    <Link className="text-lg hover:scale-105 transition-transform ease-in duration-100" href={"#about-us"}>About us</Link>
                    <Link className="text-lg hover:scale-105 transition-transform ease-in duration-100" href={"#portfolio"}>Projects</Link>
                    <Link className="text-lg hover:scale-105 transition-transform ease-in duration-100" href={"#services"}>Services</Link>
                    <Link className="text-lg hover:scale-105 transition-transform ease-in duration-100" href={"#contact"}>Contact</Link>
                </div>
                <Button className="rounded-full button-effect hidden md:flex" variant="gradient">
                    <span className="relative z-10">Let's chat</span>
                </Button>
                <div className="md:hidden flex">
                    {!open ? <Menu className="cursor-pointer" onClick={() => setOpen(!open)}/> : 
                        <X className="cursor-pointer" onClick={() => setOpen(!open)}/>}
                </div>
            </nav>
           <MobileNavigator open={open} setOpen={setOpen}/>
        </header>
    )
}