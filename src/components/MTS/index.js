import React, { Component } from "react";
import PhoneNumber from "../PhoneNumber";
import PaymentButton from "../PaymentButton";
import Summary from "../summary";

import { Select, Row, Col } from "antd";
import "./mts_styles.css";

const { Option } = Select;

class MTS extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={12} offset={6}>
            <Select defaultValue="MTS" style={{ width: 120 }} disabled>
              <Option value="MTS">МТС</Option>
            </Select>
            <PhoneNumber />
            <Summary />
            <PaymentButton className="slideRight" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default MTS;
