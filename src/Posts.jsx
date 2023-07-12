import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

export async function fetchPosts() {
  const req = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (req.status === 404) {
    throw new Response('Not Found', { status: 404 });
  }
  const result = req.json();
  return { sum: result.length, raw: result };
}
export async function loader() {
  const obj = await fetchPosts();
  const data = obj.raw;
  return data;
}

export default function Posts() {
  const data = useLoaderData();
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link to={`/posts/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
