import React from "react";
import Friend from "../friend/Friend";
import { ListFriendsStyle } from "./style";

const users = [
  {
    name: "Konstantin Konstantinopolski",
    id: 1,
    message: "Hey!",
    gender: "man",
    avatar: null,
  },
  {
    name: "Marina Joe",
    id: 2,
    message: "Hey!",
    gender: "woman",
    avatar: null,
  },
  {
    name: "Ernest Gillroy",
    id: 3,
    message: "Hey!",
    gender: "man",
    avatar: null,
  },
  {
    name: "Elon Musk",
    id: 4,
    message: "Hey!",
    gender: "man",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZyOEOIqQRPWXoZZN-jOfPpudGsx7aMfRzlg&usqp=CAU",
  },
];

const ListFriends = () => {
  return (
    <ListFriendsStyle>
      {users.map((e) => (
        <Friend
          key={e.id}
          name={e.name}
          message={e.message}
          gender={e.gender}
          avatar={e.avatar}
        />
      ))}
    </ListFriendsStyle>
  );
};
export default ListFriends;
