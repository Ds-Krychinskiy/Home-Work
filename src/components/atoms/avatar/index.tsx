import React from "react";
import { AvatarImg } from "./style";

interface AvatarProps {
  src: string;
  size: number;
}

const Avatar: React.FC<AvatarProps> = ({ src, size }) => {
  return <AvatarImg size={size} src={src} alt="" />;
};
export default Avatar;
