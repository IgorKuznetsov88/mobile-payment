import React, { Component } from "react";
import PhoneNumber from "../PhoneNumber";
import PaymentButton from "../PaymentButton";
import Summary from "../summary";
import { Select, Row, Col } from "antd";

const { Option } = Select;

class Megafone extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={12} offset={6}>
        <Select defaultValue="Megafone" style={{ width: 120 }} disabled>
          <Option value="Megafone">Мегафон</Option>
        </Select>
            <PhoneNumber />
            <Summary />
            <PaymentButton />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Megafone;
