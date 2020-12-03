import React, {useEffect, useState} from "react";
import axios from 'axios'

//Components
import Todo from './Todo'
import TodoForm from './TodoForm'

/*
  TodoMVC ✔️
  1. display todos ✔️
  2. add todo ✔️
  3. cross off todo ✔️
  4. show number of active todos ✔️
  5. delete todo  ✔️
  <--- EXTRA CREDIT 👇 ---> 
  6. filter all/active/complete 
  7. delete all complete
    7.1 only show if atleast one is complete 
  8. button to toggle all on/off 

  https://appian-mock.herokuapp.com/todos
*/

/*
Converting to hooks
1. Convert From Class to functional component
2. Remove the render
3. Import useEffect and useState
4. Change initial state with useState
5. Change componentDidMount into useEffect
6. Change functions into consts
7. Remove the 'this' and 'state' 
8. Replace setState with setTodos
*/



const TodoList  = () => {

  // setting up intial state
  const [todos, setTodos] = useState([])

  //Used to fetch data after component renders
  // componentDidMount(){
  //   axios.get('https://appian-mock.herokuapp.com/todos').then((res) => {
  //     this.setState({
  //       todos: res.data
  //     })
  //   })
  // }

  // Use Effect which Runs everytime the component loads
  useEffect(() => {
    axios.get('https://appian-mock.herokuapp.com/todos').then((res) => {
      setTodos(res.data)
    })
  },[])


  // function that passed to grab todo from child
  const addTodo = (todo) => {
       // creating a copy of state todos and adding a new value to the front
      setTodos([todo, ...todos])
  }

  // function that gets passed an id and toggles compete field from false to true - true to false
    const toggleComplete = (id) => {
        setTodos(
          todos.map((todo) => {
            // check if each id is equal to the id that we passed
            if(todo.id === id){
              // if true change toggle the complete value to either true or false
              return {
                ...todo,
                compete: !todo.compete
              };
            }else{
              // return the rest of the todos
              return todo;
            }
          })
        )


    }

    const deleteTodo = (id) => {
    // this.setState((state) => ({
    //   // filter out each todo in a new array that doesn't equal to the id being passed
    //   todos: state.todos.filter((todo) => todo.id !== id)
    // }))

    setTodos(todos.filter((todo) => todo.id !== id))

    }

  
    console.log("@@@@@@@@@@-State", todos)
    return( 
    <div>
      <TodoForm addTodo={addTodo}/>
     {/* mapping through the array of todos in the state  */}
      {todos.map(todo => (
        <Todo key={todo.id} text={todo.text} compete={todo.compete} 
        toggleComplete={()=> toggleComplete(todo.id)} 
        deleteTodo={() => deleteTodo(todo.id)}/>
      ))}
      <div>
        {/* filter out all of the NOT completed todos in a new array and get the length*/}
        todos left: {todos.filter((todo)=> !todo.compete).length}
      </div>
    </div>
    )
  
}

export default TodoList;
