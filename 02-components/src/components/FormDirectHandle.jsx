const FormDirectHandle = () => {
  const submitHandler = () => {
    console.log("Form Submitted");
  };
  const submitHandler1 = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };
  return (
   
    <div>
       <h2>this is direct, but we need react to handle it using two way binding</h2>
      Form submiited and refreshed
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Enter your name" />
        <br />
        <button type="submit">Submit</button>
      </form>
        <br />
      Prevent default behavior of form submission using event.preventDefault()
      <form
        onSubmit={(e) => {
          submitHandler1(e);
        }}
      >
        <input type="text" placeholder="Enter your name" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormDirectHandle;
