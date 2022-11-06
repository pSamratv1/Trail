import React from "react";
import {useState} from "react";

const Todo1 = ({text, category}) => {
  let complete = false;
  const [ItemList, setItemList] = useState([{text, category, complete}]);

  return (
    <>
      <div className='todo-items'>
        {ItemList.map((element, keys) => {
          return (
            <div
              className='todo-individual-list'
              style={{
                display: "flexbox",
                marginTop: 10,
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
                {keys + 1}.{element.text}
              </span>
              <p
                className='category-text'
                style={{
                  fontSize: 15,
                  marginLeft: 50,
                  fontWeight: 500,
                }}>
                Category:-<span> </span>
                {element.category}
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
                  const changeHandler = (id) => {
                    const afterChangedList = ItemList.filter(
                      (element, keys) => {
                        if (keys === id) {
                          return (element.complete = !element.complete);
                        }
                        return setItemList(afterChangedList);
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
                onClick={() => {
                  const deleteItem = (id) => {
                    const afterDeletedList = ItemList.filter(
                      (element, keys) => {
                        return keys !== id;
                      }
                    );
                    afterDeletedList();
                  };
                  deleteItem(keys);
                }}>
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
