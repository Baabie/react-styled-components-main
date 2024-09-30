import styled from "styled-components";
import image2 from "../../assets/image-2.png";

export const MainBanner = styled.section`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
  text-align: center;

  background: ${`url(${image2})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  p {
    color: #fff;
    font-size: 20px;
  }

  @media screen and (max-width: 768px) {
    height: 100vh;
  }
`;
