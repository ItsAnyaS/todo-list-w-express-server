import TodoInput from './components/TodoInput';
import TodoList from "./components/TodoList";
import './App.css';
import {useState} from 'react'

function App() {
    const [taskList, setTaskList] = useState([]);
    const [test, setTest] = useState([])
    const getData = async () => {
      let req = await fetch("http://localhost:8888/todos");
      let res = await req.json()
      setTest(res)
    }
    getData()
  return (
    <div className="App">
    <h1>To-do App</h1>
    <TodoInput setTaskList={setTaskList}/>
    <TodoList taskList={taskList}/>
    <p>{test.map(element => {

      return <li>{element.message}</li>;
    })}</p>
    </div>
  );
}

export default App;
