import React, { useState } from "react";
import {
  Form,
  Group,
  Input,
  Icon,
  Label,
  Button
} from "../../../styles/Wizard";
import { DatePick } from "../Datepicker/Loadable";
import { useTranslation } from "react-i18next";
import { translations } from "../../../locales/i18n";
import { Dropdown } from "../Dropdown/Loadable";
import { shippingLine } from "../../../lib/Constants";
import Result from "./Result";

export default function FormBL() {
  const { t } = useTranslation();
  const [showResults, setShowResults] = useState(false);
  const onClick = () => {
    setShowResults(true);
  };
  const ResultWindow = showResults ? <Result /> : null;

  return (
    <>
      <Form>
        <Label>{t(translations.wizard.bottom.shipingline)}</Label>
        <Dropdown name="shippingLine" data={shippingLine} emptySelect={true} />
        <Label>{t(translations.wizard.bottom.blinformation)}</Label>
        <Group>
          <Input placeholder={t(translations.wizard.bottom.mblnumber)} />
          <div>
            <Icon src={require("../../../assets/icons/calendar.svg")} />
            <DatePick />
          </div>
          <Button type={"button"} onClick={onClick}>
            {t(translations.wizard.bottom.check)}
          </Button>
        </Group>
        {ResultWindow}
      </Form>
      <br />
    </>
  );
}
