import React from "react";import {useState} from "react";


const Text = () => {
  let count = 0;
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  const handleSubmit = (e) => {
    setText(text);
    setCategory(category);
    count = count + 1;
  };
  return (
    <div>
      <div
        className='todo-body'
        style={{
          width: 400,
          height: 200,
          marginLeft: 500,
        }}>
        <div
          className='todo-input-text'
          style={{
            display: "flexbox",
            justifyContent: "center",
          }}>
          <input
            type='text'
            style={{
              height: 30,
              marginLeft: 120,
              display: "flex",
            }}
            placeholder='Add your Todo here....'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type='text'
            style={{
              marginTop: 5,
              height: 30,
              marginLeft: 120,
            }}
            placeholder='Add your Category here....'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <button
          className='btn'
          style={{
            backgroundColor: "#008CBA",
            blockSize: 35,
            marginTop: 10,
            marginLeft: 150,
            width: 100,
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius: 10,
          }}
          onSubmit={handleSubmit()}>
          Add
        </button>
      </div>
      <Todo1 text= {text} category={category}/>
      );
    </div>
  );
};

export default Text;
