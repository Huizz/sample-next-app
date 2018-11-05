import React from "react";
import { ButtonContainer } from "./Button.styles";

interface IComponent {
  className?: string
}

interface IProps extends IComponent{
  name: string;
  size: "large" | "small";
  onClick(): void;
}

const Button: React.SFC<IProps> = props => (
  <ButtonContainer onClick={props.onClick}>
    {props.name}
  </ButtonContainer>
);

export default Button;
