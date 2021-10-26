import React from "react";
import Avatar from "../../atoms/avatar";
import Typography from "../../atoms/typography";

import wonamavatar from "../../../images/woman-avatar.svg";
import manavatar from "../../../images/manAvatar.svg";
import { WraaperFriend, WrapperTypography } from "./style";

interface FriendProps {
  name: string;
  message: string;
  gender: string;
  avatar: string | null;
}

const Friend: React.FC<FriendProps> = ({ name, message, avatar, gender }) => {
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
    <WraaperFriend>
      <Avatar size={48} src={getAvatarSrc()} />
      <WrapperTypography>
        <Typography variant="h4" size={"big"}>
          {name}
        </Typography>
        <Typography variant="h4" size={"small"}>
          {message}
        </Typography>
      </WrapperTypography>
    </WraaperFriend>
  );
};

export default Friend;
