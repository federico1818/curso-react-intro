import './TodoItem.css'

function TodoItem(props) {
    return (
        <li className={`todo-item ${ props.completed? 'completed': '' }`}>
            <label className="input-checkbox-label">
                <input type="checkbox" />
                <span className="input-checkbox-box"></span>
            </label>
            <span className="todo-item-text">{ props.text }</span>
            <button className="button button-icon lg">
                <span className="material-symbols-outlined">
                    delete
                </span>
            </button>
        </li>
    )
}

export { TodoItem }