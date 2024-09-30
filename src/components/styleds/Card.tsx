import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: auto;
  max-width: 320px;
  padding: 20px;
  gap: 16px;

  h1 {
    font-size: 2em;
    color: ${(props) => props.theme.textColor};
  }

  @media screen and (max-width: 768px) {
    margin: 20px 0;
  }
`;
