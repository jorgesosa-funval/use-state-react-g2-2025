export default function TaskInput(props) {

    const handleSubmit = (e) => {
        e.preventDefault(); // evitar comportamiento por defecto

        const formdata = new FormData(e.target); // extraer valores del formulario

        let newTask = {
            id: 8,
            text: formdata.get('item-input') // obtener valor especifico del formulario.
        }

        const items = props.items;

        const setItems = props.setItems;
       
        setItems([...items, newTask])

        e.target.reset()
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
                    type="button">
                    Clear All
                </button>
            </form>
        </div>
    )
}
