import { TodoSearch } from "./TodoSearch"

function TodoList(props) {
    return (
        <div className="todo-box">
            <TodoSearch />
            <ul className="todo-list">
                { props.children }
            </ul>
        </div>
    )
}

export { TodoList }