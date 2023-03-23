import moment from "moment";
import React, { useEffect, useState } from "react";
import { CgAddR } from "react-icons/cg";
import { TbSquareMinus } from "react-icons/tb";
import ButtonComponent from "./button-component";
import "./styles.css";

function StepperComponent(props) {
  const [amount, setAmount] = useState(0);
  const [isNumberValid, setValidNumber] = useState(true);
  const [data, setData] = useState([]);

  const warningTxt = "Is not a number!";

  const subBtnClassName = amount ? "sub-btn-enable" : "sub-btn-disable";
  const onSubmitData = (sign) => {
    console.log(sign, amount);
    document.getElementsByClassName("stepper-input")[0].value = "";
    setAmount(0);

    const userData = {
      srNo: data.length + 1,
      transactionType: sign === "-" ? "debit" : "credit",
      userAmount: sign + amount,
      dateOfSubmit: moment().format("DD-MM-YYYY"),
      timeOfSubmit: moment().format("HH:MM:SS"),
    };

    setData((prevData) => [...prevData, userData]);

    console.log(moment().format("HH:MM:SS"), data);
  };

  const onUserAmountInput = () => {
    const userValue =
      document.getElementsByClassName("stepper-input")[0]?.value;

    if (!isNaN(parseInt(userValue, 0)) || userValue === "") {
      setAmount(parseInt(userValue, 0));
      setValidNumber(true);
    } else {
      setValidNumber(false);
    }
  };

  const onAddAmountByOne = () => {
    setAmount(amount + 1);
    document.getElementsByClassName("stepper-input")[0].value = amount + 1;
  };

  const onSubAmountByOne = () => {
    if (amount > 0) {
      setAmount(amount - 1);
      document.getElementsByClassName("stepper-input")[0].value = amount - 1;
    }
  };

  useEffect(() => {
    props.userData(data);
  }, [data]);

  return (
    <div className="stepper-container">
      <div className="stepper-content-and-label">
        <div className="stepper-content">
          <div className="stepper-add-button-container">
            <button
              onClick={() => onAddAmountByOne()}
              className="stepper-btn-add"
            >
              <CgAddR className="btn-add" />
            </button>
          </div>
          <div className="stepper-input-container">
            <input
              onChange={() => onUserAmountInput()}
              className="stepper-input"
            />
          </div>
          <div className="stepper-sub-button-container">
            <button
              className="stepper-btn-sub"
              onClick={() => onSubAmountByOne()}
            >
              <TbSquareMinus className={`btn-sub ${subBtnClassName}`} />
            </button>
          </div>
        </div>
        <div className="stepper-warning">
          <span className={`${isNumberValid ? "warning-text" : ""}`}>
            {warningTxt}
          </span>
        </div>
      </div>
      <div className="stepper-submit-btn">
        <ButtonComponent
          btnText={"Debit"}
          onClickHandler={() => {
            amount ? onSubmitData("-") : "";
          }}
          type={"secondary"}
          isFontBold={true}
        />
        <ButtonComponent
          btnText={"Credit"}
          onClickHandler={() => {
            amount ? onSubmitData("+") : "";
          }}
          type={"primary"}
          isFontBold={true}
        />
      </div>
    </div>
  );
}

export default StepperComponent;
