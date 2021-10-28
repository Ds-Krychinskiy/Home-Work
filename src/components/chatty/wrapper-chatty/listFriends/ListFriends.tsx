import React from "react";
import { IChat } from "../WrapperChatty";
import Friend from "./friend/Friend";
import { ListFriendsStyle, NoUserStyle } from "./style";

interface IListFriendsProps {
  chat: IChat | null;
  setChat: (chat: IChat | null) => void;
  chats: IChat[];
}

const ListFriends: React.FC<IListFriendsProps> = ({ chats, chat, setChat }) => {
  return (
    <ListFriendsStyle>
      {chats ? (
        chats.map((e) => (
          <Friend
            onClick={() => setChat(e)}
            isSelected={e.id === chat?.id}
            key={e.id}
            name={e.name}
            message={e.messages[e.messages.length - 1]}
            gender={e.gender}
            avatar={e.avatar}
          />
        ))
      ) : (
        <NoUserStyle />
      )}
    </ListFriendsStyle>
  );
};
export default ListFriends;
