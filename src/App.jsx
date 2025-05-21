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
          items.length > 0 ?
            items.map((task) => {
              return (
                <TaskItem
                  key={task.id}
                  task={task}
                  items={items}
                  setItems={setItems}
                />
              )
            })
            :
            <li className="empty-list">No items added yet. Add a new item above!</li>
        }


      </ul>
    </div>
  )
}


let tasks = [
  {
    id: 20,
    text: "Jorge Sosa",
    completed: false
  },
  {
    id: 41,
    text: "Milton Morales",
    completed: false
  },

]