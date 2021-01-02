import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { translations } from "../../../locales/i18n";

import { Container } from "./RequestDO";
import { Wizard } from "../../components/Wizard/Loadable";

export default function DoRquest() {
  const { t } = useTranslation();

  let content = (
    <Container>
      <Wizard />
    </Container>
  );
  return (
    <>
      <Helmet>
        <title>{t(translations.requestDO.title)}</title>
      </Helmet>
      {content}
    </>
  );
}
