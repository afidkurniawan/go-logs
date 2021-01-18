import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { translations } from "../../../locales/i18n";
import {
  Container,
  CircleInner,
  CircleOuter,
  Rectangle,
  CMark
} from "../../../styles/WizardBottom";

import {
  Title,
  Row,
  Column,
  Item,
  ItemTitle,
  Button,
  ButtonO,
  Footer
} from "../../../styles/Wizard";

export default function Bottom() {
  const { t } = useTranslation();
  const [step, setStep] = useState(0);

  const handlePrev = () => {
    setStep(step - 1);
  };
  const handleNext = () => {
    setStep(step + 1);
  };
  const handleSubmit = e => {
    e.preventDefault();
  };

  const buttonPrev = step > 0 && step <= 2 ? true : false;
  const buttonNext = step >= 0 && step < 2 ? true : false;
  const buttonSubmit = step === 2 ? true : false;
  const C1Mark = step >= 1 ? true : false;
  const C2Mark = step >= 2 ? true : false;
  const C3Mark = step >= 3 ? true : false;

  return (
    <>
      <Container>
        <Title>{t(translations.wizard.bottom.title)}</Title>
        <Row>
          <Column>
            <Item>
              <Rectangle show={false} />
              <CircleOuter active={true}>
                <CMark
                  src={require("../../../assets/icons/check.svg")}
                  show={C1Mark}
                />
                <CircleInner show={!C1Mark} />
              </CircleOuter>
              <Rectangle show={true} active={C1Mark} />
            </Item>
            <ItemTitle>{t(translations.wizard.bottom.blinformation)}</ItemTitle>
          </Column>
          <Column>
            <Item>
              <Rectangle show={true} active={C1Mark} />
              <CircleOuter active={C1Mark}>
                <CMark
                  src={require("../../../assets/icons/check.svg")}
                  show={C2Mark}
                />
                <CircleInner show={!C2Mark} />
              </CircleOuter>
              <Rectangle show={true} active={C2Mark} />
            </Item>
            <ItemTitle>
              {t(translations.wizard.bottom.uploadDocument)}
            </ItemTitle>
          </Column>
          <Column>
            <Item>
              <Rectangle show={true} active={C2Mark} />
              <CircleOuter active={C2Mark}>
                <CMark
                  src={require("../../../assets/icons/check.svg")}
                  show={C3Mark}
                />
                <CircleInner show={!C3Mark} />
              </CircleOuter>
              <Rectangle show={false} />
            </Item>
            <ItemTitle>{t(translations.wizard.bottom.reviewRequest)}</ItemTitle>
          </Column>
        </Row>
      </Container>
      <Footer>
        <ButtonO show={buttonPrev} onClick={handlePrev}>
          {t(translations.wizard.bottom.previous)}
        </ButtonO>
        <Button show={buttonNext} onClick={handleNext}>
          {t(translations.wizard.bottom.nextStep)}
        </Button>
        <Button show={buttonSubmit} onClick={handleSubmit}>
          {t(translations.wizard.bottom.submitRequest)}
        </Button>
      </Footer>
    </>
  );
}
