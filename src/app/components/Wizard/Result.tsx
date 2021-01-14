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

export default function Result() {
  return (
    <>
      <Message error={false}>
        <MessageTitle>Job Found!</MessageTitle>
      </Message>
      <Row>
        <Col3>
          <Row>
            <Col12>
              <Label>Shipping Line</Label>
              <InputLong />
            </Col12>
          </Row>
        </Col3>
        <Col9>
          <Row>
            <Col12>
              <Label>BL Number</Label>
              <InputLong />
            </Col12>
          </Row>
        </Col9>
      </Row>
      <Row>
        <Col3>
          <Row>
            <Col12>
              <Label>Notify Party</Label>
              <InputLong />
            </Col12>
          </Row>
        </Col3>
        <Col9>
          <Row>
            <Col6>
              <Label>DO Number</Label>
              <Input />
            </Col6>
            <Col6>
              <Label>DO Expired Date</Label>
              <Input />
            </Col6>
          </Row>
          <Row>
            <Col6>
              <Label>Vessel</Label>
              <Input />
            </Col6>
            <Col6>
              <Label>Voyage Number</Label>
              <Input />
            </Col6>
          </Row>
        </Col9>
      </Row>
      <Row>
        <Col3>
          <Row>
            <Col12>
              <Label>Consignee</Label>
              <InputLong />
            </Col12>
          </Row>
        </Col3>
        <Col9>
          <Row>
            <Col12>
              <Label>Port of Loading</Label>
              <InputLong />
            </Col12>
          </Row>
          <Row>
            <Col12>
              <Label>Port of Discharge</Label>
              <InputLong />
            </Col12>
          </Row>
          <Row>
            <Col12>
              <Label>Port of Delivery</Label>
              <InputLong />
            </Col12>
          </Row>
        </Col9>
      </Row>
      <Label>Container Information</Label>
      <Row>
        <Col2>
          <Label>Container No</Label>
          <InputLong />
        </Col2>
        <Col2>
          <Label>Seal No</Label>
          <InputLong />
        </Col2>
        <Col2>
          <Label>Size Type</Label>
          <InputLong />
        </Col2>
        <Col2>
          <Label>Gross Weight</Label>
          <InputLong />
        </Col2>
        <Col2>
          <Label>Depo Name</Label>
          <InputLong />
        </Col2>
        <Col2>
          <Label>Phone Number</Label>
          <InputLong />
        </Col2>
      </Row>
    </>
  );
}
