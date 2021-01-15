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
import FormBL from "./FormBL";

export default function Bottom() {
  const { t } = useTranslation();

  return (
    <Container>
      <Title>{t(translations.wizard.bottom.title)}</Title>
      <Row>
        <Column>
          <Item>
            <Rectangle show={false} />
            <CircleOuter active={true}>
              <CircleInner />
            </CircleOuter>
            <Rectangle show={true} />
          </Item>
          <ItemTitle>{t(translations.wizard.bottom.blinformation)}</ItemTitle>
        </Column>
        <Column>
          <Item>
            <Rectangle show={true} />
            <CircleOuter active={false}>
              <CircleInner />
            </CircleOuter>
            <Rectangle show={true} />
          </Item>
          <ItemTitle>{t(translations.wizard.bottom.uploadDocument)}</ItemTitle>
        </Column>
        <Column>
          <Item>
            <Rectangle show={true} />
            <CircleOuter active={false}>
              <CircleInner />
            </CircleOuter>
            <Rectangle show={false} />
          </Item>
          <ItemTitle>{t(translations.wizard.bottom.reviewRequest)}</ItemTitle>
        </Column>
      </Row>
      <FormBL />
    </Container>
  );
}
