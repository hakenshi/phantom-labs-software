import Image, { StaticImageData } from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "./card";
import { Button } from "./button";

interface PortfólioCardProps {
    image: StaticImageData
    title: string
    date : string
}


export default function PortfólioCard({ image, title, date }: PortfólioCardProps) {

    return (
        <Card className=" bg-black m-h-[380px] cursor-pointer p-0 border-none 
        transition-all duration-500 relative z-10 hover:z-20 hover:scale-115 
        hover:[&>img]:opacity-100 hover hover:[&_.content]:opacity-0 hover:[&_.footer]:opacity-100 hover:[&_.footer]:top-[102.5%]  ">
            <Image
                    className="w-full h-full  opacity-40 hover:opacity-100"
                    src={image}
                    alt="" />
            <CardContent className="content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                <span className="text-xl text-white font-bold">{title}</span>
            </CardContent>

            <CardFooter className="footer absolute flex items-center justify-between gap-3 w-full bg-gray-800 
            rounded-b-md px-4 py-1 top-1/2 opacity-0 transition-all duration-300 ">
                <p className=" text-white text-sm">{date}</p>
                <Button variant="gradient" >See More</Button>
            </CardFooter>
         
        </Card>
    )
}