import { Editor } from "./editor";
import { Navbar } from "./navbar";
import { Toolbar } from "./toolbar";
interface DocumentIdProps {
  params: Promise<{ documentId: string }>;
}
export default async function IndividualDocument({ params }: DocumentIdProps) {
  const awaitedParams = await params;
  const slug = awaitedParams.documentId;
  console.log(slug);
  return (
    <div className="min-h-screen bg-[#fafbfd]">
      <div className="flex flex-col px-4 pt-2 gap-y-2 fixed top-0 left-0 right-0 z-10 bg-[#fafbfd] print:hidden">
        {" "}
        <Navbar />
        <Toolbar />
      </div>
      <div className="pt-[114px] print:pt-0 ">

      <Editor />
      </div>
    </div>
  );
}
