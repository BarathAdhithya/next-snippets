'use client';

// import type { Snippet } from '@prisma/client';
import Editor from '@monaco-editor/react';
import { useState} from 'react'
import * as serverActions from '@/server-actions'

// interface SnippetEditFormProps {
//   snippet: Snippet;
// }

export default function SnippetEditForm({ snippet }: any) {

  const [code, setCode] = useState(snippet.code)

  const handleEditorChange =(value: string = "") => {
    setCode(value)
  }

  const editSnippetAction = serverActions.editSnippet.bind(null,snippet.id, code)

  return (
    <div className='m-4'>

      <Editor
        height='40vh'
        theme='vs-dark'
        language='javascript'
        defaultValue={snippet.code}
        options={{
          minimap: {
            enabled: false,
          },
        }}
        onChange={handleEditorChange}
      />
      <form action={editSnippetAction}>
        <button type="submit" className='p-2 border rounded'>
          save
        </button>
      </form>

    </div>
  );
}
