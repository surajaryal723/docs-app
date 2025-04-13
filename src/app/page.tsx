import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home(){
  return <div className="w-full min-h-screen flex items-center justify-center">
    <h1 className="text-4xl">Hello</h1>
    <Button variant={"destructive"} size={"lg"} className="">Click Me</Button>
    <Link href={"/documents/123"}>Document</Link>
  </div>
}