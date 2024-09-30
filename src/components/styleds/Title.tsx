import styled from "styled-components";

type TColor = "black" | "white";

interface TitleProps {
  color?: TColor;
}

export const Title = styled.h1<TitleProps>`
  font-size: 1.5em;
  text-align: center;
  letter-spacing: 2px;

  /* ------------------ condicao              ?  se for true : se for false*/
  color: ${(props) => (props.color === "white" ? "#fff" : "#000")};
`;

// #000 || #fff
