import { Fragment, useState } from "react";
import "./styles.css"

const App = () => {
  const [count, setCount] = useState(0);
  const handlePlusCount = () => {
    setCount(count + 1);
  };
  const handleMinusCount = () => {
    setCount(count - 1);
  };
  const handleResetCount = () => {
    setCount(0);
  };

  return (
    <Fragment>
      Count : {count} <br />
      <button className="plusBtn" onClick={handlePlusCount}>+</button>
      <button className="minusBtn" onClick={handleMinusCount}>-</button>
      <button className="resetBtn" onClick={handleResetCount}>Reset</button>
    </Fragment>
  )
}

export default App