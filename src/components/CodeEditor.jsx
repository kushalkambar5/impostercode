import Editor from '@monaco-editor/react';

export default function CodeEditor(){
    return(
        <>
            <Editor height="90vh" defaultLanguage="javascript" defaultValue="// Write your code here" />
        </>
    );
}