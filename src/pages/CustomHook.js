import { useState } from "react";
import Card from "../components/ui/Card";
import useCounter from "../hooks/use-counter";

function CustomHookPage() {
  const [positiveValue, setPositiveValue] = useState(1);
  const [nevativeValue, setNegativeValue] = useState(-1);
  let counterPositive = useCounter(positiveValue);
  let counterNegative = useCounter(nevativeValue);
  return (
    <>
      <Card>
        <center>
          <p>{counterPositive}</p>
          <button onClick={() => {setPositiveValue(0)}}>Stop</button>
          <button onClick={() => {setPositiveValue(1)}}>Continue</button>
        </center>
      </Card>
      <br />
      <Card>
        <center>
          <p>{counterNegative}</p>
          <button onClick={() => {setNegativeValue(0)}}>Stop</button>
          <button onClick={() => {setNegativeValue(-1)}}>Continue</button>
        </center>
      </Card>
    </>
  );
}

export default CustomHookPage;
