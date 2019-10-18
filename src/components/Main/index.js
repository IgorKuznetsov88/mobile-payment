import React from "react";
import { Menu, Icon, Button, Row, Col } from "antd";
const { SubMenu } = Menu;


class Operators extends React.Component {
  

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <div>
        <br />
        <br />
        <Row>
          <Col span={12} offset={4}>
            <Button type="primary" href="/Main">
              На главную
            </Button>
          </Col>
        </Row>
        <Row>
          <Col span={12} offset={6}>
            <Menu
              className="main_menu"
              defaultOpenKeys={[""]}
              mode="inline"
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="none" />
                    <span>Выберете оператора</span>
                  </span>
                }
              >
                <Menu.Item key="1">
                  <a href="/MTS"> МТС </a>
                </Menu.Item>

                <Menu.Item key="2">
                  <a href="/componets/Beeline">Билайн</a>
                </Menu.Item>
                <Menu.Item key="3">
                  <a href="/components/Megafone"> Мегафон</a>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Operators;
