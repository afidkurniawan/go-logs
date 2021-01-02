import React from "react";
import { Container, MenuItem, Span, Icon, Title, Arrow } from "./Menu";

interface ICardProps {
  title?: string;
  active?: boolean;
  icon?: any;
  hasChild?: boolean;
  child?: boolean;
}

const MenuLink = (props: ICardProps) => (
  <aside>
    <MenuItem active={props.active} child={props.child}>
      <Span className="iconify" active={props.active} data-inline="false">
        <Icon src={props.icon} />
      </Span>
      <Title active={props.active}>{props.title}</Title>
      <Arrow
        src={require("../../../assets/icons/caret-up.svg")}
        show={props.hasChild}
      ></Arrow>
    </MenuItem>
  </aside>
);

export default function index() {
  return (
    <Container>
      <MenuLink
        title="Dashboard"
        icon={require("../../../assets/icons/dashboard.svg")}
      />
      <MenuLink
        title="DO Online"
        icon={require("../../../assets/icons/do.svg")}
        hasChild={true}
      />
      <MenuLink
        title="DO Request"
        icon={require("../../../assets/icons/requestdo.svg")}
        active={true}
        child={true}
      />
      <MenuLink
        title="My Transaction"
        icon={require("../../../assets/icons/mytransaction.svg")}
        child={true}
      />
      <MenuLink
        title="System"
        icon={require("../../../assets/icons/system.svg")}
      />
      <MenuLink
        title="Logout"
        icon={require("../../../assets/icons/logout.svg")}
      />
    </Container>
  );
}
