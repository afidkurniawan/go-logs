import React from "react";
import { useTranslation } from "react-i18next";
import { translations } from "../../../locales/i18n";

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
  NavText
} from "./Header";

export default function Header() {
  const { t } = useTranslation();

  return (
    <Container>
      <Title>{t(translations.requestDO.title)}</Title>
      <HeaderNav>
        <NavItem>
          <Language>
            <LanguageIcon
              src={require("../../../assets/icons/lang-english.svg")}
            />
            <NavText>ENG</NavText>
            <LanguageNav
              src={require("../../../assets/icons/caret-down.svg")}
            />
          </Language>
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
