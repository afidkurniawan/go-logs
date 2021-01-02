import React from "react";
import { useTranslation } from "react-i18next";
import { translations } from "../../../locales/i18n";
import { topWizard } from "../../../lib/Constants";

import { Title, Row, Column, Item, ItemTitle } from "./Wizard";
import { Container, Icon, Circle, Number, Rectangle } from "./WizardTop";

export default function Top() {
  const { t } = useTranslation();

  return (
    <Container>
      <Title>{t(translations.wizard.top.title)}</Title>
      <Row>
        {topWizard.map((key, i) => (
          <Column key={i}>
            <Icon src={key.link} />
            <Item>
              <Rectangle show={key.prev} />
              <Circle active={key.active}>
                <Number active={key.active}>{i + 1}</Number>
              </Circle>
              <Rectangle show={key.next} />
            </Item>
            <ItemTitle>{key.title}</ItemTitle>
          </Column>
        ))}
      </Row>
    </Container>
  );
}
