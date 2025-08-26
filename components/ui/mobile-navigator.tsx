import { Link } from "lucide-react"
import { Button } from "./button"

interface MobileNavigatorProps {
    open : boolean
    setOpen : (open: boolean) => void
}

export default function MobileNavigator ({open, setOpen}  : MobileNavigatorProps ) {

    return (
         <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
                <div className="flex flex-col items-center gap-4 mt-4 pb-4">
                    <a className="text-lg hover:scale-105 transition-transform ease-in duration-100" href={"#about-us"} onClick={() => setOpen(false)}>About us</a>
                    <a className="text-lg hover:scale-105 transition-transform ease-in duration-100" href={"#portfolio"} onClick={() => setOpen(false)}>Projects</a>
                    <a className="text-lg hover:scale-105 transition-transform ease-in duration-100" href={"#services"} onClick={() => setOpen(false)}>Services</a>
                    <a className="text-lg hover:scale-105 transition-transform ease-in duration-100" href={"#contact"} onClick={() => setOpen(false)}>Contact</a>
                    <Button className="rounded-full button-effect" variant="gradient" onClick={() => setOpen(false)}>
                        <span className="relative z-10">Let's chat</span>
                    </Button>
                </div>
            </div>
    )
}