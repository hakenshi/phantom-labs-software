
import Image, { StaticImageData } from "next/image";
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./dialog";
import { Button } from "./button";

interface ProjectDetailsProps {
    title: string
    image: StaticImageData
    description : string
    projectLink?: string
}


export default function ProjectDetails({ title, image, description, projectLink }: ProjectDetailsProps) {

    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>{"Details of " + title}</DialogTitle>
                <DialogDescription>Project Details</DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-3">
                <Image src={image} alt="" className=""/>
                <p>{description}</p>
            </div>
            <DialogFooter>
                <Button variant="gradient" size="sm" disabled={!projectLink} >Access Link</Button>
            </DialogFooter>

        </DialogContent>
    )
}