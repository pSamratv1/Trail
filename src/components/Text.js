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
    setItemList((prev) => [
      ...prev,
      {id: Math.floor(Math.random() * 100) + 1, text: text, category: category},
    ]);
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
          <form onSubmit={handleSubmit}>
            <div
              className='todo-input-text'
              style={{
                display: "flexbox",
                justifyContent: "center",
              }}>
              <input
                type='text'
                required
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
                required
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
              type='submit'
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
              }}>
              Add
            </button>
          </form>
        </div>
      </div>
      <Todo1 items={ItemList} />
    </>
  );
};

export default Text;
