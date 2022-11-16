import React from "react";
import {useState} from "react";
import Todo1 from "./Todo1";

const Text = () => {
  ////Three state : text stores text inputs and category hold categories and finally ItemList hold both of text and category in it.
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  const [ItemList, setItemList] = useState([]);

  ///onclick function for submit
  const handleSubmit = (e) => {
    e.preventDefault();
    ///set list with previous value + latest value provided bt states.
    setItemList([
      ...ItemList,
      {
        texts: text,
        categories: category,
        complete: false,
      },
    ]);
    ///once add is click text and category feild needs to be reset fro new input.
    setText("");
    setCategory("");
  };

  return (
    <>
    {/* Now rendering the UI */}
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
              onChange={(e) => {
                ///during change in text feild that needs to be registered in text state
                setText(e.target.value);
              }}
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
              onChange={(e) => {
                ///during change in category feild that needs to be registered in category state
                setCategory(e.target.value);
              }}
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
            // finally calling the on click function during submit
            onClick={handleSubmit}>
            Add
          </button>
        </div>
      </div>
      <Todo1 List={ItemList}></Todo1>
    </>
  );
};

export default Text;
