import React from "react";import {useState} from "react";
import Todo1 from "./Todo1";

const Text = () => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  const [ItemList, setItemList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setItemList([...ItemList, {category, text}]);
    setText("");
    setCategory("");
  };

  return (
    <>
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
            onClick={handleSubmit}>
            Add
          </button>
        </div>
      </div>
      {/* <Todo1 list={ItemList} /> */}
    </>
  );
};

export default Text;
