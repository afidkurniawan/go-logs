import React from "react";
import { Container, Logo, Image } from "./Sidebar";

export default function index() {
  return (
    <Container>
      <Logo>
        <Image src={require("../../../assets/images/logo.png")} />
      </Logo>
    </Container>
  );
}
