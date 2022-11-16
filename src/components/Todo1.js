import React, {useEffect} from "react";import {useState} from "react";

const Todo1 = (items) => {
  const [itemsList, setItemList] = useState([]);

  useEffect(() => {
    setItemList(items.items);
  }, [items]);
  console.log("item", items.items);

  return (
    <>
      <div className='todo-items'>
        {itemsList?.map((element, keys) => {
          return (
            <div
              key={keys}
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
              }}>
              <span
                style={{
                  fontSize: 25,
                  fontWeight: 600,
                  marginLeft: 10,
                }}>
                {keys + 1}. {element.text}
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
                onChange={(e) => {
                  ////this logic needs to be changed
                  const changeHandler = (id) => {
                    const afterChangedList = itemsList?.items?.filter(
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
                  const newItems = itemsList?.filter((item) => {
                    console.log("itemid:", typeof item.id);
                    console.log("e.target.id:", typeof e.target.id);

                    return item.id != e.target.id;
                  });
                  console.log("newItems:", {newItems});
                  setItemList(newItems);
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
