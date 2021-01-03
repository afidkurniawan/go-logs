import React from "react";
import { Container, Logo, Image } from "../../../styles/Sidebar";
import { Menu } from "../Menu/Loadable";

export default function index() {
  return (
    <Container>
      <Logo>
        <Image src={require("../../../assets/images/logo.png")} />
      </Logo>
      <Menu />
    </Container>
  );
}
