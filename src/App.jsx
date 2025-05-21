import { useState } from 'react'
import TaskItem from './components/TaskItem'
import TaskInput from './components/TaskInput'

export default function App() {
  const [items, setItems] = useState(tasks);

  return (
    <div className="container">
      <h1>DOM Manipulation Project</h1>
        {/* {
          TaskInput(items, setItems)
        } */}
        
      <TaskInput
        items={items}
        setItems={setItems}
      />

      <ul className="items-container" id="items-list">

        {
          items.map((task) => {
            return (
              <TaskItem
                text={task.text}
                id={task.id}
              />
            )
          })
        }


        {/* <li className="empty-list">No items added yet. Add a new item above!</li> */}
      </ul>
    </div>
  )
}


let tasks = [
  {
    id: 1,
    text: "Jorge Sosa"
  },
  {
    id: 2,
    text: "Milton Morales"
  },
]