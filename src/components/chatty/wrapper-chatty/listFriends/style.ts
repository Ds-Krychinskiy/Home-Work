import styled from "styled-components";
import { ReactComponent as NoUsers } from "../../../../images/nousers.svg";

export const ListFriendsStyle = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 362px;
  width: 100%;
  max-height: 1000px;
  height: 100%;
  padding-top: 28px;
  box-sizing: border-box;
  border-right: 1px solid #5c98f1;
  position: relative;
`;
export const NoUserStyle = styled(NoUsers)`
  position: absolute;
  bottom: 250px;
  left: 79px;
`;
