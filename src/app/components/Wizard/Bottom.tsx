import React from "react";
import { useTranslation } from "react-i18next";
import { translations } from "../../../locales/i18n";
import {
  Container,
  CircleInner,
  CircleOuter,
  Rectangle
} from "../../../styles/WizardBottom";

import { Title, Row, Column, Item, ItemTitle } from "../../../styles/Wizard";
import { bottomWizard } from "../../../lib/Constants";
import FormBL from "./FormBL";

export default function Bottom() {
  const { t } = useTranslation();

  return (
    <Container>
      <Title>{t(translations.wizard.bottom.title)}</Title>
      <Row>
        {bottomWizard.map((key, i) => (
          <Column key={i}>
            <Item>
              <Rectangle show={key.prev} />
              <CircleOuter active={key.active}>
                <CircleInner />
              </CircleOuter>
              <Rectangle show={key.next} />
            </Item>
            <ItemTitle>{key.title}</ItemTitle>
          </Column>
        ))}
      </Row>
      <FormBL />
    </Container>
  );
}
