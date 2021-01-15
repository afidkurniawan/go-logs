import React from "react";
import { useTranslation } from "react-i18next";
import { translations } from "../../../locales/i18n";

import { Title, Row, Column, Item, ItemTitle } from "../../../styles/Wizard";
import {
  Container,
  Icon,
  Circle,
  Number,
  Rectangle
} from "../../../styles/WizardTop";

export default function Top() {
  const { t } = useTranslation();

  return (
    <Container>
      <Title>{t(translations.wizard.top.title)}</Title>
      <Row>
        <Column>
          <Icon src={require("../../../assets/icons/iwizard1.svg")} />
          <Item>
            <Rectangle show={false} />
            <Circle active={true}>
              <Number active={true}>1</Number>
            </Circle>
            <Rectangle show={true} />
          </Item>
          <ItemTitle>{t(translations.wizard.top.requestForm)}</ItemTitle>
        </Column>
        <Column>
          <Icon src={require("../../../assets/icons/iwizard2.svg")} />
          <Item>
            <Rectangle show={true} />
            <Circle active={false}>
              <Number active={false}>2</Number>
            </Circle>
            <Rectangle show={true} />
          </Item>
          <ItemTitle>{t(translations.wizard.top.confirmation)}</ItemTitle>
        </Column>
        <Column>
          <Icon src={require("../../../assets/icons/iwizard3.svg")} />
          <Item>
            <Rectangle show={true} />
            <Circle active={false}>
              <Number active={false}>3</Number>
            </Circle>
            <Rectangle show={true} />
          </Item>
          <ItemTitle>{t(translations.wizard.top.proformaInvoice)}</ItemTitle>
        </Column>
        <Column>
          <Icon src={require("../../../assets/icons/iwizard4.svg")} />
          <Item>
            <Rectangle show={true} />
            <Circle active={false}>
              <Number active={false}>4</Number>
            </Circle>
            <Rectangle show={true} />
          </Item>
          <ItemTitle>
            {t(translations.wizard.top.paymentConfirmation)}
          </ItemTitle>
        </Column>
        <Column>
          <Icon src={require("../../../assets/icons/iwizard5.svg")} />
          <Item>
            <Rectangle show={true} />
            <Circle active={false}>
              <Number active={false}>5</Number>
            </Circle>
            <Rectangle show={false} />
          </Item>
          <ItemTitle>{t(translations.wizard.top.doRelease)}</ItemTitle>
        </Column>
      </Row>
    </Container>
  );
}
