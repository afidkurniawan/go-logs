/* eslint-disable no-console */
import React, { useState } from "react";
import {
  Form,
  Group,
  Input,
  Icon,
  Label,
  Button,
  Dropdown,
  DropdownText,
  DropdownExpand,
  MessageInput
} from "../../../styles/Wizard";

import { useTranslation } from "react-i18next";
import { translations } from "../../../locales/i18n";
import Result from "./Result";
import { loader } from "graphql.macro";
import { useLazyQuery } from "@apollo/client";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../../styles/Datepicker.css";
import moment from "moment";

export default function FormBL() {
  const { t } = useTranslation();
  const [showResults, setShowResults] = useState(false);
  const [msgBox, showMsgBox] = useState(false);
  const [blNumber, setBlNumber] = useState("");
  const [blDate, setBlDate] = useState("");
  const [showToast, setShowToast] = useState(false);

  const [getCargo, { loading, data }] = useLazyQuery(cargoQuery);
  if (loading) return <p>Loading ...</p>;

  function handleSubmit(e) {
    if (!blNumber && !blDate) {
      showMsgBox(true);
    } else {
      showMsgBox(false);
      setShowResults(false);
      let formatedBLDate = moment(blDate).format("YYYYMMDD");
      getCargo({
        variables: { blNumber: blNumber, blDate: formatedBLDate }
      });
      if (data) {
        setShowResults(true);
        setShowToast(true);
      } else {
        setShowResults(true);
        setShowToast(false);
      }
    }
    e.preventDefault();
  }

  let handleSelectChange = (date, event) => {
    setBlDate(date);
  };
  let handleInputChange = e => {
    setBlNumber(e.target.value);
  };

  const ResultWindow = showResults ? (
    <Result data={data} found={showToast} />
  ) : null;

  return (
    <>
      <Form>
        <Label>{t(translations.wizard.bottom.shipingline)}</Label>
        <Dropdown>
          <DropdownText>
            {t(translations.wizard.bottom.shippingLineSelected)}
          </DropdownText>
          <DropdownExpand src={require("../../../assets/icons/forward.svg")} />
        </Dropdown>
        <Label>{t(translations.wizard.bottom.blinformation)}</Label>
        <Group>
          <div>
            <Input
              placeholder={t(translations.wizard.bottom.mblnumber)}
              onChange={handleInputChange}
              value={blNumber}
              error={msgBox}
            />
            <MessageInput show={msgBox}>
              {t(translations.error.requiredField)} *
            </MessageInput>
          </div>
          <div>
            <Icon src={require("../../../assets/icons/calendar.svg")} />
            <DatePicker
              selected={blDate}
              placeholderText={t(translations.wizard.bottom.selectDate)}
              onChange={handleSelectChange}
              maxDate={moment().toDate()}
            />
            <MessageInput show={msgBox}>
              {t(translations.error.requiredField)} *
            </MessageInput>
          </div>
          <div>
            <Button type={"button"} onClick={handleSubmit} show={true}>
              {t(translations.wizard.bottom.check)}
            </Button>
          </div>
        </Group>
        {ResultWindow}
      </Form>
    </>
  );
}

const cargoQuery = loader("../../../graphql/queries/Cargo.graphql");
