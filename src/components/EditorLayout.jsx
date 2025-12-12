import EditorNavbar from "./EditorNavbar";
import Explorer from "./Explorer";
import CodeEditor from "./CodeEditor";

export default function EditorLayout() {
  return (
    <>
      <EditorNavbar />
      <div className="flex h-[calc(100vh-80px)]">
        <Explorer/>
        {/* <CodeEditor/> */}
      </div>
    </>
  );
}
