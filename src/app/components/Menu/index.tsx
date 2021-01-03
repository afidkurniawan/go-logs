import React from "react";
import { Link } from "react-router-dom";

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
  url: string;
}

const MenuLink = (props: Props) => (
  <aside>
    <MenuItem active={props.active} child={props.child}>
      <Span className="iconify" active={props.active} data-inline="false">
        <Icon src={props.icon} />
      </Span>
      <Title active={props.active}>
        <Link to={props.url}>{props.title}</Link>
      </Title>
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
          key={i}
          title={key.title}
          icon={key.icon}
          active={key.active}
          hasChild={key.hasChild}
          child={key.child}
          url={key.link}
        />
      ))}
    </Container>
  );
}
