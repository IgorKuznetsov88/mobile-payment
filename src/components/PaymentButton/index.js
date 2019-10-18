import React from "react";
import axios from "axios";
import { Button } from "antd";
import "./payment_button_style.css";

const randomResponse = Math.floor(Math.random() * 2) + 1;
const str = randomResponse.toString();

export default class PaymentButton extends React.Component {
  state = {
    loading: true,
    data: {
      response: []
    }
  };

  async componentDidMount() {
    this.setState();
  }

  paymentAlert = () => {
    this.setState(this.fetchData);
  };

  fetchData() {
    axios
      .get("/stub/response_" + str + ".json")
      .then(data => {
        this.setState({ data: data.data.response, loading: false });
        alert(this.state.data);

        if (str === "2") {
          window.location.reload();
        } else {
          window.location = "/Main";
        }
      });
  }

  render() {
    return (
      <div className="wrapper">
        <div>{console.log(str)}</div>
        <Button
          type="primary"
          onClick={this.paymentAlert}
          className="slideRight"
        >
          Оплатить
        </Button>
      </div>
    );
  }
}
