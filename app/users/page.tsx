import React from 'react'


interface User{
  id: number;
  title: string;
}


const UserPage = async() => {

  const res = await fetch("https://fakestoreapi.com/products",
    {next: {revalidate: 10}} //next js gonna run background and got fresh data in every 10s
  );
  const users: User[]= await res.json();


  return (
    <div>
      <h1>Users</h1>

      <p>{new Date().toLocaleTimeString() }</p>
      <ul>
        {users.map(user=> <li key ={ user.id }>{user.title}</li>)}
      </ul>
    </div>
  )
}

export default UserPage