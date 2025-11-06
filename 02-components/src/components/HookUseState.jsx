import React, { useState } from "react";

const HookUseState = () => {
  const [count, setCount] = useState(35);
  const [name, setName] = useState("Gaurav");
  const [users, setUsers] = useState([10, 20, 30]);
  const [number, setNumber] = useState(0);

  const [num, setNum] = useState({ user: "Gaurav", age: 35 });

  const [num1, setNum1] = useState([10, 20, 30]);
  const [num2, setNum2] = useState({ user: "Gaurav", age: 37 });

  const [num3, setNum3] = useState(10);
  function changeCount() {
    setCount(30);
    setName("Sharda");
    setUsers([100, 200, 300]);
  }
  function increaseNum() {
    setNumber(number + 1);
  }
  function decreaseNum() {
    setNumber(number - 1);
  }
  function jumpby5() {
    setNumber(number + 5);
  }

  function btnClicked() {
    // setNum({user:'Sharda', age:28});
    const newNum = { ...num };
    console.log(newNum);

    const newNum1 = [...num1];
    newNum1.push(99);
    console.log(newNum1);
    setNum1(newNum1);

    // setNum2({...num2, age:40});
    setNum2((prev) => ({ ...prev, age: 45 }));

    // output same 10 + 1
    setNum3(num3 + 1);
    setNum3(num3 + 1);
    setNum3(num3 + 1);
    // output 10 + 3 = 13
    setNum3((prev) => prev + 1);
    setNum3((prev) => prev + 1);
    setNum3((prev) => prev + 1);
  }
  return (
    <div>
      <h1>{num3}</h1>
      <div>
        {num2.user} and {num2.age}
      </div>
      <h1>{num1}</h1>
      <h1>{number}</h1>
      <h6>Hook Component</h6>
      <h5>
        {name} age is {count}
      </h5>
      <div>User array {users}</div>

      <div>
        {num.user} and {num.age}
      </div>
      <button onClick={changeCount}>Click</button>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={jumpby5}>Jump by 5</button>

      <button onClick={btnClicked}>btnn</button>
    </div>
  );
};
export default HookUseState;
