import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { translations } from "../../../locales/i18n";
import {
  Container,
  CircleInner,
  CircleOuter,
  Rectangle
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

  return (
    <>
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
            <ItemTitle>
              {t(translations.wizard.bottom.uploadDocument)}
            </ItemTitle>
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
      </Container>
      <Footer>
        <ButtonO show={buttonPrev} onClick={handlePrev}>
          Previous
        </ButtonO>
        <Button show={buttonNext} onClick={handleNext}>
          NextStep
        </Button>
        <Button show={buttonSubmit} onClick={handleSubmit}>
          SubmitRequest
        </Button>
      </Footer>
    </>
  );
}
