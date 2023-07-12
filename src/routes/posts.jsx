import * as React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getData } from '../libs/fetcher';

export async function loader({ params }) {
  const data = await getData(params.postsId, 'posts');
  if (!data) {
    throw new Response('', {
      status: 404,
      statusText: 'Not Found',
    });
  }
  return data;
}

export default function PostDetails() {
  const data = useLoaderData();
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
}
