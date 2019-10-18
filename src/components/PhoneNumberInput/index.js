import React, { Component } from "react";
import PropTypes from "prop-types";
import MaskedInput from "react-text-mask";
import { Parallax } from "react-scroll-parallax";
import { Icon, Input } from "antd";

class PhoneNumberInput extends Component {
  renderInput = (ref, props) => {
    const { inputProps } = this.props;

    return (
      <Parallax className="custom-class" y={[-30, 30]} tagOuter="figure">
      <Input
        prefix={<Icon type="phone" />}
        ref={input => ref(input && input.input)}
        {...this.props["data-__field"]}
        {...inputProps}
        {...props}
      />
        </Parallax>
    );
      };
    
  render() {
    const { value } = this.props;

    return (
      <Parallax className="custom-class" y={[-30, 30]} tagOuter="figure">
        <MaskedInput
          mask={[
            "+",
            [7],
            "(",
            /[0-9]/,
            /\d/,
            /\d/,
            ")",
            " ",
            /\d/,
            /\d/,
            /\d/,
            "-",
            /\d/,
            /\d/,
            "-",
            /\d/,
            /\d/
          ]}
          guide={false}
          value={value}
          showMask
          render={this.renderInput}
          onChange={this.props.onChange}
        />
      </Parallax>
    );
  }
}

PhoneNumberInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  "data-__field": PropTypes.object,
  value: PropTypes.string,
  inputProps: PropTypes.object
};

export default PhoneNumberInput;
