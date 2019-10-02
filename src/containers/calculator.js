import React, { Component } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Table,
  Input,
  Row,
  Col
} from "reactstrap";
import { connect } from "react-redux";

import Colors from "../constants/colors";

import Actions from "../redux/actions/calculator";

import Cell from "../components/calculatorCell";

export class calculator extends Component {
  state = {
    value: "",
    lastOperator: ""
  };

  //   componentWillReceiveProps(newProps) {
  //     this.setState({ value: newProps.calculatedValue + "" });
  //   }

  updateInput = value => {
    this.setState({ value: this.state.value + value });
  };

  handleOperators = type => {
    if (
      !this.state.lastOperator &&
      !this.state.value &&
      !this.props.calculatedValue
    ) {
      return;
    }
    switch (this.state.lastOperator ? this.state.lastOperator : type) {
      case "multiply":
        this.props.multiply(+this.state.value || 1);
        this.setState({ value: "", lastOperator: type });
        break;
      case "add":
        this.props.add(+this.state.value);
        this.setState({ value: "", lastOperator: type });
        break;
      case "sub":
        this.props.substract(+this.state.value);
        this.setState({ value: "", lastOperator: type });
        break;
      case "div":
        this.props.division(+this.state.value || 1);
        this.setState({ value: "", lastOperator: type });
        break;
      case "squareRoot":
        this.props.squareRoot(
          this.state.value ? +this.state.value : this.props.calculatedValue
        );
        this.setState({ value: "", lastOperator: "" });
        break;
      case "square":
        this.props.square(
          this.state.value ? +this.state.value : this.props.calculatedValue
        );
        this.setState({ value: "", lastOperator: "" });
        break;
      case "flipSign":
        this.props.flipSign(
          this.state.value ? +this.state.value : this.props.calculatedValue
        );
        this.setState({ value: "", lastOperator: "" });
        break;
      default:
        break;
    }
  };

  reset = () => {
    this.setState({
      value: "",
      lastOperator: ""
    });
    this.props.update(0);
  };

  render() {
    document.body.style.backgroundColor =
      Colors[this.props.theme].pageBackground;
    return (
      <div style={{ width: "50%", margin: "auto" }}>
        <Card>
          <CardHeader>
            <Row>
              <Col>
                <Button
                  onClick={this.props.toggleScientificMode}
                  outline={!this.props.scientificMode}
                  color="secondary"
                >
                  Scientific Mode
                </Button>
              </Col>
              <Col>
                <Button
                  onClick={() => this.props.changeTheme("light")}
                  outline={!(this.props.theme === "light")}
                  color="secondary"
                >
                  Light Theme
                </Button>
                <Button
                  onClick={() => this.props.changeTheme("dark")}
                  outline={!(this.props.theme === "dark")}
                  color="secondary"
                >
                  Dark Theme
                </Button>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <Input
              disabled={true}
              onChange={e => this.updateInput(e.target.value)}
              onKeyPress={e => this.handleOperators(e.which)}
              style={{ textAlign: "right" }}
              type="number"
              value={this.state.value || this.props.calculatedValue}
            />
            <Table
              style={{
                backgroundColor: Colors[this.props.theme].calcBackground
              }}
              bordered
            >
              <tbody>
                <tr>
                  <Cell
                    style={{
                      backgroundColor: Colors[this.props.theme].calcBackground,
                      color: Colors[this.props.theme].fontColor
                    }}
                    onClick={() => this.updateInput(1)}
                    title="1"
                  />
                  <Cell
                    style={{
                      backgroundColor: Colors[this.props.theme].calcBackground,
                      color: Colors[this.props.theme].fontColor
                    }}
                    onClick={() => this.updateInput(2)}
                    title="2"
                  />
                  <Cell
                    style={{
                      backgroundColor: Colors[this.props.theme].calcBackground,
                      color: Colors[this.props.theme].fontColor
                    }}
                    onClick={() => this.updateInput(3)}
                    title="3"
                  />
                  <Cell
                    style={{
                      backgroundColor: Colors[this.props.theme].calcBackground,
                      color: Colors[this.props.theme].fontColor
                    }}
                    onClick={() => this.handleOperators("add")}
                    title="Add (+)"
                  />
                  {this.props.scientificMode && (
                    <Cell
                      style={{
                        backgroundColor:
                          Colors[this.props.theme].calcBackground,
                        color: Colors[this.props.theme].fontColor
                      }}
                      onClick={() => this.handleOperators("squareRoot")}
                      title="Square Root (√)"
                    />
                  )}
                </tr>
                <tr>
                  <Cell
                    style={{
                      backgroundColor: Colors[this.props.theme].calcBackground,
                      color: Colors[this.props.theme].fontColor
                    }}
                    onClick={() => this.updateInput(4)}
                    title="4"
                  />
                  <Cell
                    style={{
                      backgroundColor: Colors[this.props.theme].calcBackground,
                      color: Colors[this.props.theme].fontColor
                    }}
                    onClick={() => this.updateInput(5)}
                    title="5"
                  />
                  <Cell
                    style={{
                      backgroundColor: Colors[this.props.theme].calcBackground,
                      color: Colors[this.props.theme].fontColor
                    }}
                    onClick={() => this.updateInput(6)}
                    title="6"
                  />
                  <Cell
                    style={{
                      backgroundColor: Colors[this.props.theme].calcBackground,
                      color: Colors[this.props.theme].fontColor
                    }}
                    onClick={() => this.handleOperators("sub")}
                    title="Substract (-)"
                  />
                  {this.props.scientificMode && (
                    <Cell
                      style={{
                        backgroundColor:
                          Colors[this.props.theme].calcBackground,
                        color: Colors[this.props.theme].fontColor
                      }}
                      onClick={() => this.handleOperators("square")}
                      title="Square"
                    />
                  )}
                </tr>
                <tr>
                  <Cell
                    style={{
                      backgroundColor: Colors[this.props.theme].calcBackground,
                      color: Colors[this.props.theme].fontColor
                    }}
                    onClick={() => this.updateInput(7)}
                    title="7"
                  />
                  <Cell
                    style={{
                      backgroundColor: Colors[this.props.theme].calcBackground,
                      color: Colors[this.props.theme].fontColor
                    }}
                    onClick={() => this.updateInput(8)}
                    title="8"
                  />
                  <Cell
                    style={{
                      backgroundColor: Colors[this.props.theme].calcBackground,
                      color: Colors[this.props.theme].fontColor
                    }}
                    onClick={() => this.updateInput(9)}
                    title="9"
                  />
                  <Cell
                    style={{
                      backgroundColor: Colors[this.props.theme].calcBackground,
                      color: Colors[this.props.theme].fontColor
                    }}
                    onClick={() => this.handleOperators("multiply")}
                    title="Multiply (*)"
                  />
                  {this.props.scientificMode && (
                    <Cell
                      style={{
                        backgroundColor:
                          Colors[this.props.theme].calcBackground,
                        color: Colors[this.props.theme].fontColor
                      }}
                      onClick={() => this.handleOperators("flipSign")}
                      title="Flip Sign"
                    />
                  )}
                </tr>
                <tr>
                  <Cell
                    style={{
                      backgroundColor: Colors[this.props.theme].calcBackground,
                      color: Colors[this.props.theme].fontColor
                    }}
                    onClick={() => this.reset()}
                    title="clear"
                  />
                  <Cell
                    style={{
                      backgroundColor: Colors[this.props.theme].calcBackground,
                      color: Colors[this.props.theme].fontColor
                    }}
                    onClick={() => this.updateInput(0)}
                    title="0"
                  />
                  <Cell
                    style={{
                      backgroundColor: Colors[this.props.theme].calcBackground,
                      color: Colors[this.props.theme].fontColor
                    }}
                    onClick={() => this.handleOperators("")}
                    title="="
                  />
                  <Cell
                    style={{
                      backgroundColor: Colors[this.props.theme].calcBackground,
                      color: Colors[this.props.theme].fontColor
                    }}
                    onClick={() => this.handleOperators("div")}
                    title="Divide (/)"
                  />
                  {this.props.scientificMode && (
                    <td
                      style={{
                        backgroundColor: Colors[this.props.theme].calcBackground
                      }}
                    ></td>
                  )}
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  calculatedValue: state.calculatedValue,
  scientificMode: state.showScientificMode,
  theme: state.theme
});

const mapDispatchToProps = dispatch => ({
  add: value => {
    dispatch(Actions.addition(value));
  },
  substract: value => {
    dispatch(Actions.substraction(value));
  },
  multiply: value => dispatch(Actions.multiplication(value)),
  division: value => dispatch(Actions.division(value)),
  squareRoot: value => dispatch(Actions.squareRoot(value)),
  square: value => dispatch(Actions.square(value)),
  flipSign: value => dispatch(Actions.flipSign(value)),
  update: value => dispatch(Actions.updateValue(value)),
  toggleScientificMode: () => dispatch(Actions.toggleScientificMode()),
  changeTheme: value => dispatch(Actions.changeTheme(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(calculator);
