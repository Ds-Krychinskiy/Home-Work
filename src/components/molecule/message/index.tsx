import React, { useEffect, useState } from "react";
import Typography from "../../atoms/typography";
import { IChat } from "../../chatty/wrapper-chatty/WrapperChatty";
import { Contener, DialogMessageStyle, MessageWrepper } from "./style";
import Loader from "../../atoms/loader";

interface IDialogMessageProps {
  chat: IChat;
}

// To Do: использовать  id в key

const MessageList: React.FC<IDialogMessageProps> = ({ chat }) => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [chat]);

  return (
    <Contener>
      {!isLoading ? (
        chat.messages.map((e, index) => (
          <MessageWrepper isMy={e.isMy} key={index}>
            <DialogMessageStyle isMy={e.isMy}>
              <Typography size={"big"} variant={"body2"}>
                {e.text ? e.text : e.file?.name}
              </Typography>
            </DialogMessageStyle>
          </MessageWrepper>
        ))
      ) : (
        <Loader></Loader>
      )}
    </Contener>
  );
};
export default MessageList;
