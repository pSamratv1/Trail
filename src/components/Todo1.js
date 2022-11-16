import {React, useState} from "react";
const Todo1 = (props) => {
  ////passed array of objects as a props and iterate over it to visualize
  return (
    <>
      <div className='todo-items'>
        {/* using map function to map the props array and destucturing  that array into index and element on that index */}
        {props.List.map((element, keys) => {
          return (
            <div
              className='todo-individual-list'
              style={{
                display: "flexbox",
                marginTop: 10,
                marginLeft: 470,
                width: 450,
                border: "1px solid green",
                borderRadius: 20,
                backgroundColor: "#cdbc1d",
                color: "#0e1aed",
                fontSize: 15,
              }}
              key={keys}>
              <span
                style={{
                  fontSize: 25,
                  fontWeight: 600,
                  marginLeft: 10,
                }}>
                {keys + 1}.{element.texts}
              </span>
              <p
                className='category-text'
                style={{
                  fontSize: 15,
                  marginLeft: 50,
                  fontWeight: 500,
                }}>
                Category:-<span> </span>
                {element.categories}
              </p>
              <input
                name='checkbox'
                type='checkbox'
                checked={element.completion}
                style={{
                  width: 15,
                  height: 15,
                  marginLeft: 300,
                }}
                onChange={() => {
                  ////this logic needs to be changed
                  const changeHandler = (id) => {
                    const afterChangedList = props.List.filter(
                      (element, keys) => {
                        if (keys === id) {
                          return (element.complete = !element.complete);
                        }
                        return afterChangedList;
                      }
                    );
                  };
                  changeHandler(keys);
                }}
              />
              Completed
              <button
                className='btn btn-danger'
                style={{
                  backgroundColor: "#f44336",
                  marginLeft: 150,
                  blockSize: 35,
                  borderRadius: 10,
                  paddingLeft: 10,
                  paddingRight: 10,
                }}
                // Delete logic needs to be resetteled
                onClick={console.log("Delete")}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Todo1;
