export default function TaskItem(props) {
    // object destructuring
    return (
        <li className="item">
            <span className="item-text">{props.text}</span>
            <div className="item-actions">
                <button className="btn btn-complete" data-id={props.id}>Complete</button>
                <button className="btn btn-delete" data-id={props.id}>Delete</button>
            </div>
        </li>
    )
}
