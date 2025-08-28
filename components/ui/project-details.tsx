
import Image, { StaticImageData } from "next/image";
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./dialog";
import { Button } from "./button";

interface ProjectDetailsProps {
    title: string
    image: StaticImageData
    description: string
    projectLink?: string
}


export default function ProjectDetails({ title, image, description, projectLink }: ProjectDetailsProps) {

    return (
        <DialogContent className="flex flex-col min-w-5xl">
            <DialogHeader>
                <DialogTitle>{"Details of " + title}</DialogTitle>
                <DialogDescription>Project Details</DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-5">
                <Image src={image} alt={`project ${title} image`} />
                <p className="h-full">{description}</p>
            </div>
            <DialogFooter className="col-span-1 row-span-1">
                <Button variant="outline" size="sm" disabled={!projectLink} >Access Link</Button>
            </DialogFooter>
        </DialogContent>
    )
}