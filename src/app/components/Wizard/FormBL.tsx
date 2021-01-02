import React from "react";
import { Form, Group, Input, Icon, Label, Dropdown, Button } from "./Wizard";
import { DatePick } from "../Datepicker/Loadable";
import { useTranslation } from "react-i18next";
import { translations } from "../../../locales/i18n";

export default function FormBL() {
  const { t } = useTranslation();

  return (
    <Form>
      <Label>{t(translations.wizard.bottom.shipingline)}</Label>
      <Dropdown></Dropdown>
      <Label>{t(translations.wizard.bottom.blinformation)}</Label>
      <Group>
        <Input placeholder={t(translations.wizard.bottom.mblnumber)} />
        <div>
          <Icon src={require("../../../assets/icons/calendar.svg")} />
          <DatePick />
        </div>
        <Button>{t(translations.wizard.bottom.check)}</Button>
      </Group>
    </Form>
  );
}
