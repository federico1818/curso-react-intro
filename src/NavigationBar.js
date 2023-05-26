import './NavigationBar.css'
import { CreateTodoItemButton } from "./CreateTodoItemButton"

function NavigationBar() {
    return (
        <div className="navigation-bar">
            <CreateTodoItemButton />
        </div>
    )
}

export { NavigationBar }