import './TodoItem.css'

function TodoItem(props) {
    return (
        <li className="todo-item">
            <label className="input-checkbox-label">
                <input type="checkbox" />
                <span className="input-checkbox-box"></span>
            </label>
            <span>{ props.text }</span>
            <button>
                <span className="material-symbols-outlined">
                    delete
                </span>
            </button>
        </li>
    )
}

export { TodoItem }