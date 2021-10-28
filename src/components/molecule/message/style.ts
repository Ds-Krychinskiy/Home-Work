import styled from "styled-components";

export const Contener = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 36px 36px 36px;
  box-sizing: border-box;
  flex-grow: 3;
  max-height: 462px;
  overflow: auto;
  
&::-webkit-scrollbar {
  width: 6px;
}
 
&::-webkit-scrollbar-track {
  background-color: #E1ECFE;
}
&::-webkit-scrollbar-thumb {
  background-color: #C5DAFF;
  border-radius: 12px;
}
`;

export const DialogMessageStyle = styled.div<{ isMy: boolean }>`
  flex-grow: 2;
  max-width: 491px;
  flex-grow: 0;
  background: ${(props) => (props.isMy ? "#eaf2ff" : "#FFFFFF")};
  padding: 9px 13px 9px 14px;
  border-radius: 12px;
  border: 1px solid #d7e6ff;
`;

export const MessageWrepper = styled.div<{ isMy: boolean }>`
  width: 100%;
  display: flex;
  margin-top: 24px;
  justify-content: ${(props) => (props.isMy ? "flex-end" : "flex-start")};
`;
