import { useState } from "react"
import { Todosinput } from "./todos.input"
import { Todositem } from "./todos.items"
import { v4 as uuid } from "uuid"
export const Todos = ()=>{
    const [todos,setTodos] = useState([])

    const handellclick = (text)=>{
        const payloade = {
            title:text,
            id:uuid(),
            status:false
        }
        setTodos([...todos,payloade])
    }

    const DeleteTodo = (id)=>{
       
    }
  return (
      <div>
          <Todosinput handellclick={handellclick}/>
          {todos.map((e)=>{
              return <Todositem key={e.id} DeleteTodo={DeleteTodo} title = {e.title} status ={e.status}/>
          })}
      </div>
  )
}