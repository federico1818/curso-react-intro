import React from "react"
import { TodoSearch } from "./TodoSearch"

function TodoList({
    children,
    search,
    setSearch
}) {
    return (
        <div className="todo-box">
            <TodoSearch
                search={ search }
                setSearch={ setSearch } 
            />
            <ul className="todo-list">
                { children }
            </ul>
        </div>
    )
}

export { TodoList }