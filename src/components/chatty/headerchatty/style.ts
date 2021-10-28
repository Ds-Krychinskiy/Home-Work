import styled from "styled-components";
import { ReactComponent as ProfileIcon } from "../../../images/profileIcon.svg";
import { ReactComponent as Logo } from "../../../images/logo.svg";

export const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  max-height: 79px;
  height: 100%;
  width: 100%;
  border-bottom: 1px solid #5c98f1;
`;

export const LogoStyle = styled(Logo)`
  width: 86px;
  height: 32.85px;
  margin-left: 24px;
  margin-top: 23.73px;
`;
export const ProfileIconStyle = styled(ProfileIcon)`
  width: 48px;
  height: 48px;
  margin-right: 24px;
  margin-top: 16px;
`;
