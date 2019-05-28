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
      plus: 30
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
      pass: function() {
        var substract;
        return (substract = this.sNumber);
      }
    };
  }

  init() {
    var substract = this.setStating.call({ sNumber: -33 }).pass();

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
