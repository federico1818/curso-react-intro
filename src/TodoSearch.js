import './TodoSearch.css'

function TodoSearch({
    search,
    setSearch
}) {

    function onChange(event) {
        setSearch(event.target.value)
    }

    return (
        <label className="input-search-label">
            <span className="material-symbols-outlined">
                search
            </span>
            <input
                className="input"
                type="text"
                value={ search }
                onChange={ onChange }
            />
        </label>
    )
}

export { TodoSearch }