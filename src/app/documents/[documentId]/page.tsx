import { Editor } from "./editor"

interface DocumentIdProps{
    params:Promise<{documentId:string}>
}
export default async function IndividualDocument({params}:DocumentIdProps){
  const awaitedParams=await params
  const slug=awaitedParams.documentId
console.log(slug)
    return <div className="min-h-screen bg-[#fafbfd]">
        
        <Editor/>
    </div>
}