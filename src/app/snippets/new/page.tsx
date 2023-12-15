import { redirect } from 'next/navigation';
import { db } from '@/db';

export default function SnippetsCreatePage() {
  async function createSnippet(formData: FormData) {
    // this needs to be a server action
    'use server';

    //check the user inputs if they are valid
    const title = formData.get('title') as string;
    const code = formData.get('code') as string;

    //create a new record in db
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    console.log('snippet', snippet);

    //redirect the user back to route
    redirect('/');
  }
  return (
    <form action={createSnippet}>
      <h3 className='font-bold my-3 flex justify-center mb-7'>
        Create Snippet
      </h3>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-4'>
          <label className='w-12' htmlFor='title'>
            Title
          </label>
          <input
            name='title'
            className='border rounded p-2 w-full'
            type='text'
            id='title'
          />
        </div>
        <div className='flex gap-4'>
          <label className='w-12' htmlFor='code'>
            Code
          </label>
          <textarea
            name='code'
            className='border rounded p-2 w-full'
            id='code'
          />
        </div>

        <div className='flex justify-center'>
          <button
            type='submit'
            className='border rounded p-2 bg-blue-200 w-8/12'
          >
            Create Snippet
          </button>
        </div>
      </div>
    </form>
  );
}
