import Users from "@/conponents/Users";
import { Suspense, use } from "react";

const UserPage = () => {
  //Step: 01
  const usersPromise = fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json(),
  );
  return (
    <div>
      <h1>User Page</h1>
      {/* Step: 02 */}
      <Suspense fallback={<h1>Users Are Loading........</h1>}>
        {/* Step:03 */} First Create users components
        <Users usersPromise={usersPromise}></Users>
      </Suspense>
    </div>
  );
};

export default UserPage;
