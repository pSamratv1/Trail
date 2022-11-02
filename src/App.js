import logo from './logo.svg';
import './App.css';

function App() {
  const [text, setText] = useState("");
  const [ItemList, setItemList] = useState([]);

  const addItem = () => {
    if (!text) {
    } else setItemList([...ItemList, text]);
    setText("");
  };
  const deleteItem = (id) => {
    const afterDeletedList = ItemList.filter((element, keys) => {
      return keys !== id;
    });
    setItemList(afterDeletedList);
  };
  return (
    <div className='App'>
      <div className='todo-head'>
        <h1
          className='todo-title'
          style={{
            display: "flex",
            justifyContent: "center",
            marginLeft: 600,
            marginTop: 100,
            width: 200,
          }}>
          Todo Lists
        </h1>
        <div
          className='todo-body'
          style={{
            width: 400,
            height: 200,
            marginLeft: 500,
            marginTop: 100,
          }}>
          <div
            className='todo-input-text'
            style={{
              display: "flexbox",
              justifyContent: "center",
            }}>
            <input
              type='text'
              placeholder='Add your list here....'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <button
            className='btn'
            style={{backgroundColor: "#008CBA"}}
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
                  }}
                  key={keys}>
                  {element}
                  <button
                    className='btn btn-danger'
                    style={{
                      display: "flex",
                      backgroundColor: "#f44336",
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

export default App;
