import React from "react";
import TopWizard from "./Top";
import BottomWizard from "./Bottom";
import { Triangle } from "../../../styles/Wizard";

export default function index() {
  return (
    <>
      <TopWizard />
      <Triangle />
      <BottomWizard />
      <br />
    </>
  );
}
