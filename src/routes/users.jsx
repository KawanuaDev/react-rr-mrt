import * as React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getData } from '../libs/fetcher';

export async function loader({ params }) {
  const data = await getData(params.usersId, 'users');
  if (!data) {
    throw new Response('', {
      status: 404,
      statusText: 'Not Found',
    });
  }
  return data;
}

export default function Users() {
  const data = useLoaderData();
  return (
    <div id="users">
      <div>
        <h1>{data.name}</h1>
        <p>{data.email}</p>
      </div>
    </div>
  );
}
