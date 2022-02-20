import React from "react";
import "./UserList.css";
import UserItem from "./UserItem";
function UserList(props) {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No Users Found</h2>
      </div>
    );
  }
  return (
    <ul>
      {props.items.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            name={user.name}
            image={user.image}
            placeCount={user.placeCount}
          />
        );
      })}
    </ul>
  );
}
export default UserList;
