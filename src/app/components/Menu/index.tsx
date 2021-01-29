import React from "react";
import { Link } from "react-router-dom";
import { translations } from "../../../locales/i18n";
import { useTranslation } from "react-i18next";

import {
  Container,
  MenuItem,
  Span,
  Icon,
  Title,
  Arrow
} from "../../../styles/Menu";

interface Props {
  title?: string;
  active?: boolean;
  icon?: any;
  hasChild?: boolean;
  child?: boolean;
  url: string;
  onClick?: any;
  show?: boolean;
}

const MenuLink = (props: Props) => (
  <aside>
    <MenuItem active={props.active} child={props.child}>
      <Span className="iconify" active={props.active} data-inline="false">
        <Icon src={props.icon} />
      </Span>
      <Link to={props.url}>
        <Title active={props.active}>{props.title}</Title>
      </Link>
      <Arrow
        src={require("../../../assets/icons/caret-up.svg")}
        show={props.hasChild}
      ></Arrow>
    </MenuItem>
  </aside>
);

export default function Menu() {
  const { t } = useTranslation();

  return (
    <Container>
      <MenuLink
        title={t(translations.sidebarMenu.dashboard)}
        icon={require("../../../assets/icons/dashboard.svg")}
        active={false}
        hasChild={false}
        child={false}
        url="/"
      />
      <MenuLink
        title={t(translations.sidebarMenu.doOnline)}
        icon={require("../../../assets/icons/do.svg")}
        active={false}
        hasChild={true}
        child={false}
        url="/"
      />
      <MenuLink
        title={t(translations.sidebarMenu.doRequest)}
        icon={require("../../../assets/icons/requestdo.svg")}
        active={true}
        hasChild={false}
        child={true}
        url="create-do-request"
      />
      <MenuLink
        title={t(translations.sidebarMenu.myTransaction)}
        icon={require("../../../assets/icons/mytransaction.svg")}
        active={false}
        hasChild={false}
        child={true}
        url="/"
      />
      <MenuLink
        title={t(translations.sidebarMenu.system)}
        icon={require("../../../assets/icons/system.svg")}
        active={false}
        hasChild={false}
        child={false}
        url="/"
      />
      <MenuLink
        title={t(translations.sidebarMenu.logout)}
        icon={require("../../../assets/icons/logout.svg")}
        active={false}
        hasChild={false}
        child={false}
        url="/"
      />
    </Container>
  );
}
