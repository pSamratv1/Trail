import {React} from "react";
import Text from "./components/Text";

function App() {
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

        <Text />
      </div>
    </div>
  );
}

export default App;
