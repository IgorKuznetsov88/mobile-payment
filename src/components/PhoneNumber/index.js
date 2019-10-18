import React from "react";
import { Form } from "antd";
import PhoneNumberInput from "../PhoneNumberInput";
import { Parallax } from "react-scroll-parallax";
import "./phone_number_style.css";

class PhoneNumber extends React.Component {
  render() {
    return (
      <div>
        <Parallax className="custom-class" y={[-30, 30]} tagOuter="figure">
          <Form>
            <Form.Item label="Номер телефона:" className="telephoneNumber">
              {this.props.form.getFieldDecorator("number", {
                initialValue: "number",
                rules: [
                  {
                    required: true,
                    whitespace: true,
                    message: "Пожалуйста, введите номер вашего телефона."
                  },

                  { min: 17, message: "Введенный номер слишком короткий." }
                ]
              })(
                <PhoneNumberInput placeholder="Пожалуйста, введите номер вашего телефона" />
              )}
            </Form.Item>
          </Form>
        </Parallax>
      </div>
    );
  }
}
export default Form.create()(PhoneNumber);
