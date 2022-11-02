import {React, useState} from "react";

function Todo() {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  const [completion, setCompletion] = useState(false);
  const [ItemList, setItemList] = useState([]);

  const addItem = () => {
    if (!text) {
    } else setItemList([...ItemList, {text, category, completion}]);
    setText("");
    setCategory("");
  };
  const deleteItem = (id) => {
    const afterDeletedList = ItemList.filter((element, keys) => {
      return keys !== id;
    });
    setItemList(afterDeletedList);
  };
  const changeHandler = (id) => {
    setCompletion(!completion);
  };
  return (
    <div
      className='App'
      style={{
        backgroundColor: "black",
      }}>
      <div
        className='todo-head'
        style={{
          height: 1000,
        }}>
        <h1
          className='todo-title'
          style={{
            display: "flex",
            justifyContent: "center",
            marginLeft: 600,
            width: 200,
            color: "#aac7df",
          }}>
          Todo Lists
        </h1>
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
            onClick={addItem}>
            Add
          </button>
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
                    type='checkbox'
                    checked={completion}
                    style={{
                      width: 15,
                      height: 15,
                      marginLeft: 300,
                    }}
                    onChange={(e) => changeHandler(keys)}
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
                    onClick={() => deleteItem(keys)}>
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
