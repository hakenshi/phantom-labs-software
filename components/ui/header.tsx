'use client'

export default function Header() {
  return (
    <header className="p-6 rounded-full border-zinc-700/50 border bg-zinc-900/10  backdrop-blur-2xl w-[98%] mx-auto fixed z-50 top-5 left-1/2 transform -translate-x-1/2">
        <nav className="flex justify-between items-center h-full">
            <div>
                logo
            </div>
            <div>
                navigation
            </div>
            <div>
                contact-button
            </div>
        </nav>
    </header>
  )
}