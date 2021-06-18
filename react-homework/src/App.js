import React from 'react';
import List  from './components/list/list';
// import todoList from './json/data.json';


function App() {
  let todoList =  [
    {
      "title": "learn React JS Basic",
      "completed": false,
      "id": 1
    },
    {
      "title": "Practice React JS",
      "completed": false,
      "id": 2
    },
    {
      "title": "Learn Redux",
      "completed": false,
      "id": 3
    },
    {
      "title": "Code Portfolio in React",
      "completed": false,
      "id": 4
    },
    {
      "title": "Learn React Native",
      "completed": false,
      "id": 5
    }
  ]

  function completeTask(id) {
      todoList = todoList.map((toDo) => {
        if(toDo.id === id) {
          toDo.completed = !toDo.completed;
          console.log(todoList, toDo,)
        }
        return toDo
      })
  }

  return (
      <List completeTask={completeTask} todoList={todoList} />
  );
}

export default App;
