import styled from "styled-components";

export const Divider = styled.hr`
  margin: 10px 0;
  border-color: ${(props) => props.theme.dividerColor};
`;
