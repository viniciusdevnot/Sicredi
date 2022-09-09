import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  ElipseDiv,
  LineDivisor,
  LineDivisorWrapper,
  LineWrapper,
  Main,
  Text,
  Wrapper,
  WrapperLogo,
} from "../styles/pages/home";

import Elipse from "../public/elipse.svg";
import Texto from "../public/embreve.png";
import TesteLogo from "../public/logoComFundo.png";
import Background from "../public/background.png";

const Home: NextPage = () => {
  return (
    <>
      <script>window.location.href = `./home`</script>
    </>
  );
};

export default Home;
