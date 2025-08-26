import Header from "@/components/ui/header";
import { PropsWithChildren } from "react";

export default function HomeLayout({children}: PropsWithChildren) {
  return (
    <>
        <Header />
        <main className="w-full h-screen">
            {children}
        </main>
    </>
  )
}