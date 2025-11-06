import React, { useState } from "react";

const FormNotesApplication = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail]=useState("");

  const [tasks, setTasks] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title, detail);

    const copyTask=[...tasks];
    copyTask.push({title, detail});
    setTasks(copyTask);
    console.log(tasks);
    setTitle("");
    setDetail("");
  };
  const deleteNote=(idx)=>{
   console.log("delete note", idx);
   const copyTask=[...tasks];
   copyTask.splice(idx,1);
   setTasks(copyTask)
  }
  return (
    <>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          placeholder="heading"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br></br>
        <textarea placeholder="notes" value={detail} onChange={(e)=>{
          setDetail(e.target.value)
        }}></textarea>
        <br></br>
        <button>Add Note</button>
      </form>
      <div>
        {tasks.map(function(ele, idx){
       return (<div key={idx}>
          <h3>{ele.title}</h3>
          <p>{ele.detail}</p>
          <button onClick={()=>{
            deleteNote(idx);
          }}>Delete Note</button>
          <hr></hr>
        </div>
       )
        })}
      </div>
    </>
  );
};

export default FormNotesApplication;
