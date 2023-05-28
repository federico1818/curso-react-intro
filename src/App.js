import './App.css'
import React from 'react'
import { TodoList }   from './TodoList'
import { TodoItem }   from './TodoItem'
import { NavigationBar } from './NavigationBar'

function App() {
    const [search, setSearch] = React.useState('')
    const [todos, setTodos] = React.useState([
        { text: 'tarea 01', completed: false },
        { text: 'tarea 02', completed: true },
        { text: 'tarea 03', completed: false },
        { text: 'TAREA 04', completed: false }
    ])
    const filtered = todos.filter(todo => {
        return todo.text.toLowerCase().includes(search.toLowerCase())
    })
    const toggleCompletedTodo = (text) => {
        const todosCopy = [...todos]
        const index = todosCopy.findIndex(todo => todo.text == text )
        todosCopy[index].completed = !todosCopy[index].completed
        setTodos(todosCopy)
    }
    return (
        <>
            <h1>To do list</h1>
            <TodoList
                search={ search }
                setSearch={ setSearch }
            >
                { filtered.map(todo => (
                    <TodoItem
                        key={ todo.text }
                        todo={ todo }
                        onCompletedChange={ () => { 
                            toggleCompletedTodo(todo.text) 
                        }}
                    />
                )) }
            </TodoList>
            <NavigationBar />
        </>
    );
}

export default App;
