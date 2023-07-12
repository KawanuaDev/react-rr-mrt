import { json } from 'react-router-dom';

export async function getData(id, api) {
  switch (api) {
    case 'users':
      const resU = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      return resU;

    case 'posts':
      const resP = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      return resP;

    default:
      throw Error('Input = ' + api + ' not found.');
  }
}
export async function getPosts(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (res.status === 404) {
    throw new Response('Not Found', { status: 404 });
  }
  // const obj = await res.json();
  return json(res);
}
