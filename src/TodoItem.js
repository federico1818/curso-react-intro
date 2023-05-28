import './TodoItem.css'

function TodoItem({ todo, onCompletedChange }) {
    return (
        <li className={`todo-item ${ todo.completed? 'completed': '' }`}>
            <label className="input-checkbox-label">
                <input 
                    type="checkbox"
                    onChange={ onCompletedChange }
                />
                <span className="input-checkbox-box"></span>
            </label>
            <span className="todo-item-text">{ todo.text }</span>
            <button className="button button-icon lg">
                <span className="material-symbols-outlined">
                    delete
                </span>
            </button>
        </li>
    )
}

export { TodoItem }