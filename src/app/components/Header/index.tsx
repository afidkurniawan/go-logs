import React, { useState } from "react";

import {
  Container,
  Title,
  HeaderNav,
  NavItem,
  Profile,
  Notification,
  NotificationIcon,
  Language,
  LanguageNav,
  ProfileIcon,
  NavText,
  Row,
  LangOptions,
  LangItem
} from "../../../styles/Header";

export default function Header(props) {
  const idID = localStorage.getItem("i18nextLng") === "id-ID" ? true : false;
  const [collapseLang, setCollapselang] = useState(false);
  const textLang = idID ? "Indonesia" : "English(US)";

  const languageChange = () => {
    setCollapselang(!collapseLang);
  };

  const langEn = e => {
    localStorage.setItem("i18nextLng", "en-US");
    window.location.reload(false);
    e.preventDefault();
  };

  const langId = e => {
    localStorage.setItem("i18nextLng", "id-ID");
    window.location.reload(false);
    e.preventDefault();
  };

  const LanguageOptions = () =>
    collapseLang ? (
      <LangOptions>
        <LangItem onClick={langEn}>
          <NavText>English(US)</NavText>
        </LangItem>
        <LangItem onClick={langId}>
          <NavText>Indonesia</NavText>
        </LangItem>
      </LangOptions>
    ) : null;

  return (
    <Container>
      <Title>{props.title}</Title>
      <HeaderNav>
        <NavItem>
          <Row>
            <Language onClick={languageChange}>
              <NavText>{textLang}</NavText>
              <LanguageNav
                src={require("../../../assets/icons/caret-down.svg")}
              />
            </Language>
            <LanguageOptions />
          </Row>
        </NavItem>
        <NavItem>
          <Notification>
            <NotificationIcon
              src={require("../../../assets/icons/notification.svg")}
            />
          </Notification>
        </NavItem>
        <NavItem>
          <Profile>
            <ProfileIcon src={require("../../../assets/images/avatar.svg")} />
            <NavText>John Doe</NavText>
          </Profile>
        </NavItem>
      </HeaderNav>
    </Container>
  );
}
