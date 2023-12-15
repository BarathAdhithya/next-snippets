import Link from 'next/link';
import { db } from '@/db';

interface Snippet {
  id: number;
  title: string;
  code: string;
}

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderSnippets = snippets.map((snippet: Snippet) => {
    return (
      <Link
        className='flex justify-between items-center p-2 border rounded'
        key={snippet.id}
        href={'/snippets/' + snippet.id}
      >
        <div>{snippet.title}</div>
        <div>view</div>
      </Link>
    );
  });
  return (
    <div className=''>
      <div className='flex justify-between align-items-center m-2'>
        <h1 className='text-xl font-bold'></h1>
        <Link href='snippets/new' className='border p-2 rounded'>
          Create new{' '}
        </Link>
      </div>
      <div className='flex flex-col gap-2'>{renderSnippets}</div>
    </div>
  );
}
