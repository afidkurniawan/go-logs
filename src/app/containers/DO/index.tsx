import React from "react";
import { Helmet } from "react-helmet-async";
import { Sidebar } from "../../components/Sidebar/Loadable";
import { Header } from "../../components/Header/Loadable";

import { useTranslation } from "react-i18next";
import { translations } from "../../../locales/i18n";

import { Container } from "../../../styles/RequestDO";
import { Wizard } from "../../components/Wizard/Loadable";

export default function RequestDO() {
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
      <Sidebar />
      <Header title={t(translations.requestDO.title)} />
      {content}
    </>
  );
}
