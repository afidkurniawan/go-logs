/* eslint-disable no-console */
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
import { loader } from "graphql.macro";
import { useLazyQuery } from "@apollo/client";

export default function FormBL() {
  const { t } = useTranslation();
  const [showResults, setShowResults] = useState(false);

  const [getCargo, { loading, data }] = useLazyQuery(cargoQuery);
  if (loading) return <p>Loading ...</p>;

  function handleClick(e) {
    getCargo({
      variables: { blNumber: "OBJKT206645", blDate: "20200928" }
    });
    setShowResults(true);
  }

  const ResultWindow = showResults && data ? <Result data={data} /> : null;

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
          <Button type={"button"} onClick={handleClick}>
            {t(translations.wizard.bottom.check)}
          </Button>
        </Group>
        {ResultWindow}
      </Form>
      <br />
    </>
  );
}

const cargoQuery = loader("../../../graphql/queries/Cargo.graphql");
