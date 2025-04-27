import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Navbar } from "./navbar"

export default function Home(){
  return <div className="min-h-screen flex flex-col">
    <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
      <Navbar/>
    </div>
    <div className="mt-16">
    <h1 className="text-4xl">Hello</h1>
    <Button variant={"destructive"} size={"lg"} className="">Click Me</Button>
    <Link href={"/documents/123"}>Document</Link>
    </div>
  </div>
}