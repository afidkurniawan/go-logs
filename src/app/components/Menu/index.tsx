import React from "react";
import {
  Container,
  MenuItem,
  Span,
  Icon,
  Title,
  Arrow
} from "../../../styles/Menu";
import { menuSidebar } from "../../../lib/Constants";

interface Props {
  title?: string;
  active?: boolean;
  icon?: any;
  hasChild?: boolean;
  child?: boolean;
}

const MenuLink = (props: Props) => (
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
      {menuSidebar.map((key, i) => (
        <MenuLink
          title={key.title}
          icon={key.icon}
          active={key.active}
          hasChild={key.hasChild}
          child={key.child}
        />
      ))}
    </Container>
  );
}
