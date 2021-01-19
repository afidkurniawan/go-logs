import React, { useState } from "react";
import imgEn from "../../../assets/icons/lang-english.svg";
import imgId from "../../../assets/icons/lang-indonesia.svg";

import {
  Container,
  Title,
  HeaderNav,
  NavItem,
  Profile,
  Notification,
  NotificationIcon,
  Language,
  LanguageIcon,
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
  const iconLang = idID ? imgId : imgEn;
  const textLang = idID ? "IDN" : "ENG";

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
          <LanguageIcon src={imgEn} />
          <NavText>ENG</NavText>
        </LangItem>
        <LangItem onClick={langId}>
          <LanguageIcon src={imgId} />
          <NavText>IDN</NavText>
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
              <LanguageIcon src={iconLang} />
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
