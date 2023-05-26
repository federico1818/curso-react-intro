import './App.css'
import { TodoList }   from './TodoList'
import { TodoItem }   from './TodoItem'
import { NavigationBar } from './NavigationBar'

const todos = [
    { text: 'tarea 1', completed: false },
    { text: 'tarea 2', completed: true },
    { text: 'tarea 3', completed: false },
    { text: 'tarea 4', completed: false }
]

function App() {
    return (
        <>
            <h1>To do list</h1>
            <TodoList>
                { todos.map(todo => (
                    <TodoItem
                        key={ todo.text }
                        text={ todo.text }
                    />
                )) }
            </TodoList>
            <NavigationBar />
        </>
    );
}

export default App;
