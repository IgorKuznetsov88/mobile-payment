import React from "react";
import { Form, InputNumber } from "antd";
import { Parallax } from "react-scroll-parallax";
import "./summary_styles.css";

class Summary extends React.Component {
  render() {
    return (
      <div>
          <Form.Item label="Введите сумму " className="summaryInput">
            <span>(min-1 max-1000)</span>
            <br />
        <Parallax className="custom-class" y={[-30, 30]} tagOuter="figure">
            <InputNumber
              defaultValue={1000}
              max={1000}
              min={1}
              formatter={value =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={value => value.replace(/\$\s?|(,*)/g, "")}
            />
        </Parallax>
          </Form.Item>
      </div>
    );
  }
}

export default Form.create()(Summary);
