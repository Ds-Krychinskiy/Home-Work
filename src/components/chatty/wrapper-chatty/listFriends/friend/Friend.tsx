import React from "react";
import Avatar from "../../../../atoms/avatar/index";
import Typography from "../../../../atoms/typography";
import wonamavatar from "../../../../../images/woman-avatar.svg";
import manavatar from "../../../../../images/manAvatar.svg";
import { WrapperFriend, WrapperTypography } from "./style";
import { IMessage } from "../../WrapperChatty";

interface FriendProps {
  name: string;
  message: IMessage;
  gender: string;
  avatar: string | null;
  isSelected: boolean;
  onClick: () => void;
}

const getMessageText = (message?: string) => {
  if (!message) return "";
  if (message.length < 20) return message;
  return `${message.substr(0, 20)}...`;
};

const Friend: React.FC<FriendProps> = ({
  name,
  message,
  avatar,
  gender,
  onClick,
  isSelected,
}) => {
  const getAvatarSrc = () => {
    if (avatar) {
      return avatar;
    }
    if (gender === "man") {
      return manavatar;
    }
    return wonamavatar;
  };

  return (
    <WrapperFriend onClick={onClick} isSelected={isSelected}>
      <Avatar size={48} src={getAvatarSrc()} />
      <WrapperTypography>
        <Typography className={"text"} variant="h4" size={"big"}>
          {name}
        </Typography>
        <Typography className={"text"} variant="h4" size={"small"}>
          <>
            {message.isMy ? (
              <Typography className={"text"} size={"big"} variant={"body"}>
                <>You: </>
              </Typography>
            ) : (
              ""
            )}
            {getMessageText(message.text)}
          </>
        </Typography>
      </WrapperTypography>
    </WrapperFriend>
  );
};

export default Friend;
