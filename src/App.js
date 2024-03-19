import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const[listTodo, setListTodo] = useState([]);

  // items add  function 
  let addList = (inputText)=>{

    if(inputText!==''){
      setListTodo([...listTodo, inputText])
    }
  }

  //items delete function 
  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1)
    setListTodo([...newListTodo]);
  }

  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList = {addList} />
        <h2 className='app-heading'>TODO</h2>
        <hr />
        {
          listTodo.map((listItem, i)=>{
            return(
              <TodoList key={i} index={i} item = {listItem} deleteItem={deleteListItem} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
