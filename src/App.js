import { useState } from "react";
import "./App.css";
import List from "./component/List";

function App() {
  const [todo, setTodo] = useState("");
  const [works, addWorks] = useState([]);
  const todos = (event) => {
    setTodo(event.target.value);
  };
  const add = () => {
    addWorks((oldW) => {
      return [...oldW, todo];
    });
    setTodo("");
  };
  const deleteItem = (id) => {
    console.log("delete", id);
    addWorks((oldA) => {
      return oldA.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className="inbu">
        <input
          type="text"
          value={todo}
          placeholder="Write here to do"
          onChange={todos}
        />
        <button className="add" onClick={add}>
          +
        </button>
      </div>
      <ul>
        <li>Mango</li>
        {works.map((work, index) => {
          return (
            <List item={work} key={index} id={index} onSelect={deleteItem} />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
