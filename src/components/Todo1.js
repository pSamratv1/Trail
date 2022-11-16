import React,{useEffect} from "react";
import {useState} from "react";

const Todo1 = (items) => {
  const [itemsList, setItemList] = useState(items);

  useEffect(() => {
    setItemList(items)
  }, [items])

  return (
    <>
      <div className='todo-items'>
        {itemsList?.items?.map((element, keys) => {
          return (
            <div
              key={element.id}
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
              >
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
                    const afterChangedList = itemsList?.items?.filter(
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
                id={element.id}
                className='btn btn-danger'
                style={{
                  backgroundColor: "#f44336",
                  marginLeft: 150,
                  blockSize: 35,
                  borderRadius: 10,
                  paddingLeft: 10,
                  paddingRight: 10,
                }}
                onClick={(e) => {
                  console.log(e.target.id)
                  const newItems = itemsList?.items?.filter((item)=>{
                    return item.id !== e.target.id
                  })
                  setItemList(newItems)
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
