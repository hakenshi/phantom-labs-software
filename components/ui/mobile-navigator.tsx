import { Link } from "lucide-react"
import { Button } from "./button"

interface MobileNavigatorProps {
    open : boolean
}

export default function MobileNavigator ({open}  : MobileNavigatorProps ) {

    return (
         <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
                <div className="flex flex-col items-center gap-4 mt-4 pb-4">
                    <a className="text-lg hover:scale-105 transition-transform ease-in duration-100" href={"#about-us"} >About us</a>
                    <a className="text-lg hover:scale-105 transition-transform ease-in duration-100" href={"#portfolio"} >Projects</a>
                    <a className="text-lg hover:scale-105 transition-transform ease-in duration-100" href={"#services"} >Services</a>
                    <a className="text-lg hover:scale-105 transition-transform ease-in duration-100" href={"#contact"} >Contact</a>
                    <Button className="rounded-full button-effect" variant="outline">
                        <span className="relative z-10">Let's chat</span>
                    </Button>
                </div>
            </div>
    )
}