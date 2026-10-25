import React, { use } from "react";

const Users = ({ usersPromise }) => {
  const users = use(usersPromise);
  console.log(users);
  return (
    <div>
      <h1>User Components:{users.length}</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h1> User Id: {user.id}</h1>
          <h2>User Name: {user.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Users;
