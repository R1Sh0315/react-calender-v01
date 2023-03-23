import React from "react";

function TableComponent(props) {
  const transactionType = ["debit", "credit"];

  const rows = props.userData?.map((cell) => (
    <div className="table-row-data">
      {Object.values(cell).map((cellData) =>
        cellData !== "debit" && cellData !== "credit" ? (
          <div
            className={`table-cell ${
              cellData[0] === "-"
                ? "debited-amount"
                : cellData[0] === "+"
                ? "credited-amount"
                : ""
            }`}
          >
            {cellData}
          </div>
        ) : (
          ""
        )
      )}
    </div>
  ));

  return (
    <div className="table-container">
      {/* <div className="table-header">header</div> */}
      {rows}
    </div>
  );
}

export default TableComponent;
