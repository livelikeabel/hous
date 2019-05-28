import React from "react";
import PropTypes from "prop-types";
import correct from "../assets/icon/correct.png";
import incorrect from "../assets/icon/incorrect.png";

const Express = props => {
  return props.show ? (
    <div>
      <p style={{ position: "relative" }}>
        <p
          style={{
            fontWeight: "bold",
            display: "inline-block",
            marginRight: "10px"
          }}
        >
          1)
        </p>
        3 X 12
        <img
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100px",
            height: "100px"
          }}
          src={props.source * props.multiply === 36 ? correct : incorrect}
          alt="채점"
        />
      </p>
      <p>답 : {props.source * props.multiply}</p>

      <p style={{ position: "relative" }}>
        <p
          style={{
            fontWeight: "bold",
            display: "inline-block",
            marginRight: "10px"
          }}
        >
          2)
        </p>
        3 - (-33)
        <img
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100px",
            height: "100px"
          }}
          src={props.source - props.substract === 36 ? correct : incorrect}
          alt="채점"
        />
      </p>
      <p>답 : {props.source - props.substract}</p>

      <p style={{ position: "relative" }}>
        <p
          style={{
            fontWeight: "bold",
            display: "inline-block",
            marginRight: "10px"
          }}
        >
          3)
        </p>
        3 + 33
        <img
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100px",
            height: "100px"
          }}
          src={props.source + props.plus === 36 ? correct : incorrect}
          alt="채점"
        />
      </p>
      <p> 답 : {props.source + props.plus}</p>

      <p>
        {" "}
        문제) 힝 ㅜㅜ 같은 답이 나와야하는데, 어떻게 고쳐야할까요? (정답 : 36)
      </p>

      <small>
        * 여러분의 동료가 이렇게 코드를 만들었다 가정하고, 코드들 중 어떤 문제가
        있고 해당 코드를 사용했을때 어떤 문제가 우려되는지, 또 고쳐보신 후 왜
        그렇게 고치게 되었는지 주석으로 코드 옆에 남겨주세요. *
      </small>
    </div>
  ) : (
    <button onClick={() => props.handleShow(true)}>시험 결과 오픈!</button>
  );
};

Express.propTypes = {
  source: PropTypes.any.isRequired,
  multiply: PropTypes.any.isRequired,
  substract: PropTypes.number.isRequired,
  plus: PropTypes.any,
  show: PropTypes.any,
  handleShow: PropTypes.func
};

export default Express;
