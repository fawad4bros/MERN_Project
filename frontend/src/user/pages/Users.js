import React from "react";
import UserList from "../components/UserList";
function Users() {
  const USERS = [
    {
      id: "u1",
      name: "Fawad",
      image:
        "https://d2liqplnt17rh6.cloudfront.net/coverImages/Coverimage_16a179a0-a8dd-4e16-aaed-9a6d2b6931a9-478.jpeg",
      placeCount: 5,
    },
  ];
  return <UserList items={USERS} />;
}

export default Users;
