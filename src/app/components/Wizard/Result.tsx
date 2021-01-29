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

interface IProps {
  data?: any;
}

export default function Result(props: IProps) {
  const { t } = useTranslation();
  const handleChange = e => {};
  const ContainerLabel = () => (
    <Row>
      <Col2>
        <Label>{t(translations.wizard.bottom.result.containerNo)}</Label>
      </Col2>
      <Col2>
        <Label>{t(translations.wizard.bottom.result.sealNo)}</Label>
      </Col2>
      <Col2>
        <Label>{t(translations.wizard.bottom.result.sizeType)}</Label>
      </Col2>
      <Col2>
        <Label>{t(translations.wizard.bottom.result.grossWeight)}</Label>
      </Col2>
      <Col2>
        <Label>{t(translations.wizard.bottom.result.depoName)}</Label>
      </Col2>
      <Col2>
        <Label>{t(translations.wizard.bottom.result.phoneNumber)}</Label>
      </Col2>
    </Row>
  );

  const ContainerValue = (props: IProps) => (
    <Row>
      <Col2>
        <InputLong
          name="containerNo"
          value={props.data.containerNumber}
          onChange={handleChange}
        />
      </Col2>
      <Col2>
        <InputLong
          name="sealNo"
          value={props.data.sealNumber}
          onChange={handleChange}
        />
      </Col2>
      <Col2>
        <InputLong
          name="sizeType"
          value={props.data.size}
          onChange={handleChange}
        />
      </Col2>
      <Col2>
        <InputLong name="grossWeight" />
      </Col2>
      <Col2>
        <InputLong name="depoName" />
      </Col2>
      <Col2>
        <InputLong name="phoneNumber" />
      </Col2>
    </Row>
  );

  const Containers = (props: IProps) =>
    props.data.map((key, i) => <ContainerValue key={i} data={key} />);

  return (
    <>
      <Message error={true}>
        <MessageTitle>
          {t(translations.wizard.bottom.result.notFoundStatus)}
        </MessageTitle>
      </Message>
      <Row>
        <Col3>
          <Row>
            <Col12>
              <Label>{t(translations.wizard.bottom.shipingline)}</Label>
              <InputLong value={""} onChange={handleChange} />
            </Col12>
          </Row>
        </Col3>
        <Col9>
          <Row>
            <Col12>
              <Label>{t(translations.wizard.bottom.mblnumber)}</Label>
              <InputLong
                value={props.data.cargo.blNumber}
                onChange={handleChange}
              />
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
              <Input value={""} onChange={handleChange} />
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
              <Input
                value={props.data.cargo.shipName}
                onChange={handleChange}
              />
            </Col6>
            <Col6>
              <Label>{t(translations.wizard.bottom.result.voyageNumber)}</Label>
              <Input
                value={props.data.cargo.voyageNumber}
                onChange={handleChange}
              />
            </Col6>
          </Row>
        </Col9>
      </Row>
      <Row>
        <Col3>
          <Row>
            <Col12>
              <Label>{t(translations.wizard.bottom.result.consignee)}</Label>
              <InputLong
                value={props.data.cargo.consigneeName}
                onChange={handleChange}
              />
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
      <ContainerLabel />
      <Containers data={props.data.cargo.containers} />
    </>
  );
}
