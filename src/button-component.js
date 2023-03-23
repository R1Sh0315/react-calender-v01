import React, { useEffect, useState } from "react";
import "./styles.css";

function ButtonComponent(props) {
  const [btnType, setButtonType] = useState("primary-btn");
  const isBold = props.isFontBold;
  const btnText = props.btnText;

  const type = props.type;
  useEffect(() => {
    const buttonType = () => {
      if (type === "primary") {
        setButtonType("primary-btn");
      } else if (type === "secondary") {
        setButtonType("secondary-btn");
      } else {
        setButtonType("ghost-btn");
      }
    };
    buttonType();
  }, [type]);

  return (
    <div className="button-container">
      <button
        onClick={props.onClickHandler}
        className={`button-contain ${btnType} ${isBold ? "bold" : ""}`}
      >
        {btnText}
      </button>
    </div>
  );
}

export default ButtonComponent;
