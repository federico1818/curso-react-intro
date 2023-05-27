function CreateTodoItemButton() {
    function onClick(event) {
        console.log(event.target)
    }
    return (
        <button 
            className="button button-icon xl"
            onClick={onClick}>
            <span className="material-symbols-outlined">
                add
            </span>
        </button>
    )
}

export { CreateTodoItemButton }