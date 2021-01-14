import React from "react";
import {
  Message,
  MessageTitle,
  Label,
  Input,
  InputLong,
  Row,
  Col2,
  Col3,
  Col6,
  Col9,
  Col12
} from "../../../styles/Result";
import { useTranslation } from "react-i18next";
import { translations } from "../../../locales/i18n";

export default function Result() {
  const { t } = useTranslation();

  return (
    <>
      <Message error={false}>
        <MessageTitle>
          {t(translations.wizard.bottom.result.foundStatus)}
        </MessageTitle>
      </Message>
      <Row>
        <Col3>
          <Row>
            <Col12>
              <Label>{t(translations.wizard.bottom.shipingline)}</Label>
              <InputLong />
            </Col12>
          </Row>
        </Col3>
        <Col9>
          <Row>
            <Col12>
              <Label>{t(translations.wizard.bottom.mblnumber)}</Label>
              <InputLong />
            </Col12>
          </Row>
        </Col9>
      </Row>
      <Row>
        <Col3>
          <Row>
            <Col12>
              <Label>{t(translations.wizard.bottom.result.notifyParty)}</Label>
              <InputLong />
            </Col12>
          </Row>
        </Col3>
        <Col9>
          <Row>
            <Col6>
              <Label>{t(translations.wizard.bottom.result.doNumber)}</Label>
              <Input />
            </Col6>
            <Col6>
              <Label>
                {t(translations.wizard.bottom.result.doExpiredDate)}
              </Label>
              <Input />
            </Col6>
          </Row>
          <Row>
            <Col6>
              <Label>{t(translations.wizard.bottom.result.vessel)}</Label>
              <Input />
            </Col6>
            <Col6>
              <Label>{t(translations.wizard.bottom.result.voyageNumber)}</Label>
              <Input />
            </Col6>
          </Row>
        </Col9>
      </Row>
      <Row>
        <Col3>
          <Row>
            <Col12>
              <Label>{t(translations.wizard.bottom.result.consignee)}</Label>
              <InputLong />
            </Col12>
          </Row>
        </Col3>
        <Col9>
          <Row>
            <Col12>
              <Label>
                {t(translations.wizard.bottom.result.portOfLoading)}
              </Label>
              <InputLong />
            </Col12>
          </Row>
          <Row>
            <Col12>
              <Label>
                {t(translations.wizard.bottom.result.portOfDischarge)}
              </Label>
              <InputLong />
            </Col12>
          </Row>
          <Row>
            <Col12>
              <Label>
                {t(translations.wizard.bottom.result.portOfDelivery)}
              </Label>
              <InputLong />
            </Col12>
          </Row>
        </Col9>
      </Row>
      <Label>{t(translations.wizard.bottom.result.containerInformation)}</Label>
      <Row>
        <Col2>
          <Label>{t(translations.wizard.bottom.result.containerNo)}</Label>
          <InputLong />
        </Col2>
        <Col2>
          <Label>{t(translations.wizard.bottom.result.sealNo)}</Label>
          <InputLong />
        </Col2>
        <Col2>
          <Label>{t(translations.wizard.bottom.result.sizeType)}</Label>
          <InputLong />
        </Col2>
        <Col2>
          <Label>{t(translations.wizard.bottom.result.grossWeight)}</Label>
          <InputLong />
        </Col2>
        <Col2>
          <Label>{t(translations.wizard.bottom.result.depoName)}</Label>
          <InputLong />
        </Col2>
        <Col2>
          <Label>{t(translations.wizard.bottom.result.phoneNumber)}</Label>
          <InputLong />
        </Col2>
      </Row>
    </>
  );
}
