import Card from "./components/Card";
import FormDirectHandle from "./components/FormDirectHandle";
import FormNotesApplication from "./components/FormNotesApplication";
import FormTwoWayBindingUsingReact from "./components/FormTwoWayBindingUsingReact";
import HookUseState from "./components/HookUseState";
import Navbar from "./components/Navbar";
const App = () => {
  const arr = [
    { user: "Gaurav", age: 30 },
    { user: "Sharda", age: 28 },
    { user: "John", age: 32 },
  ];

  // const obj = {
  //   user: "Alice",
  //   age: 25,
  // }
  // console.log(obj.user);

  // arr.map(function (elem) {
  //   console.log(elem);
  // });
  return (
    <>
      {/* <Navbar  />
      {arr.map(function (elem, idx) {
        return <Card key={idx} user={elem.user } age={elem.age} />;
      })} */}

      {/* <HookUseState  /> */}

      {/* <FormDirectHandle/> */}

      {/* <FormTwoWayBindingUsingReact /> */}
      <FormNotesApplication />
    </>
  );
};

export default App;
