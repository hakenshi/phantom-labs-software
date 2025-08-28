<DialogContent className="grid grid-cols-3 grid-rows-3 min-w-5xl gap-4">
    <DialogHeader className="col-span-3">
        <DialogTitle>{"Details of " + title}</DialogTitle>
        <DialogDescription>Project Details</DialogDescription>
    </DialogHeader>
    <div className="col-span-2 row-span-2">
        <Image src={image} alt={`project ${title} image`} className="w-full h-full object-cover rounded-lg" />
    </div>
    <DialogDescription className="col-span-1 row-span-1">
        <p>{description}</p>
    </DialogDescription>
    <DialogFooter className="col-span-1 row-span-1">
        <Button variant="gradient" size="sm" disabled={!projectLink}>Access Link</Button>
    </DialogFooter>
</DialogContent>