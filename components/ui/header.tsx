'use client'

import Image from "next/image"
import { Button } from "./button"
import Link from "next/link"

export default function Header() {
    return (
        <header className="p-6 rounded-full border-gray-800 border bg-black/10  backdrop-blur-md w-[98%] mx-auto fixed z-50 top-5 left-1/2 transform -translate-x-1/2 font-bold">
            <nav className="flex justify-between items-center h-full">
                <Link href={"/"} className="inline-flex items-center gap-4">
                    <Image className="rounded-lg size-10" src={"/logo.png"} width={72} height={72} alt="Phantom Labs Ghost Duck" />
                    <span>Phantom Labs</span>
                </Link>
                <div className="flex gap-5">
                    <Link className="text-lg hover:scale-105 transition-transform ease-in duration-100" href={"/"}>About us</Link>
                    <Link className="text-lg hover:scale-105 transition-transform ease-in duration-100" href={"/"}>Projects</Link>
                    <Link className="text-lg hover:scale-105 transition-transform ease-in duration-100" href={"/"}>Services</Link>
                    <Link className="text-lg hover:scale-105 transition-transform ease-in duration-100" href={"/"}>Contact</Link>
                </div>
                <Button className="rounded-full button-effect" variant="gradient">
                    <span className="relative z-10">Let's chat</span>
                </Button>
            </nav>
        </header>
    )
}