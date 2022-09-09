import styled from "styled-components";
import Image from "next/image";
import Background from "../../public/background.png";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  margin: 0;
  // background-image: url("/background.png"), url("/background-color.png");
  // background-size: cover;
  // background-repeat: no-repeat;
  // background-blend-mode: normal;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-itens: center;
  justify-content: center;
  width: 30vw;
  mix-blend-mode: multiply;
  @media screen and (max-width: 768px) {
    width: 60vw;
  }
`;

export const WrapperLogo = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  width: 20vw;
  margin-top: 3rem;
  @media screen and (max-width: 768px) {
    width: 50vw;
  }
`;

export const Text = styled.h1`
  text-align: center;
  margin: 0;

  font-size: 10em;
  height: auto;
  color: #9a9a9a;
`;

export const LineWrapper = styled.div`
  display: flex;
  align-itens: center;
  justify-content: center;
  width: 100vw;
`;


export const LineDivisorWrapper = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 100vw;
  bottom: 201px;
`;
export const LineDivisor = styled.div`
  background: #ffffff;
  width: 100%;
  height: 4px;
  box-shadow: 0px 10px 7px -1px rgba(0, 0, 0, 0.25);
`;

export const ElipseDiv = styled.div`
  margin-top: 22px;
  position: absolute;
`;
