export default function TaskInput({ items, setItems }) {
    // const {items , setItems} = props
    const handleSubmit = (e) => {
        e.preventDefault(); // evitar comportamiento por defecto

        const formdata = new FormData(e.target); // extraer valores del formulario
        const inputValue = formdata.get('item-input').trim()
        if (inputValue === "") {
            alert("EL item no puede estar vació");
            return;
        }

        let newTask = {
            id: items[items.length -1]?.id  + 1 || 1,
            text: inputValue, // obtener valor especifico del formulario.
            completed: false
        }

        setItems([...items, newTask])

        e.target.reset()
    }

    const handleDelete = () => {
        const confirmar = confirm("Seguro que deseas eliminar todas las tareas?");
        if (confirmar === true) {
            setItems([])
        }
        alert("Todas las tareas han sido eliminadas con éxito");
    }


    return (
        <div>
            <form className="input-section" onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="item-input"
                    name="item-input"
                    placeholder="Enter item text..."
                />
                <button
                    className="btn btn-add"
                    id="add-btn"
                    type="submit">
                    Add Item
                </button>
                <button
                    className="btn btn-clear"
                    id="clear-btn"
                    type="button"
                    onClick={handleDelete}
                >
                    Clear All
                </button>
            </form>
        </div>
    )
}
