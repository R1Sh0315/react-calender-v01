import { useEffect, useState } from "react";
import CalenderComponent from "./calender";
import useWindowDimensions from "./screen-resolution";
import StepperComponent from "./stepper-component";
import "./styles.css";
import TableComponent from "./table-component";

export default function App() {
  const { height, width } = useWindowDimensions();
  const [customerData, setCustomerData] = useState();

  const mockData = [
    { userAmount: 123, dateOfSubmit: "22-03-2023", timeOfSubmit: "22:03:25" },
    { userAmount: 555, dateOfSubmit: "22-03-2023", timeOfSubmit: "22:03:25" },
  ];

  useEffect(() => {
    console.log("App :", customerData);
  }, [customerData]);
  return (
    <div className="App">
      {/* <StepperComponent userData={(data) => setCustomerData(data)} />
      <div>
        <TableComponent userData={customerData} />
      </div>
      <div>
        width: {width} ~ height: {height}
      </div> */}
      <CalenderComponent />
    </div>
  );
}
