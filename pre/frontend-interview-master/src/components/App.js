/* eslint-disable */
import React, { Component } from "react";
import Express from "../views/Express";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as calcActions from "../store/modules/Calc";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      multiply: 12,
      substract: null
    };
  }

  componentDidMount() {
    this.init();
  }

  _handleDetecting = () => {
    this.setState({
      plus: 33 // 30이 아닌 33을 더해야 할거 같아요..!
    });
  };

  _handleShow = val => {
    var { CalcActions } = this.props;
    if (val == "") {
      return null;
    } else {
      CalcActions.showAction(val);
      this._handleDetecting();
    }
  };

  setStating() {
    return {
      sNumber: 13,
      pass: () => { // 함수의 this가 선언시점의 렉시컬 스코프로 동작하는 arrow함수로 바꾸어야 기대했던 동작대로 됩니다..!
        var substract;
        return (substract = this.sNumber);
      }
    };
  }

  init() {
    var substract = this.setStating.call({ sNumber: -33 }).pass(); // call을 통해 this변경!, 새로 넘긴 객체의 sNumber를 pass()의 this.sNumber로 사용하고 싶은 의도인것 같네요!
    
    this.setState({ substract });
  }

  render() {
    var { source, show } = this.props;
    var { multiply, substract, plus } = this.state;
    return (
      <Express
        source={source}
        multiply={multiply}
        show={show}
        plus={plus}
        substract={substract}
        handleShow={this._handleShow}
      />
    );
  }
}

var mapStateToProps = state => ({
  source: state.Calc.get("source"),
  show: state.Calc.get("show")
});

var mapDispatchToProps = dispatch => ({
  CalcActions: bindActionCreators(calcActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
