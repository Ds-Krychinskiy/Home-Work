import React, { useState } from "react";
import { WrapperChattyStyle } from "./style";
import ListFriends from "./../wrapper-chatty/listFriends/ListFriends";
import WrapperMessage from "./wrapper-message/WrapperMessage";

export interface IMessage {
  text?: string;
  file: File | null;
  isMy: boolean;
}

export interface IChat {
  name: string;
  id: number;
  messages: IMessage[];
  gender: "man" | "woman";
  isOnline: boolean;
  lastSeen: number;
  avatar: string | null;
}

const _chats: IChat[] = [
  {
    name: "Konstantin Konstantinopolski",
    id: 1,
    messages: [
      {
        text: "Good Day",
        file: null,
        isMy: false,
      },
    ],
    gender: "man",
    isOnline: false,
    lastSeen: 4,
    avatar: null,
  },
  {
    name: "Marina Joe",
    id: 2,
    messages: [
      {
        text: "Hey!",
        file: null,
        isMy: true,
      },
    ],
    gender: "woman",
    isOnline: false,
    lastSeen: 3,
    avatar: null,
  },
  {
    name: "Ernest Gillroy",
    id: 3,
    messages: [
      {
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
        file: null,
        isMy: false,
      },
      {
        text: "SeSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. accusantium doloremque laudantium, totam re",
        file: null,
        isMy: true,
      },
      {
        text: "SeSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        file: null,
        isMy: false,
      },
      {
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusanti",
        file: null,
        isMy: true,
      },
      {
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
        file: null,
        isMy: false,
      },
      {
        text: "SeSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. accusantium doloremque laudantium, totam re",
        file: null,
        isMy: true,
      },
      {
        text: "SeSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        file: null,
        isMy: false,
      },
      {
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusanti",
        file: null,
        isMy: true,
      },
      {
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
        file: null,
        isMy: false,
      },
      {
        text: "SeSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. accusantium doloremque laudantium, totam re",
        file: null,
        isMy: true,
      },
      {
        text: "SeSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        file: null,
        isMy: false,
      },
      {
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusanti",
        file: null,
        isMy: true,
      },
    ],
    gender: "man",
    isOnline: false,
    lastSeen: 7,
    avatar: null,
  },
  {
    name: "Elon Musk",
    id: 4,
    messages: [
      {
        text: "Elon, I bought a Cybertruck..!",
        file: null,
        isMy: true,
      },
      {
        text: "Bro, you cool!",
        file: null,
        isMy: false,
      },
      {
        text: "The car is gorgeous",
        file: null,
        isMy: true,
      },
      {
        text: "I know I did it",
        file: null,
        isMy: false,
      },
    ],
    gender: "man",
    isOnline: true,
    lastSeen: 4,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZyOEOIqQRPWXoZZN-jOfPpudGsx7aMfRzlg&usqp=CAU",
  },
];

const WrapperChatty = () => {
  const [chat, setChat] = useState<IChat | null>(null);
  const [chats, setChats] = useState<IChat[]>([..._chats]);
  return (
    <WrapperChattyStyle>
      <ListFriends chat={chat} setChat={setChat} chats={chats} />
      <WrapperMessage chat={chat} />
    </WrapperChattyStyle>
  );
};

export default WrapperChatty;
