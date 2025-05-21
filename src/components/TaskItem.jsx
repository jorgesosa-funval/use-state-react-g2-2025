export default function TaskItem({ task, items, setItems }) {
    const { id, text, completed } = task
    const handleDelete = (e) => {
        const id = parseInt(e.target.getAttribute("data-id")); 
        // const newArray = items.filter(item => item.id !== id)
        //setItems(newArray)
        const index = items.findIndex(item => item.id  === id); // encontrar posición del elemento en el array items
        const itemsCopy = [...items]; // hago una copia del estado (array)
        itemsCopy.splice(index, 1); // elimino el elemento basado en su posición
        setItems(itemsCopy); // actualizo el valor del estado 
    }

    const handleCompleted = () => {

    }

    return (
        <li className="item">
            <span className="item-text">{text}</span>
            <div className="item-actions">
                <button
                    className="btn btn-complete"
                    data-id={id}
                    onClick={handleCompleted}>
                    Complete
                </button>
                <button
                    className="btn btn-delete"
                    data-id={id}
                    onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </li>
    )
}
